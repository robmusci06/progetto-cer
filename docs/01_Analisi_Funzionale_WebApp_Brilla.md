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

## 5. Linee Guida UX/UI "Pro Max" (Design System Avanzato)

Per garantire un effetto "WOW" al primo impatto e trasmettere la sensazione di una piattaforma premium, moderna e viva, il design supererà i layout tradizionali per abbracciare un'estetica all'avanguardia:

### 5.1 Estetica e Layout
*   **Bento Grid Architecture:** Sostituzione delle classiche card con un layout a griglia asimmetrico in stile "Bento Box". Questo permette di incastrare widget di dimensioni diverse (es. widget consumo grande, meteo piccolo) in modo armonioso.
*   **Glassmorphism & Depth:** Utilizzo di sfondi semi-trasparenti `backdrop-blur-xl` su layer sovrapposti per creare un senso di profondità spaziale, specialmente nei modali e nei menu a scorrimento, evitando i soliti sfondi piatti.
*   **Dark Mode Nativa (Sleek Dark):** Non un semplice "sfondo nero", ma un ecosistema di grigi profondi (es. Tailwind `slate-900` / `hsl(222, 47%, 11%)`) contrastato da elementi luminosi "neon-like".

### 5.2 Tipografia ed Elementi Visivi
*   **Google Fonts Premium:** Utilizzo di **Outfit** (geometrico e moderno per heading e numeri) combinato con **Inter** (estremamente leggibile per i dati e le tabelle).
*   **Color Palette Armoniosa (HSL):**
    *   *Primary (Eco-Tech):* Sfumature dal verde smeraldo vivo al menta brillante (`#10B981` → `#34D399`) per i successi e i risparmi.
    *   *Background & Cards:* Superfici in Slate/Zinc profondo con bordi leggermente luminosi (`border-white/10`).
    *   *Accent (Alerts/Tips):* Ambra vibrante (`#F59E0B`) per suggerimenti dinamici, applicato come gradiente radiale morbido.
*   **Data VIZ Avanzata:** Grafici interattivi non statici. Uso di linee curve fluide nei chart, gradienti di riempimento al posto di tinte unite, e animazioni di disegno del grafico al caricamento.

### 5.3 Micro-interazioni e Dinamismo
*   **Skeleton Loaders:** Addio agli spinner di caricamento. Transizioni morbide usando skeleton pulsanti che pre-calcolano lo spazio delle card durante il fetching dei dati dal BMS/Inverter.
*   **Hover Effects (Magnetic & Glow):** I widget reagiscono al passaggio del mouse illuminandosi dolcemente sui bordi (effetto *glow*) o sollevandosi leggermente (`scale-105`), incoraggiando l'utente a cliccare.
*   **Transizioni Fluide:** Ogni cambio di pagina o apertura di modale avverrà tramite animazioni *spring* (es. libreria Framer Motion), evitando cali di frame e salti bruschi.
*   **Empty States Emozionali:** Se non ci sono dati o notifiche, l'UI mostrerà illustrazioni tech o 3D sfocate per mantenere alta l'esperienza visiva invece delle classiche scritte "Nessun dato".
