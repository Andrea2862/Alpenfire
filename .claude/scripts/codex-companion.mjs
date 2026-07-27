#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";

const PROJECT_ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const SETTINGS_PATH = join(PROJECT_ROOT, ".claude", "settings.local.json");
const HOOK_COMMAND = `node "\${CLAUDE_PROJECT_DIR}/.claude/scripts/stop-review-gate-hook.mjs"`;
const HOOK_TIMEOUT = 900;

function detectCodex() {
  const probe = spawnSync("codex", ["--version"], { encoding: "utf8" });
  if (probe.error || probe.status !== 0) {
    return { installed: false, version: null };
  }
  return { installed: true, version: probe.stdout.trim() };
}

function detectAuth() {
  const authPath = join(homedir(), ".codex", "auth.json");
  return existsSync(authPath);
}

function detectNpm() {
  const probe = spawnSync("npm", ["--version"], { encoding: "utf8" });
  return !probe.error && probe.status === 0;
}

function readSettings() {
  if (!existsSync(SETTINGS_PATH)) return {};
  try {
    return JSON.parse(readFileSync(SETTINGS_PATH, "utf8"));
  } catch {
    return {};
  }
}

function writeSettings(settings) {
  mkdirSync(dirname(SETTINGS_PATH), { recursive: true });
  writeFileSync(SETTINGS_PATH, `${JSON.stringify(settings, null, 2)}\n`);
}

function isReviewGateEntry(entry) {
  return (entry?.hooks ?? []).some((h) => h.command === HOOK_COMMAND);
}

function reviewGateEnabled() {
  const settings = readSettings();
  return (settings.hooks?.Stop ?? []).some(isReviewGateEntry);
}

function setReviewGate(enabled) {
  const settings = readSettings();
  settings.hooks ??= {};
  settings.hooks.Stop ??= [];
  settings.hooks.Stop = settings.hooks.Stop.filter((e) => !isReviewGateEntry(e));
  if (enabled) {
    settings.hooks.Stop.push({
      hooks: [{ type: "command", command: HOOK_COMMAND, timeout: HOOK_TIMEOUT }],
    });
  }
  if (settings.hooks.Stop.length === 0) delete settings.hooks.Stop;
  if (Object.keys(settings.hooks).length === 0) delete settings.hooks;
  writeSettings(settings);
}

function runSetup(args) {
  const wantEnable = args.includes("--enable-review-gate");
  const wantDisable = args.includes("--disable-review-gate");
  if (wantEnable && wantDisable) {
    return { ok: false, error: "--enable-review-gate and --disable-review-gate are mutually exclusive" };
  }
  if (wantEnable) setReviewGate(true);
  if (wantDisable) setReviewGate(false);

  const codex = detectCodex();
  const npmAvailable = detectNpm();
  const authenticated = codex.installed ? detectAuth() : false;

  return {
    ok: true,
    codexInstalled: codex.installed,
    codexVersion: codex.version,
    codexAuthenticated: authenticated,
    npmAvailable,
    reviewGateEnabled: reviewGateEnabled(),
    guidance: !codex.installed
      ? "Codex CLI not found on PATH."
      : !authenticated
        ? "Codex is installed but not authenticated. Run `!codex login`."
        : "Codex is installed and authenticated.",
  };
}

function main() {
  const [, , subcommand, ...rest] = process.argv;
  const asJson = rest.includes("--json");
  const args = rest.filter((a) => a !== "--json");

  if (subcommand !== "setup") {
    process.stderr.write(`Unknown subcommand: ${subcommand}\n`);
    process.exit(1);
  }

  const result = runSetup(args);
  if (asJson) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } else {
    process.stdout.write(`${result.guidance}\nReview gate: ${result.reviewGateEnabled ? "enabled" : "disabled"}\n`);
  }
  process.exit(result.ok ? 0 : 1);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
