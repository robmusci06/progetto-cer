# Architettura dell'Informazione e Navigazione UX (Brilla)

La piattaforma **Brilla** è strutturata su un ecosistema digitale premium e supporta dashboard differenziate a seconda del tipo di login (Gestore o Utente Singolo).

## 1. Vista Singolo Utente (Consumer e Prosumer)
L'utente privato vede **esclusivamente i propri consumi** e l'andamento generico della CER, garantendo la privacy degli altri membri.

### 1.1 Dashboard "Energy Flow & Planning"
*   **Energy Flow Canvas (Widget a Nodi Olografici):** Un diagramma visuale dinamico (ispirato a flow chart interattivi) che collega 4 nodi principali:
    - ☀️ **Prodotta**: L'energia totale generata dai propri pannelli (se Prosumer) o dalla CER.
    - 🔋 **Accumulo**: Lo stato attuale delle batterie (se presenti).
    - 🏠 **Autoconsumata**: La quota di pannello che va direttamente a caricare i propri consumi fisici.
    - ⚡️ **Rete (Interscambio)**: Si divide nei vettori **Immersa in rete** (sovrapproduzione venduta) e **Prelevata** (energia carente presa dal fornitore nazionale). Tra la "Prelevata" e l'Immersa della CER, viene evidenziata una label chiara: **Autoconsumata Virtualmente**, che rappresenta la quota che andrà a comporre il Cashback CER reale.
*   **Meteo & Programmazione (Consumo Consapevole):** Pannello interattivo per la previsione meteorologica. Offre *tips* proattivi: informa quando è conveniente programmare lavatrici o cicli industriali per ottimizzare l'autoconsumo della CER.
*   **Stima Bolletta e Incentivi:** Simulatore Real-Time che trasforma l'energia "Autoconsumata Virtualmente" in Euro, mostrando l'incentivo CER atteso a fine mese.
*   **Impact CO2:** Card verde brillante che riporta i `Kg di CO2 Evitata` totalizzati dall'utente nel mese in corso.
*   **Punti Sostenibilità (Gamification):** Classifica interna anonimizzata (Leaderboard) dove i membri accumulano punti per i consumi "sincronizzati" col picco solare, permettendo all'Amministratore di erogare sconti extra.

## 2. Vista Gestore Ente (Admin)
L'amministratore ha una visione "God Mode" globale e trasversale, con il compito non di produrre, ma di supervisionare, avvisare e configurare.

### 2.1 Multi-CER Hub (Header)
*   **Switch Multi-Tenant:** Un selettore nel Top Header per passare dinamicamente le viste tra la gestione del "Condominio A" e dell'"Area Industriale B". Ognuna con le proprie sub-dashboard.

### 2.2 Dashboard di Supervisione Globale
*   **Vasca di Ripilogo (Tutti i nodi):** Dati aggregati di prelievo, produzione comunitaria e autoconsumo virtuale della CER nel suo complesso.
*   **Configuratore Ripartizione Incentivi:** Un modulo settings cruciale. Qui l'Ente può gestire algoritmicamente o tramite slider le percentuali di ripartizione degli incentivi tra Producer, Prosumer, e Consumer.
*   **Centro Comunicazioni (Notifiche Push):** Strumento per inviare alert istantanei ai Consumer (es. *"La produzione sta crollando, riducete i carichi ora!"*).

## Struttura di Navigazione (Sidebar & Menu per Attore)

### 1. Navigazione Gestore (Admin)
*   📊 **Dashboard Globale** (Vista aggregata multi-CER)
*   🏢 **Gestione CER** (Lista nodi, membri, performance complessive)
*   📢 **Centro Comunicazioni** (Notifiche push, alert)
*   🏆 **Gamification & Premi** (Supervisione leaderboards, erogazione sconti)
*   ⚙️ **Impostazioni & Ripartizioni** (Configurazione percentuale incentivi, switch tenant)

### 2. Navigazione Prosumer
*   📊 **Dashboard Ibrida** (Energy Flow completo: produzione, accumulo, consumo)
*   ⚡ **Le mie Statistiche** (Mancato prelievo, quote immesse in rete)
*   🌤 **Consumo Consapevole** (Meteo e programmazione carichi)
*   🏆 **Bacheca Sostenibilità** (Leaderboard e Punti Comunità)
*   ⚙️ **Smart Settings** (Impostazione scarica forzata batteria)

### 3. Navigazione Producer
*   📊 **Dashboard Produzione** (Metriche primarie di immissione e ROI)
*   📈 **Report & Statistiche** (Grafici esportabili, rendimento storico)
*   🛠 **Diagnostica Impianto** (Stato inverter, alert manutenzione)
*   🌱 **Impatto Ambientale** (Report CO2 evitata per CSR aziendale)
*   ⚙️ **Impostazioni Tecniche**

### 4. Navigazione Consumer
*   📊 **Dashboard Consumi** (Energy Flow semplificato e andamento prelievi)
*   🌤 **Meteo & Programmazione** (Consigli ottimizzazione orari)
*   🏆 **Bacheca Sostenibilità** (Leaderboard, sfide, risparmio)
*   ⚙️ **Impostazioni Profilo**
