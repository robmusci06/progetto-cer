# Casi d'Uso (Use Cases) - Attore: Consumer (Puro Consumatore)

Il Consumer è un attore che preleva solamente energia dalla rete. La sua arma per ottenere uno sconto in bolletta e incentivi tramite la CER è esclusivamente il "Sincronismo": deve essere virtuoso spostando l'utilizzo di apparecchi energivori nelle fasce in cui c'è surplus energetico.

## UC-C00: Navigazione Semplificata (Sidebar Consumer)
*   **Trigger:** Il consumer accede all'app per controllare le proprie performance.
*   **Azione Utente:** Interagisce con le sole voci rilevanti nella sua sidebar (Dashboard Consumi, Meteo & Programmazione, Bacheca Sostenibilità).
*   **UX Flow & Risultato:** Essendo un utente non tecnico, il menu ha icone amichevoli, non presenta funzionalità superflue e garantisce un orientamento e uno switch rapido tra i moduli ludici e operativi.

## UC-C01: Lettura della propria "Energy Flow Canvas"
*   **Trigger:** Accesso rapido giornaliero per valutare l'andamento del portafoglio energetico.
*   **Azione Utente:** L'utente accede alla propria dashboard. Non è un tecnico, quindi ignora grafici complessi. Guarda la mappa olografica (Grafo a nodi).
*   **UX Flow & Risultato:** 
    - Il nodo "Abitazione" è collegato alla Rete Nazionale.
    - Se l'energia scorre verde dalla rete, evidenzia la label **"Autoconsumata Virtualmente"** (sta prelevando quando l'impianto della CER è attivo). Altrimenti scorre grigia con label **"Prelevata"** standard (nessun incentivo).

## UC-C02: Consulenza Meteo / Programmazione Pre-Attiva
*   **Trigger:** Il cittadino deve decidere quando far partire la lavatrice domani.
*   **Azione Utente:** Clicca sul widget "Consumo Consapevole".
*   **UX Flow & Risultato:** Viene mostrato un grafico del cielo di domani sovrapposto alla curva di produzione storica dell'impianto CER centrale. L'UX suggerisce un "Ok to Consume" verde dalle 12:00 alle 15:30.

## UC-C03: Monitoraggio Gamification / Punti Sostenibilità
*   **Trigger:** Spinta emotiva a risparmiare e competere bonariamente.
*   **Azione Utente:** Scrolla verso il widget Leaderboard.
*   **UX Flow & Risultato:** Trova il proprio nickname in classifica generale. Accanto vede l'indicatore "Kg di CO2 Autoconsumata ed Evitata". L'Interfaccia ludicizza i dati, con una barra di avanzamento (Spring animation) verso il prossimo sconto speciale dell'Ente.

## UC-C04: Lettura Impatto in Bolletta
*   **Trigger:** Controllo finanziario mensile.
*   **UX Flow & Risultato:** Widget circolare che tramuta direttamente la % di sincronismo in Euro risparmiati stimati (Big Number component). Quando si apre la pagina, i numeri non appaiono istantaneamente ma c'è un'animazione di conteggio da 0 al target reale.
