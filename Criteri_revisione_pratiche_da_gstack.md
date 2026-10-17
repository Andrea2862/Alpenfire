# Criteri di revisione per le pratiche Garamond Consulting
*Adattati dalla metodologia di revisione di gstack (`review/checklist.md`, `plan-ceo-review`). Bozza di lavoro per il dott. Andrea Rossi; non è un parere professionale.*

## 1. Principi ripresi da gstack

| Principio gstack | Applicazione in Garamond |
|---|---|
| Doppio passaggio: prima i punti **critici**, poi quelli informativi | Prima di ogni invio verificare i rischi che producono un danno (sanzioni, decadenze, errori di importo, soggetto sbagliato), poi i miglioramenti formali |
| **Fix-first**: correggere subito gli errori meccanici, chiedere solo sulle questioni dubbie | Refusi, totali, date palesemente errate si correggono e si segnalano; le scelte di merito vanno a una sola domanda al professionista |
| **Gate integrity**: un controllo non si allenta per far "tornare" il risultato | Non si modifica una soglia, un'aliquota o un'ipotesi solo per far quadrare il prospetto; ogni deroga richiede una motivazione verificabile nel fascicolo |
| **Completezza**: se la versione completa costa poco, non fermarsi all'80-90% | Un documento con un allegato o un calcolo mancante, facile da aggiungere, non va inviato incompleto |
| **Tracciare ogni nuovo valore fino ai consumatori** (enum completeness) | Se cambia un dato (importo, data, ragione sociale), verificarlo in *tutti* i documenti che lo riportano, anche fuori dalla modifica |
| **Time window safety** | Controllare che periodi e scadenze coincidano tra documenti collegati (competenza, cassa, anno solare, esercizio) |
| Output terso: un rigo per il problema, un rigo per la correzione | Esito della revisione in forma di elenco, senza premesse |

## 2. Lista di controllo, passaggio 1 (CRITICO)

**A. Identità e soggetti**
- [ ] Ragione sociale, sede e partita IVA corrette e coerenti in ogni pagina.
- [ ] Edelfeuer Srl (Pordenone) non confusa con Holzackt d.o.o. (Izola). Per la d.o.o. verificare di non aver usato la seconda società con denominazione quasi identica e partita IVA diversa.
- [ ] Marchio corretto: Alpen Pellet, Alpenfire® (linea Professional o Deluxe) o Holzackt Plus Pellet.

**B. Importi e calcoli**
- [ ] Ricalcolo di imponibile, IVA, contributi, imposte e totale; percentuali e aliquote verificate.
- [ ] Nessun arrotondamento non dichiarato.
- [ ] Il totale del testo coincide con tabelle e allegati.

**C. Date e termini**
- [ ] Coerenza tra data del documento, decorrenza, scadenza, preavviso e recesso.
- [ ] Periodi coincidenti tra documenti collegati (vedi *time window safety*).
- [ ] Termini di legge o di CCNL verificati su fonte aggiornata; se non verificati, scrivere "Aspetto da verificare".

**D. Gate / deroghe**
- [ ] Ogni eccezione, sconto, deroga o ipotesi favorevole ha una motivazione scritta e un riscontro nel fascicolo.
- [ ] Nessun parametro è stato modificato solo per ottenere il risultato atteso.

**E. Parere professionale**
- [ ] Le parti che richiedono un parere legale, fiscale o del lavoro formalmente qualificato sono segnalate come bozza da sottoporre al professionista.

## 3. Lista di controllo, passaggio 2 (INFORMATIVO)
- [ ] Distinzione tra fatti accertati, fatti dichiarati, ipotesi e valutazioni.
- [ ] Allegati e documenti richiamati effettivamente presenti.
- [ ] Tono adatto al destinatario (formale, commerciale, cliente in difficoltà).
- [ ] Nessuna ripetizione e nessuna formula vuota; firma "dott. Andrea Rossi" nelle comunicazioni formali.
- [ ] Riservatezza: nessun dato di un'altra pratica o dato non necessario.

## 4. Revisione di un piano o di un'iniziativa (da `plan-ceo-review`)
Per un preventivo, un piano d'intervento o una nuova iniziativa, gstack propone di passare in rassegna, prima di decidere:
1. **Cosa è fuori ambito** e cosa esiste già (non rifare ciò che c'è).
2. **Errori e rimedi**: per ogni passaggio che può fallire, chi se ne accorge e come si rimedia.
3. **Rischi e minacce** (contrattuali, fiscali, reputazionali).
4. **Casi limite** nel flusso di dati e documenti.
5. **Sostenibilità economica e finanziaria** (costi, margini, cassa).
6. **Avvio e reversibilità**: come si parte, come si torna indietro.
7. **Traiettoria a lungo termine**: la decisione regge tra 12-24 mesi?
8. **Parere indipendente**: far leggere il piano a una persona che non l'ha scritto prima dell'invio.

## 5. Formato dell'esito della revisione
```
Revisione pratica [nome]: N rilievi (X critici, Y informativi)

CORRETTI AUTOMATICAMENTE:
- [documento, pagina] problema → correzione applicata

DA DECIDERE:
- [documento, pagina] problema
  Correzione consigliata: ...
```
Se non emergono rilievi: "Revisione pratica: nessun rilievo."

## 6. Limiti
- Le checklist originali riguardano codice software (SQL, concorrenza, shell injection): ne ho mantenuto solo la logica, non i contenuti tecnici.
- Non ho verificato questi criteri su pratiche reali: vanno provati su una pratica e tarati.
