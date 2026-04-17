# Documento 2: Casi d'Uso (Use Cases) UX-Driven - Attore: Gestore Ente

Il gestore dell'Ente Pubblico è l'attore principale che utilizza **Brilla**. In un'ottica UX "Pro Max", le sue interazioni non devono essere tediose o ripetitive, ma supportate da micro-animazioni di gratificazione e flussi utente ottimizzati (Frictionless).

## Casi d'Uso (UC) per il Gestore PA

### UC-00: Autenticazione al Portale
**Descrizione:** Il gestore esegue l'accesso sicuro per gestire i dati sensibili della CER.  
**UX Flow:** 
- Inserimento delle credenziali in un form minimale (floating labels animate).  
- *Feedback Visivo:* Tasto login che mostra un micro-spinner integrato durante l'attesa (skeleton states attivi in background) e diventa verde prima del fade-out.
**Risultato:** Accesso fluido, accompagnato da animazioni stagger per svelare la dashboard senza flash di schermi bianchi.

### UC-01: Monitoraggio del Sincronismo Impianto-Consumer
**Descrizione:** Verifica assorbimento produzione dell'impianto durante le ore diurne.  
**UX Flow:** 
- Analisi visiva tramite "Live Energy Canvas" interattivo. Passando il mouse sui flussi energetici (hover state), il tracciato si illumina (Glow) e mostra tooltip a comparsa rapida (0 delay).
**Risultato:** Comprensione istantanea e senza sforzo cognitivo dei carichi fuori produzione.

### UC-02: Consultazione Anagrafica e Stato POD
**Descrizione:** Controllo dei dati tecnici e stato di connessione dei 5 POD.  
**UX Flow:** 
- Visualizzazione tramite Digital Twin. Invece di refresh pagina, cliccare su un nodo apre uno "Slide-over" laterale con morbido effetto shadow.
**Risultato:** Ispezione profonda senza perdere il contesto spaziale globale in caso di anomalie.

### UC-03: Analisi delle Performance Individuali
**Descrizione:** Valutazione dell'efficienza specifica delle 4 aziende consumer.  
**UX Flow:** 
- Classifica visiva dinamica. I membri più virtuosi poggiano in cima (effetto podio grafico), mentre i dati scorrono su bar-charts animati con React Spring (l'altezza della barra cresce al mount del componente).
**Risultato:** Valutazione ludicizzata (gamification sottile) della virtuosità per la ripartizione del cashback energetico.

### UC-04: Validazione e Invio Report di Consuntivazione
**Descrizione:** Rendicontazione finale con il GSE.  
**UX Flow:** 
- Processo di firma digitale o checkmark tramutati in "Swipe to Confirm" per evitare click accidentali. 
- *Delight Moment:* Una volta inviato, animazione a tutto schermo discreta stile coriandoli geometrici (succede solo una volta al mese e premia psicologicamente l'utente PA).
**Risultato:** Trasparenza massimizzata, stress ridotto. Eliminazione della "paura dell'errore irreversebile" attraverso step-by-step UI chiare.