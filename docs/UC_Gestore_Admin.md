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
    *   **Grafico Flussi Energetici (Real-time Flow):**
        *   Visualizzazione a nodi (Prodotta, Accumulo, Consumata, Rete) con frecce animate che rappresentano i flussi istantanei di kW.
        *   Consente di distinguere visivamente tra Autoconsumo fisico e Autoconsumo Virtuale.
    *   **Cluster Meteo & Programmazione (Consumo Consapevole):**
        *   *Widget Meteo Real-time:* Visualizzazione di Temperatura, Stato (Soleggiato/Piovoso), Nuvolosità (%) e Irradianza (W/m²).
        *   *Timeline Previsioni di Oggi:* Un grafico orario (es. 07:00 - 19:00) che mostra l'evoluzione attesa del tempo, delle temperature, dell'irradianza e della nuvolosità.
        *   *Status Produzione (Qualitativo):* Indicatore visivo (es. Smiley o badge) che valida se la produzione corrente è "Ottimale", "Parziale" o "Sotto Soglia" rispetto al meteo rilevato.
        *   *Smart Tip (Tip Proattivo):* Un singolo consiglio prioritario su quando programmare carichi pesanti per massimizzare l'indice di sincronismo (es. *"Tra 2 ore: picco di irradianza, avviare cicli industriali"*).
    *   **Membri CER (Pannello Rapido):** Una panoramica rapida laterale sugli iscritti (nome, ruolo, stato di attività: Attivo, In Attesa, Offline) che rimpiazza il precedente elenco grezzo dei nodi.
*   **UX Flow:** L'interfaccia usa Card separate (Glassmorphism), icone chiare e badge colorati per evidenziare eventuali parametri critici.

## UC-G02.1: Analisi Meteo e Programmazione Proattiva
*   **Trigger:** L'amministratore vuole ottimizzare il sincronismo della CER per il giorno seguente o la giornata corrente.
*   **Azione Utente:** Consulta il widget Meteo nella Dashboard Globale.
*   **Risultato e Visualizzazione:**
    *   Vede una timeline delle previsioni meteo incrociata con la curva di produzione attesa.
    *   Riceve una notifica visiva (Tip) sulla convenienza di spostare carichi energetici.
    *   Può utilizzare il dato per inviare istantaneamente una comunicazione alla community (tramite UC-G07).
*   **Valore Aggiunto:** Trasforma un dato meteorologico passivo in uno strumento decisionale strategico per incrementare il valore economico della CER.

## UC-G03: Gestione Anagrafica Comunità (Card Membri)
*   **Trigger:** L'admin deve verificare lo stato dei partecipanti o aggiungere/modificare un utente.
*   **Azione Utente:** Naviga in "Comunità". Visualizza una griglia di **card individuali**, una per ciascun membro, al posto della precedente tabella.
*   **Layout Card:** Ogni card (stile Glassmorphism, con bordo colorato in base al ruolo) mostra:
    *   **Avatar / Iniziali** del membro con colore di sfondo coerente al ruolo.
    *   **Nome e Cognome / Ragione Sociale.**
    *   **Badge Ruolo** colorato (es. verde per Producer, arancio per Prosumer, blu per Consumer).
    *   **ID POD** con icona e testo monospaziato.
    *   **Stato** con pallino colorato: 🟢 Attivo, 🟡 In Attesa di Validazione GSE, 🔴 Offline.
    *   **Incentivo Maturato (€/mese):** Importo in Euro accumulato dal membro nel mese corrente grazie alla condivisione energetica, valorizzato secondo le tariffe GSE. Per i membri Offline o In Attesa il dato è sospeso ("—").
    *   **Ultimo Aggiornamento** (timestamp dell'ultima lettura del contatore).
    *   **Bottone azione**: \"Vedi Dettaglio\" che porta al profilo energetico del membro.
*   **Membri di esempio (5 card totali):**

    | # | Nome | Ruolo | ID POD | Stato | Incentivo Maturato |
    |---|------|-------|--------|-------|-------------------|
    | 1 | **Marco Bianchi** | 🔵 Consumer | `IT001E00012345` | 🟢 Attivo | **€ 12,40 / mese** |
    | 2 | **Laura Ferretti** | 🔵 Consumer | `IT001E00067890` | 🟡 In Attesa GSE |**€ 12,40 / mese** |
    | 3 | **Giovanni Mazza** | 🔵 Consumer | `IT001E00054321` | 🟢 Attivo | **€ 8,90 / mese** |
    | 4 | **Sofia Gentile** | 🟠 Prosumer | `IT001E00098765` | 🟢 Attivo | **€ 34,20 / mese** |
    | 5 | **Azienda Sole Srl** | 🟢 Producer | `IT001E00011111` | 🔴 Offline | **€ 12,40 / mese** |

*   **UX Flow & Risultato:**
    *   La griglia si adatta responsivamente (1 colonna su mobile, 2 su tablet, 3 su desktop).
    *   Barra di ricerca in cima per filtrare per nome o POD.
    *   Chip-filter per ruolo (Tutti / Consumer / Prosumer / Producer) con counter aggiornato.
    *   Hover sulla card: leggera elevazione con ombra e reveal del bottone \"Vedi Dettaglio\".
    *   Click sulla card (o sul pulsante): navigazione al dettaglio consumi/anagrafica del membro.

## UC-G03.1: Dettaglio Membro e Profilo Energetico
*   **Trigger**: L'admin clicca su una card membro nella vista Comunità.
*   **Azione Utente**: Visualizza i dettagli tecnici ed energetici di un singolo nodo della CER.
*   **Contenuti della Pagina**:
    *   **Header**: Nome del membro, badge ruolo, stato (Live dot) e pulsante per tornare alla lista.
    *   **Sezione Anagrafica**: Riepilogo dati (POD, Indirizzo, Email, Data adesione, Tipologia utenza).
    *   **Sezione Analisi Energetica**:
        *   **KPI Real-time**: Focus su Consumo Attuale, Produzione (se Producer/Prosumer) e Incentivo maturato nel mese.
        *   **Grafico Andamento**: Visualizzazione temporale dei flussi energetici del singolo membro per identificare picchi o anomalie.
    *   **Azioni Rapide**: Pulsanti per contattare il membro o scaricare un report energetico individuale (PDF).
*   **Risultato**: L'admin ha una visione granulare del comportamento del singolo membro, utile per attività di auditing o supporto tecnico.

## UC-G04: Gestione Integrata CER (Tecnica & Economica)
*   **Trigger:** L'amministratore deve configurare i parametri legali o monitorare lo stato fisico degli impianti e la ripartizione economica.
*   **Azione Utente:** Naviga nella sezione "CER", organizzata in 2 tabulati principali:
*   **Tab e Funzionalità:**
    1.  **Dati Generali:**
        *   **Header Informativo:** Visualizzazione immediata di Nome, Potenza installata, Numero di Membri, e Località. 
        *   **Mappa:** Visualizzazione interattiva della localizzazione della comunità.
        *   **Anagrafica Tecnica:** Form per Nome CER, Codice Area, Codice Fiscale, Indirizzo e Note libere (il caricamento documentale è rimosso in favore di maggiori campi descrittivi).
        *   **Asset e POD Collegati:** Visualizzazione dello stato dell'unico impianto di produzione (Fotovoltaico 54kW) e dei 5 POD associati ai membri (1 Producer, 1 Prosumer, 3 Consumer) con indicatori real-time.
    2.  **Ripartizione Incentivi (Financial Rules):**
        *   **Monitoraggio Maturato:** L'admin supervisiona il box degli **Incentivi Maturati** (es. € 1.250,00) con lo stato dell'erogazione GSE (es. "In attesa").
        *   **Recupero Investimento:** Visualizzazione affiancata della quota fissa mensile destinata alla copertura costi.
        *   **Modifica Regolamento (Modale):** Tramite una finestra specifica, il Gestore aggiorna con input numerici le 3 quote percentuali (es. Produttori 45%, Consumatori 30%, CER 25%) con validazione al 100%.
        *   **Quote Individuali dei Membri:** Elenco analitico (disposto su griglia ottimizzata) che indica ruolo, peso e stima mensile calcolata pro-quota sul maturato attuale.
*   **UX Flow & Risultato:** Interfaccia a 2 Tab. La Tab Dati Generali combina configurazione anagrafica e monitoraggio hardware, fornendo una dashboard verticale unificata.


## UC-G06: Consolidamento GSE (Sign-Off)
*   **Trigger:** I dati mensili GSE sono incrociati.
*   **UX Flow & Risultato:** Usa un modale sicuro con checkmark visivi ("Tutti i nodi approvati"). Genera istantaneamente file report PDF.

## UC-G07: Alerting alla Community (Push Notification Panel)
*   **Trigger:** Calo drastico della produzione non previsto, o surplus energetico elevato.
*   **Azione Utente:** Accede al modulo "Smart Comms". Sceglie un quick-alert o ne digita uno custom (es. *"La produzione della CER crollerà per maltempo tra un'ora. Sospendere pompe di calore"*).
*   **UX Flow & Risultato:** Notifica broadcast a tutti i consumer/prosumer della CER. A schermo l'admin riceve un effetto particellare discreto ("Notifiche Inviate a 144 membri").

## UC-G08: Gestione Utenti Applicativo (Impostazioni)
*   **Trigger:** L'admin ha la necessità di verificare, aggiungere o gestire l'accesso degli utenti che possono operare sull'applicativo web (non i membri finali della CER, ma lo staff o super-admin).
*   **Azione Utente:** Espande la voce "Impostazioni" nella sidebar e fa click su "Utenti".
*   **Contenuto Pagina:**
    *   **Percorso (Breadcrumb):** Impostazioni / Utenti.
    *   **Tabella lista utenti:** Una vista a tabella che elenca tutti i membri operativi del portale (10 per pagina).
    *   **Paginazione:** Sistema di navigazione avanzato (es. `< 1 ... 4 5 6 7 8 ... 50 >`) per gestire grandi volumi di utenze operative.
    *   **Paginazione:** Sistema di navigazione avanzato (es. `< 1 ... 4 5 6 7 8 ... 50 >`) per gestire grandi volumi di utenze operative.
    *   **Colonne visualizzate:** Codice (es. `#790841`), Utente (Avatar + Nome e Cognome), Email, Ruolo, Stato (Badge colorato: Attivo, Disabilitato, Inattivo). La colonna azioni è rimossa per massimizzare la leggibilità dei dati su ogni riga.
    *   **Funzionalità di ricerca e filtro:** Una barra di ricerca libera e un pulsante "Filtri" che apre un menu a comparsa (dropdown) per filtrare per Ruolo.
    *   **CTA Primaria:** Pulsante "Nuovo Utente" per invitare un amministratore.
*   **UX Flow & Risultato:** Usa il linguaggio di design consolidato (struttura Glassmorphism, Dark Mode out-of-the-box). Il titolo della pagina segue lo standard istituzionale (Font Bold, Tracking Tight). Migliora la governing hierarchy della CER.
