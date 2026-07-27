#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

const REVIEW_TIMEOUT_MS = 15 * 60 * 1000;

function readStdin() {
  try {
    return JSON.parse(readFileSync(0, "utf8"));
  } catch {
    return {};
  }
}

function allow() {
  process.exit(0);
}

function block(reason) {
  process.stdout.write(`${JSON.stringify({ decision: "block", reason })}\n`);
  process.exit(0);
}

function getDiff() {
  const diff = spawnSync("git", ["diff", "HEAD"], { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 });
  return diff.status === 0 ? diff.stdout : "";
}

function buildPrompt(diff) {
  return [
    "You are a stop-time review gate for an AI coding session.",
    "Review the following uncommitted git diff for correctness, safety, and completeness.",
    "Respond with exactly one line:",
    '- "ALLOW: <short reason>" if the change is acceptable to stop on.',
    '- "BLOCK: <what must be fixed>" if there is a real defect that should be fixed before stopping.',
    "",
    "Diff:",
    "```diff",
    diff || "(no uncommitted changes)",
    "```",
  ].join("\n");
}

function main() {
  readStdin();

  const codexProbe = spawnSync("codex", ["--version"], { encoding: "utf8" });
  if (codexProbe.error || codexProbe.status !== 0) {
    process.stderr.write("codex CLI not available; review gate skipped.\n");
    return allow();
  }

  const diff = getDiff();
  if (!diff.trim()) {
    return allow();
  }

  const prompt = buildPrompt(diff);
  const review = spawnSync("codex", ["exec", prompt], {
    encoding: "utf8",
    timeout: REVIEW_TIMEOUT_MS,
    maxBuffer: 10 * 1024 * 1024,
  });

  if (review.error || review.status !== 0) {
    process.stderr.write(`codex review failed: ${review.error?.message ?? review.stderr}\n`);
    return allow();
  }

  const output = review.stdout.trim();
  const match = output.match(/(ALLOW|BLOCK):\s*(.*)/s);
  if (!match) {
    process.stderr.write(`codex review returned an unrecognized response:\n${output}\n`);
    return allow();
  }

  const [, verdict, reason] = match;
  if (verdict === "BLOCK") {
    return block(reason.trim());
  }
  return allow();
}

main();
