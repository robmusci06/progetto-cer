# Casi d'Uso (Use Cases) - Attore: Producer (Produttore Puro)

Il Producer è tipicamente l'attore capofila, l'investitore primario (come il Comune o una grande azienda con vasto campo fotovoltaico) che immette la massima parte di kW in rete e ne assorbe solo il minimo fisiologico. A lui interessa l'infrastruttura, le rese economiche pure e lo stato di salute dei dispositivi.

## UC-R00: Navigazione Strutturale (Sidebar Producer)
*   **Trigger:** Log in per cercare dati di produttività e stato degli impianti.
*   **Azione Utente:** Interagisce con il menu laterale focalizzato (Dashboard, Report, Diagnostica, Impatto Ambientale).
*   **UX Flow & Risultato:** L'interfaccia rimuove distrazioni legate ai consumatori puri; è tecnica, chiara e favorisce l'accesso rapido all'export dei dati e alla manutenzione.

## UC-R01: Analisi Produttività / Immissione Rete (ROI)
*   **Trigger:** Il board invia richiesta per verificare il ROI dell'impianto.
*   **Azione Utente:** Apre la Tab "Statistiche Impianto".
*   **UX Flow & Risultato:** Una serie di grafici spline (es. libreria Recharts/Apex, con curve fluide, gradient riempitivi da verde a trasparente) mostrano storicamente il solo parametro essenziale: **Immersa in Rete**. Nessun dato sporco o rumore di fondo relativo ai consumer.

## UC-R02: Manutenzione Predittiva (Alert Tecnico)
*   **Trigger:** Un inverter stringa perde il 15% di resa rispetto alla media stagionale.
*   **Azione Utente:** L'intelligenza di sistema emette un alert Ambra.
*   **UX Flow & Risultato:** Nella sidebar il campanello "Notifiche" ha un puntino rosso e un leggero effetto `pulse`. Cliccando, si apre un drawer laterale elegante che consiglia ispezione visiva e pulizia pannelli (calo previsto per sporcizia sedimentata).

## UC-R03: Download Report di Performance 
*   **Trigger:** Necessità burocratica o documentale ufficiale.
*   **Azione Utente:** Click su esporta report mensile.
*   **UX Flow & Risultato:** Generazione di file che includono l'impronta di carbonio totale evitata dal loro impianto in favore della microrete locale, spendibile a livello di marketing CSR aziendale.
