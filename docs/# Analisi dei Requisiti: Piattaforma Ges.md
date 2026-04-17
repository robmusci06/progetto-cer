# Analisi dei Requisiti: Piattaforma Brilla (Lato Ente)

La piattaforma Brilla è un portale "SaaS-like" di altissimo profilo, progettato per accompagnare gli Enti Pubblici nella gestione operativa delle CER. L'interfaccia non deve sembrare un gestionale burocratico, ma un prodotto tech moderno e fluido. In questa configurazione specifica, il sistema gestisce un ecosistema di 5 nodi (1 Produttore e 4 Consumatori).

## 1. Requisiti Funzionali Core
**Monitoraggio Energetico Giornaliero**: 
> [!NOTE] 
> *UX Guideline*: Visualizzazione dei dati tramite "Bento Box" dashboard. Non visualizzare tabelle grezze, ma "Big Numbers" (tipografia Outfit) con trend positivi/negativi (frecce verdi illuminate/rosse).

**Gestione Nodi (1+4)**: 
> [!NOTE] 
> *UX Guideline*: Rappresentazione visiva dei nodi tramite un mini-grafo interattivo o status card con led luminosi (Neon Glow) per indicare al volo chi è online o offline.

**Integrazione Dati Ufficiali**: 
> [!NOTE] 
> *UX Guideline*: Durante il caricamento dati GSE occorre bloccare le chiamate asincrone usando Skeleton Loaders e messaggistica contestuale. Non va mai interrotta l'esperienza dell'utente.

**Candidatura Digitale**: 
> [!NOTE] 
> *UX Guideline*: Form wizard multi-step con micro-interazioni sui bottoni ("continue" diventa una check verde animata on-success).

**Rendicontazione Inclusiva**: 
> [!NOTE] 
> *UX Guideline*: Esportazioni in PDF che ereditano lo stile UI della dashboard. Chart puliti anche su sfondo bianco per una stampa senza spreco d'inchiostro (Print-ready mode).

## 2. Requisiti Tecnologici & Esperienza Utente
**Digital Twin della CER**: Replica digitale in tempo reale.
> [!TIP]
> *UI execution*: Quando si seleziona il digital twin, usare pannelli laterali "off-canvas" in vetro satinato (Glassmorphism, backdrop-blur) che scorrono morbidamente fluidificati da funzioni spring/framermotion.

**Sicurezza PA-Grade**: Protezione dati con crittografia. La percezione della sicurezza deve riflettersi in UI tramite iconografia rassicurante e modali criptici che richiedono interazioni intenzionali (Hold to confirm).

**Motore di Analisi Dati**: Algoritmi per trovare inefficienze.
> [!TIP]
> *UI execution*: Le anomalie devono "galleggiare" in cima alla view in "Alert Box" color ambra vibrante, con un effetto "pulse" attrattivo che indica l'urgenza.