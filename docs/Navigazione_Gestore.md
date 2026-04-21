# Struttura di Navigazione - Attore: Gestore (Admin)

La navigazione della web app dedicata al Gestore è progettata per offrire un controllo granulare sulla Comunità Energetica Rinnovabile (CER). L'interfaccia si basa su una **Sidebar persistente** a sinistra e una **Topbar funzionale** per lo switch del contesto (Tenant).

## 1. Sidebar Menu (Navigazione Principale)
La sidebar è il centro di controllo dell'amministratore. Di seguito il dettaglio della navigazione interna a ciascuna sezione:

### 📊 Dashboard Globale
È la vista d'atterraggio. Non presenta sotto-pagine ma è ricca di navigazione informativa:
*   **Widget KPI**: Quattro cluster principali (Energia, Economia, Sostenibilità, Efficienza).
*   **Pannello Rapido Membri**: Sidebar contestuale a destra che elenca i membri attivi/offline con stato in tempo reale.
*   **Grafico Settimanale**: Visualizzazione comparativa di Produzione, Prelievo e Autoconsumo.
*   **Meteo & Previsioni (Consumo Consapevole)**: Pannello interattivo con timeline oraria delle previsioni, irradianza e indicatore qualitativo della produzione (es. "Ottimale" con smiley) per guidare l'autoconsumo.

### ⚡ CER (Gestione & Configurazione)
Questa sezione accorpa tutti i parametri tecnici ed economici della comunità, organizzata tramite una navigazione a tab o moduli:
*   **Dati e Parametri CER**: Configurazione dell'ID CER, area geografica e parametri tecnici depositati presso il GSE.
*   **Gestione Impianto**: Monitoraggio dei nodi di produzione (fotovoltaico, eolico, accumulo) e stato degli inverter comunitari.
*   **Ripartizione Incentivi**:
    *   **Regole di Ripartizione**: Configurazione delle percentuali di asset allocation (Producer, Consumer, Ente).
    *   **Ripartizione per Membro**: Visualizzazione dell'incentivo spettante a ogni singolo partecipante in base all'autoconsumo virtuale generato.

### 👥 Comunità & Membri
Gestione dell'anagrafica e monitoraggio dei partecipanti:
*   **Tabella/Griglia Membri**: Vista principale con filtri per Ruolo (Consumer, Prosumer, Producer) e barra di ricerca.
*   **Dettaglio Membro**: Cliccando su una card, si naviga alla pagina specifica del membro (`/admin/community/:id`).
    *   *Sotto-sezioni Dettaglio*: Anagrafica e Profilo Energetico (Grafico Recharts 24h).

### 🔔 Comunicazioni
Centro di comando per le notifiche push alla community:
*   **Composer Broadcast**: Form per la creazione di messaggi (Critici o Informativi).
*   **Quick-Alerts**: Modelli predefiniti per invio rapido di comunicazioni su maltempo o picchi di produzione.
*   **History**: Elenco cronologico delle ultime notifiche inviate.

## 2. Topbar Funzionale
Permette la gestione multi-tenant e il monitoraggio dello stato del sistema:

*   **Tenant Switch (Dropdown)**: Consente di cambiare istantaneamente la vista tra diverse CER gestite (es. CER Centro, CER Industriale).
*   **Stato Sistema (Badge)**: Indicatore live "Sistema Operativo" con animazione di heartbeat.
*   **Profilo Admin**: Avatar e accesso rapido alle impostazioni del profilo gestore.

## 3. Gerarchia delle Pagine (Sitemap)

```mermaid
graph TD
    A[Admin Layout] --> B[Dashboard Globale]
    A --> C[CER - Parametri & Incentivi]
    C --> C1[Gestione Impianto]
    C --> C2[Regole Ripartizione]
    A --> D[Comunità & Membri]
    D --> D1[Dettaglio Membro]
    A --> E[Comunicazioni]
```

## 4. Design & UX
*   **Stile**: Dark Sidebar con accenti Indigo/Glassmorphism.
*   **Sidebar Collassabile**: L'utente può ridurre la sidebar a una vista compatta (solo icone) per massimizzare lo spazio di lavoro, con tooltip informativi al passaggio del mouse.
*   **Sidebar Interattiva**: La voce attiva è evidenziata con un background traslucido e bordo colorato (Indigo).
*   **Integrazione**: La rimozione delle sezioni autonome "Ripartizioni" e "Gamification" semplifica la navigazione, centralizzando il valore economico all'interno della sezione tecnica "CER".
*   **Context Awareness**: Cambiando il Tenant nella Topbar, tutte le pagine sottostanti aggiornano automaticamente i dati visualizzati.
