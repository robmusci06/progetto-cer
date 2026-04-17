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

## UC-G02: Configurazione Ripartizione Incentivi (Asset Allocation)
*   **Trigger:** Necessità di modificare le percentuali premio in base alle assemblee comunitarie.
*   **Azione Utente:** Naviga in Impostazioni > Ripartizione.
*   **UX Flow & Risultato:** Interagisce con tre cursori a scorrimento (Slider interattivi) associati a Producer, Consumer ed Ente. Movendo uno slider, un algoritmo di compensazione UI regola in tempo reale gli altri per sommare sempre il 100%. Conferma i dati usando un "Swipe to Save" button per evitare update accidentali.

## UC-G03: Alerting alla Community (Push Notification Panel)
*   **Trigger:** Calo drastico della produzione non previsto, o surplus energetico elevato.
*   **Azione Utente:** Accede al modulo "Smart Comms". Sceglie un quick-alert o ne digita uno custom (es. *"La produzione della CER crollerà per maltempo tra un'ora. Sospendere pompe di calore"*).
*   **UX Flow & Risultato:** Notifica broadcast a tutti i consumer/prosumer della CER. A schermo l'admin riceve un effetto particellare discreto ("Notifiche Inviate a 144 membri").

## UC-G04: Supervisione Gamification e Premiazione
*   **Trigger:** Fine mese, bilancio dei Punti Sostenibilità.
*   **Azione Utente:** Consulta la "Bacheca Sostenibilità". Visualizza i membri in cima alla classifica per maggior aderenza al sincronismo (consumi durante ore di sole).
*   **UX Flow & Risultato:** Vede utenti con badge dorati. Può cliccare su "Invia Extra Sconto" ai primi 3 classificati, trasformando i punti in un abbattimento quota.

## UC-G05: Consolidamento GSE (Sign-Off)
*   **Trigger:** I dati mensili GSE sono incrociati.
*   **UX Flow & Risultato:** Usa un modale sicuro con checkmark visivi ("Tutti i nodi approvati"). Genera istantaneamente file report PDF.
