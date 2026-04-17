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

## UC-G02: Gestione Anagrafica Comunità (Lista Membri)
*   **Trigger:** L'admin deve verificare lo stato dei partecipanti o aggiungere/modificare un utente.
*   **Azione Utente:** Naviga in "Comunità". Visualizza una tabella avanzata.
*   **Contenuti Tabella:** 
    * Nome e Cognome / Ragione Sociale (es. Mario Rossi o Azienda X).
    * Ruolo: Etichetta colorata (Consumer, Producer, Prosumer).
    * ID POD: Codice identificativo del punto di prelievo.
    * Stato: Indicatori "Attivo", "In Attesa di Validazione GSE" o "Offline".
*   **UX Flow & Risultato:** Possibilità di filtrare per ruolo o cercare un membro specifico. Cliccando sulla riga, si accede al dettaglio dei consumi del singolo utente.

## UC-G03: Monitoraggio e Configurazione Incentivi (Tab View)
Questo modulo è il "cuore economico" della piattaforma e si divide in due sezioni principali tramite tab:
*   **Tab A: Andamento Incentivi (Trend):**
    * Azione: Visualizza grafici storici sull'accumulo del fondo incentivi.
    * Risultato: Visualizzazione del fondo maturato (es. 1.250,00 €) con proiezioni basate sul sincronismo attuale.
*   **Tab B: Configurazione Ripartizione (Asset Allocation):**
    * Azione: L'admin regola le percentuali di ripartizione (es. 50% Prosumer, 30% Consumer, 20% Fondo Comune).
    * UX Flow: Utilizzo di Slider interattivi. Muovendo uno slider, gli altri si adattano automaticamente per mantenere il totale al 100%. Richiede conferma tramite pulsante "Salva Modifiche" con feedback visivo di successo.

## UC-G04: Supervisione Gamification e Premiazione
*   **Trigger:** Fine mese, bilancio dei Punti Sostenibilità.
*   **Azione Utente:** Consulta la "Bacheca Sostenibilità". Visualizza i membri in cima alla classifica per maggior aderenza al sincronismo (consumi durante ore di sole).
*   **UX Flow & Risultato:** Vede utenti con badge dorati. Può cliccare su "Invia Extra Sconto" ai primi 3 classificati, trasformando i punti in un abbattimento quota.

## UC-G05: Consolidamento GSE (Sign-Off)
*   **Trigger:** I dati mensili GSE sono incrociati.
*   **UX Flow & Risultato:** Usa un modale sicuro con checkmark visivi ("Tutti i nodi approvati"). Genera istantaneamente file report PDF.

## UC-G06: Alerting alla Community (Push Notification Panel)
*   **Trigger:** Calo drastico della produzione non previsto, o surplus energetico elevato.
*   **Azione Utente:** Accede al modulo "Smart Comms". Sceglie un quick-alert o ne digita uno custom (es. *"La produzione della CER crollerà per maltempo tra un'ora. Sospendere pompe di calore"*).
*   **UX Flow & Risultato:** Notifica broadcast a tutti i consumer/prosumer della CER. A schermo l'admin riceve un effetto particellare discreto ("Notifiche Inviate a 144 membri").
