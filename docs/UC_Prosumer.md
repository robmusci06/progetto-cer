# Casi d'Uso (Use Cases) - Attore: Prosumer

Il Prosumer dispone sia di un impianto di produzione proprio (Pannelli) sia di un consumo interno, e molto spesso di un Accumulo (Batterie). Il suo obiettivo primario è l'autoconsumo fisico, mentre la sua quota in eccedenza sfama la CER (autoconsumo logico/virtuale comunitario).

## UC-P00: Navigazione Menu Prosumer (Sidebar)
*   **Trigger:** Il prosumer vuole scorrere tra monitoraggio, meteo e gamification.
*   **Azione Utente:** Naviga tramite la sidebar laterale (Dashboard Ibrida, Statistiche, Consumo Consapevole, Bacheca Sostenibilità, Smart Settings).
*   **UX Flow & Risultato:** Transizioni morbide tra i moduli. Elementi interattivi mantengono l'attenzione del Prosumer sulle attività chiave (es. badge notifiche per la batteria).

## UC-P01: Visualizzazione Flusso "Four Node" (Produzione/Accumulo/Rete/Abitazione)
*   **Trigger:** Comprendere a colpo d'occhio cosa stanno facendo i propri pannelli.
*   **Azione Utente:** Osserva il componente Energy Flow.
*   **UX Flow & Risultato:** 
    - Nodo ☀️ **Prodotta**: pompa energia verde. 
    - Nodo 🔋 **Accumulo**: mostra stato SoC (es. 80%).
    - Ramo **Autoconsumata**: freccia solida verde entra in 🏠 Abitazione.
    - Ramo **Immersa in Rete**: freccia esce verso l'esterno, andando idealmente ad arricchire la comunità. L'animazione di particelle di luce lungo i rami dà il senso di vitalità della casa.

## UC-P02: Valutazione Finanziaria "Doppio Criterio"
*   **Trigger:** Capire quant'è il proprio risparmio.
*   **Azione Utente:** Guarda lo "Split-Box" dei ricavi.
*   **UX Flow & Risultato:** Essendo un utente ibrido, vede due big numbers: il risparmio autogenerato da autoconsumo (mancato prelievo) + L'aggiunta del cashback proporzionale all'eccedenza messa in comune. Entrambi mostrati con font Outfit bold ed effetti Glowing positivi.

## UC-P03: Impostazioni Batteria (Smart Advice Prosumer)
*   **Trigger:** Riceve una notifica push (Toast alert scivola in alto a dx).
*   **Azione Utente:** Legge l'alert e interagisce.
*   **UX Flow & Risultato:** "La Comunità richiede molta energia. Vuoi scaricare la batteria del 20% ed entrare in fascia Extra-Premio?" Cliccando "Sì", tramite modale veloce l'utente ordina all'inverter di forzare la scarica verso la rete.

## UC-P04: Dashboard Leaderboard & Gamification
*   Come nel consumer, ma con KPI specifici: ottiene "Punti Comunità" più condivide energia nel server CER durante i picchi serali di richiesta.
