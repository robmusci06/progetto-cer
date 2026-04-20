# Casi d'Uso (Use Cases) - Attore: Gestore PA (Admin)

L'amministratore (Gestore PA d'Ente) supervisiona il network. Il suo scopo non è produrre o consumare energia termica, ma ottimizzare l'infrastruttura, configurare logiche contrattuali per gli incentivi ed educare i cittadini al consumo responsabile.

## UC-G00: Navigazione Principale (Sidebar Admin)
*   **Trigger:** L'amministratore entra nella piattaforma e vuole accedere ai vari moduli.
*   **Azione Utente:** Espande e interagisce con la sidebar dedicata (Dashboard, Gestione CER, Comunicazioni, Premi, Impostazioni).
*   **UX Flow & Risultato:** La sidebar ha un design compatto e collassabile. Il click su una voce cambia istantaneamente la vista principale (SPA navigation). La voce attiva è evidenziata con il colore principale istituzionale.

## UC-G01: Switch Multi-CER (Gestione Multi-Tenant)
*   **Trigger:** L'amministratore apre la web app.
*   **Azione Utente:** Clicca sul dropdown posizionato nella Topbar (header glassmorphism). Seleziona la comunità dal menù a tendina (es. da "CER Centro" a "CER Area Industriale").
*   **UX Flow & Risultato:** Tramite un'animazione fade-in scattante, i widget della dashboard (grafici, numeri) ripopolano istantaneamente i dati associati alla CER scelta, mantenendo l'utente nel contesto.

## UC-G02: Consultazione Dashboard Amministrativa e KPI
*   **Trigger:** L'amministratore apre la piattaforma e atterra sulla vista principale.
*   **Azione Utente:** Visualizza la Dashboard per ottenere una visione aggregata e immediata dello stato di salute della CER, suddivisa in cluster strategici.
*   **Risultato e Visualizzazione Dati:**
    *   **Cluster Energetico Principale (Situazione Attuale):**
        *   *Produzione Comunitaria:* Valore aggregato dell'energia prodotta dai nodi attivi (es. 1.240 kWh) con trend percentuale.
        *   *Prelievo da Rete:* Valore dell'energia assorbita dalla rete esterna (es. 850 kWh).
        *   *Autoconsumo Virtuale:* Quantità di energia prodotta che viene consumata contemporaneamente dai membri (es. 920 kWh).
        *   *Capacità Accumulo:* Livello medio delle batterie disponibili nella comunità (es. 85%).
        *   *Andamento Settimanale:* Grafico lineare interattivo per la comparazione di Produzione, Prelievo e Autoconsumo nei giorni della settimana.
    *   **Cluster Economico (Valore del Cashback):**
        *   *KPI Incentivi Maturati:* Un box che mostra l'importo in Euro (€) maturato nel mese corrente grazie alla condivisione, valorizzato secondo le tariffe GSE.
        *   *Risparmio in Bolletta Stimato:* Un dato aggregato di quanto la comunità ha risparmiato complessivamente.
        *   *Stato della Ripartizione:* Una barra di avanzamento che indica se gli incentivi dell'ultimo periodo sono in attesa di validazione oppure già consolidati e pronti per l'erogazione.
    *   **Cluster Sostenibilità (Impatto Ambientale):**
        *   *Green Score della CER:* Un indicatore visivo (es. con icone a forma di foglie o alberi) che assegna un "voto" ecologico alla comunità basato sui comportamenti virtuosi.
        *   *CO2 Evitata:* Valore numerico (in kg o tonnellate) fondamentale per la reportistica e il bilancio di sostenibilità dell'Ente.
        *   *Equivalenza Alberi Piantati:* Una traduzione del dato tecnico in un dato "parlante", facilmente spendibile nella comunicazione istituzionale.
    *   **Cluster Efficienza e Sincronismo:**
        *   *Indice di Sincronismo (%):* Indica la quota di energia prodotta che viene consumata istantaneamente all'interno della CER. Se scende (es. sotto il 50%), il gestore sa che deve stimolare i membri a spostare i propri carichi.
        *   *Energia "Sprecata" (Immessa senza incentivo):* Quota di energia finita in rete in esubero. Identifica il margine di miglioramento potenziale per la comunità.
    *   **Membri CER (Pannello Rapido):** Una panoramica rapida laterale sugli iscritti (nome, ruolo, stato di attività: Attivo, In Attesa, Offline) che rimpiazza il precedente elenco grezzo dei nodi.
*   **UX Flow:** L'interfaccia usa Card separate (Glassmorphism), icone chiare e badge colorati per evidenziare eventuali parametri critici.

## UC-G03: Gestione Anagrafica Comunità (Lista Membri)
*   **Trigger:** L'admin deve verificare lo stato dei partecipanti o aggiungere/modificare un utente.
*   **Azione Utente:** Naviga in "Comunità". Visualizza una tabella avanzata.
*   **Contenuti Tabella:** 
    * Nome e Cognome / Ragione Sociale (es. Mario Rossi o Azienda X).
    * Ruolo: Etichetta colorata (Consumer, Producer, Prosumer).
    * ID POD: Codice identificativo del punto di prelievo.
    * Stato: Indicatori "Attivo", "In Attesa di Validazione GSE" o "Offline".
*   **UX Flow & Risultato:** Possibilità di filtrare per ruolo o cercare un membro specifico. Cliccando sulla riga, si accede al dettaglio dei consumi del singolo utente.

## UC-G04: Monitoraggio e Configurazione Incentivi (Tab View)
Questo modulo è il "cuore economico" della piattaforma e si divide in due sezioni principali tramite tab:
*   **Tab A: Andamento Incentivi (Trend):**
    * Azione: Visualizza grafici storici sull'accumulo del fondo incentivi.
    * Risultato: Visualizzazione del fondo maturato (es. 1.250,00 €) con proiezioni basate sul sincronismo attuale.
*   **Tab B: Configurazione Ripartizione (Asset Allocation):**
    * Azione: L'admin regola le percentuali di ripartizione (es. 50% Prosumer, 30% Consumer, 20% Fondo Comune).
    * UX Flow: Utilizzo di Slider interattivi. Muovendo uno slider, gli altri si adattano automaticamente per mantenere il totale al 100%. Richiede conferma tramite pulsante "Salva Modifiche" con feedback visivo di successo.

## UC-G05: Supervisione Gamification e Premiazione
*   **Trigger:** Fine mese, bilancio dei Punti Sostenibilità.
*   **Azione Utente:** Consulta la "Bacheca Sostenibilità". Visualizza i membri in cima alla classifica per maggior aderenza al sincronismo (consumi durante ore di sole).
*   **UX Flow & Risultato:** Vede utenti con badge dorati. Può cliccare su "Invia Extra Sconto" ai primi 3 classificati, trasformando i punti in un abbattimento quota.

## UC-G06: Consolidamento GSE (Sign-Off)
*   **Trigger:** I dati mensili GSE sono incrociati.
*   **UX Flow & Risultato:** Usa un modale sicuro con checkmark visivi ("Tutti i nodi approvati"). Genera istantaneamente file report PDF.

## UC-G07: Alerting alla Community (Push Notification Panel)
*   **Trigger:** Calo drastico della produzione non previsto, o surplus energetico elevato.
*   **Azione Utente:** Accede al modulo "Smart Comms". Sceglie un quick-alert o ne digita uno custom (es. *"La produzione della CER crollerà per maltempo tra un'ora. Sospendere pompe di calore"*).
*   **UX Flow & Risultato:** Notifica broadcast a tutti i consumer/prosumer della CER. A schermo l'admin riceve un effetto particellare discreto ("Notifiche Inviate a 144 membri").
