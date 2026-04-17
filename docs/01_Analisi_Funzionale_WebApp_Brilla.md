# Analisi Funzionale WebApp "Brilla" - Gestione CER

## 1. Visione del Prodotto

Brilla è una piattaforma di gestione e monitoraggio per Comunità Energetiche Rinnovabili (CER). Il sistema funge da ponte tra l'acquisizione dati hardware (Inverter, BMS, Meter) e l'utente finale, trasformando flussi energetici complessi in indicatori economici chiari (Cashback) e suggerimenti comportamentali dinamici per massimizzare l'efficienza della comunità.

## 2. Architettura degli Attori (Modello Multitenant)

Il sistema prevede quattro profili utente, ognuno con una vista specifica:

*   **Gestore PA / Admin:** Visione olistica della CER, gestione contratti, validazione dati GSE e ripartizione incentivi.
*   **Prosumer (Produttore + Consumatore):** Utente con impianto e accumulo. Focus su autoconsumo e stato della batteria.
*   **Producer (Solo Produttore):** Focus sull'efficienza dell'impianto e sulla quantità di energia immessa per la comunità.
*   **Consumer (Solo Consumatore):** Focus sul sincronismo dei consumi con la produzione della CER per massimizzare il risparmio.

## 3. Struttura di Navigazione e Contenuti

### 3.1 Dashboard Personale (Comune a tutti, dati filtrati)

*   **Contenuti:**
    *   **Real-time Gauge:** Potenza attuale (Produzione vs Consumo).
    *   **Energy Chart:** Andamento temporale (giorno/settimana/mese).
    *   **KPI Cashback:** Valuta stimata maturata.
    *   **Centro Suggerimenti (Smart Advice):** Box dinamico con consigli basati sui dati storici e previsioni meteo/produzione.
*   **Elementi Interattivi:** Filtri temporali, switch unità di misura (kW/kWh), export dati.

### 3.2 Area Dispositivi e Storage (Specifica Prosumer/Producer)

*   **Contenuti:** Stato Inverter, Digital Twin Batteria (SoC, cicli), Mappa Flussi energetici animata.

### 3.3 Area Amministrativa e Trasparenza

*   **Contenuti:** Regolamento CER, Documentazione POD, Report validati GSE.

## 4. Analisi dei Casi d'Uso per Attore

### 4.1 Attore: GESTORE PA (Admin)

*   **UC-G01 - Autenticazione Istituzionale:** Accesso sicuro per la gestione dei 5 POD.
*   **UC-G02 - Monitoraggio Rendimento Aggregato:** Verifica stato operativo impianto (664 kW).
*   **UC-G03 - Analisi Sincronismo della Comunità:** Monitoraggio del KPI globale (es. 68%).
*   **UC-G04 - Validazione Dati GSE e Cashback:** Approvazione ripartizione fondi.
*   **UC-G05 - Gestione Suggerimenti di Comunità:** Configurazione dei parametri che triggerano i consigli automatici per i membri (es. soglie di produzione per invio alert di consumo).

### 4.2 Attore: CONSUMER (Azienda/Cittadino)

*   **UC-C01 - Monitoraggio Risparmio Energetico:** Visualizzazione del cashback accumulato.
*   **UC-C02 - Consultazione Suggerimenti di Consumo:** Accesso a card informative che indicano le fasce orarie ottimali per attivare carichi energetici (es. "Domani picco di produzione ore 12:00: attiva i macchinari ora").
*   **UC-C03 - Storico Virtuosità:** Analisi di quanto i suggerimenti passati siano stati seguiti e l'impatto sul cashback.

### 4.3 Attore: PROSUMER (Produttore + Consumatore con Accumulo)

*   **UC-P01 - Bilancio Energetico Real-time:** Rapporto tra autoconsumo e energia condivisa.
*   **UC-P02 - Suggerimenti Strategici Accumulo:** Ricezione di indicazioni su quando caricare o scaricare la batteria per ottimizzare la stabilità della CER (es. "Batteria carica al 90%: scarica ora per coprire il picco di consumo della comunità").
*   **UC-P03 - Ottimizzazione Carichi Domestici/Aziendali:** Suggerimenti per coordinare il consumo interno con la produzione residua dei pannelli.

### 4.4 Attore: PRODUCER (Solo Produttore)

*   **UC-R01 - Analisi ROI e Produzione:** Monitoraggio energia immessa in rete.
*   **UC-R02 - Suggerimenti di Manutenzione Predittiva:** Ricezione di alert basati su anomalie di produzione (es. "Produzione inferiore del 15% rispetto alla media stagionale: verificare pulizia pannelli").
*   **UC-R03 - Diagnostica Inverter:** Log tecnici e stato di salute dei dispositivi.

## 5. Linee Guida UX/UI

*   **Design Language:** "Clean Tech", 12px border-radius, ombre morbide.
*   **Colori:**
    *   Primary: Verde Smeraldo.
    *   Secondary: Blu Navy.
    *   Accent: Ambra (per i suggerimenti urgenti).
*   **Interazioni:** Box dei suggerimenti con animazione "pulse" discreta quando è presente un nuovo consiglio non letto.

## 6. Prompt per Generazione Mockup AI

*   **Dashboard con Suggerimenti (User View):** "UI design of an Energy Community Dashboard. Clean white layout with emerald green accents. A prominent 'Smart Suggestions' card on the right side with actionable tips like 'Shift your heavy loads to 2 PM today for maximum cashback'. High-fidelity, modern typography, dashboard showing Gauges and Area Charts."
*   **Sezione Prosumer e Storage (Battery View):** "UI dashboard for a Prosumer with an 48kWh battery. Central visual shows a battery level at 85%. Below, a 'Community Strategy' suggestion box states: 'High community demand detected. System is discharging battery to increase shared energy incentives'. Minimalist icons, tech-focused design."
*   **Portale Gestore (Admin View):** "Admin dashboard for a Public Administration managing an Energy Community. Section 'Community Performance' with a summary of how many users followed the energy-saving suggestions. List of 5 PODs with status lights. Export to Excel buttons. Professional, clean, data-driven UI."
