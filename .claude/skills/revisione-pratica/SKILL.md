---
name: revisione-pratica
description: Revisione di una pratica o di un documento prima dell'invio (preventivo, contratto, sollecito, comunicazione al personale, prospetto economico, piano d'intervento) per Garamond Consulting, Edelfeuer Srl e Holzackt d.o.o. Usare quando Andrea scrive "revisione pratica", "controlla questa pratica/bozza", "rivedi prima dell'invio" o consegna un documento da verificare. Doppio passaggio (critico, poi informativo), correzione immediata degli errori meccanici, domande solo sulle scelte di merito.
---

# Revisione pratica

**Skill interna** di Garamond Consulting. Metodo adattato dalla revisione pre-merge di gstack (garrytan/gstack, licenza MIT): doppio passaggio, fix-first, integrità dei controlli. Non sostituisce il parere del professionista abilitato (legale, fiscale, contabile, del lavoro).

## Procedura

1. **Leggi integralmente** il documento e gli allegati. Se mancano documenti richiamati, elencali come "Dato non disponibile".
2. **Ricostruisci** soggetti, date, importi, accordi. Distingui fatti accertati, dichiarati, ipotesi, valutazioni.
3. **Passaggio 1 (CRITICO)**, nell'ordine:
   - **Identità**: ragione sociale, sede, P.IVA coerenti in ogni pagina. Edelfeuer Srl (Via Noncello 21, Pordenone) ≠ Holzackt d.o.o. (Izola): è l'unica d.o.o. da indicare, esiste una seconda società con denominazione quasi identica e P.IVA diversa. Marchio corretto (Alpen Pellet, Alpenfire® Professional/Deluxe, Holzackt Plus Pellet).
   - **Importi**: ricalcola imponibile, IVA, contributi, imposte, totale; verifica aliquote; nessun arrotondamento non dichiarato; il totale del testo coincide con tabelle e allegati.
   - **Date e termini**: decorrenza, scadenza, preavviso, recesso; periodi coincidenti tra documenti collegati (competenza, cassa, esercizio). Norme, CCNL, aliquote e scadenze vanno verificate su fonte aggiornata, altrimenti "Aspetto da verificare".
   - **Propagazione**: se un dato è stato cambiato (importo, data, denominazione), controllalo in *tutti* i documenti che lo riportano, anche fuori dalla modifica.
   - **Deroghe**: ogni sconto, eccezione o ipotesi favorevole deve avere motivazione verificabile nel fascicolo. Mai modificare soglie o ipotesi per far quadrare il risultato; citazioni non verificate non eliminano il rilievo.
   - **Parere professionale**: segnala le parti da sottoporre al professionista qualificato.
4. **Passaggio 2 (INFORMATIVO)**: fatti/ipotesi distinti; allegati presenti; tono adatto al destinatario; niente ripetizioni; firma "dott. Andrea Rossi" (formale) o "Andrea" (clienti, informale); riservatezza (nessun dato di altre pratiche).
5. **Fix-first**: correggi subito refusi, somme, date palesemente errate e riportali sotto "Corretti automaticamente". Le scelte di merito vanno sotto "Da decidere", con correzione consigliata. Non alterare il contenuto sostanziale senza evidenziarlo.
6. **Per piani, preventivi, iniziative** aggiungi: cosa è fuori ambito e cosa esiste già; errori possibili e rimedi; rischi contrattuali/fiscali; sostenibilità economica e di cassa; reversibilità; tenuta a 12-24 mesi; lettura indipendente prima dell'invio.

## Formato dell'esito (asciutto, un rigo per problema, uno per la correzione)

```
Revisione pratica [nome]: N rilievi (X critici, Y informativi)

CORRETTI AUTOMATICAMENTE:
- [documento, pagina] problema → correzione applicata

DA DECIDERE:
- [documento, pagina] problema
  Correzione consigliata: ...

DATI MANCANTI / DA VERIFICARE:
- ...
```
Nessun rilievo: "Revisione pratica: nessun rilievo."

## Pre-flight (prima di consegnare l'esito)
Rileggi i passaggi 1 e 2 e verifica: (a) ogni importo ricalcolato mostrando il procedimento quando utile; (b) nessuna norma o aliquota citata senza verifica; (c) nessuna ipotesi presentata come fatto; (d) nessun dato inventato; (e) le correzioni automatiche sono elencate, nessuna è nascosta.

## Stato
Criteri non ancora tarati su pratiche reali: dopo il primo uso, annotare in task-observer cosa manca o è superfluo. Riferimento esteso: `Criteri_revisione_pratiche_da_gstack.md` nella radice del repository.
