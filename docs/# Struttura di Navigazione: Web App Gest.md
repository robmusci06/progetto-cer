# Architettura dell'Informazione e Navigazione UX (Brilla)

La piattaforma **Brilla** è strutturata su un ecosistema digitale premium. L'interfaccia è pensata per eliminare la "distrazione da dato", incanalando l'attenzione del Gestore verso metriche azionabili, attraverso una *Progressive Disclosure* elegante (rivelazione progressiva del dato).

## Layout Strutturale (Desktop First, App-like Feel)
*   **Sidebar (Left):** Semplice, icon-driven (icone lineari moderne). Su schermi ampi è fluttuante, su piccoli collassa (Off-canvas).
*   **Top Header:** Contenitore blur in glassmorphism con accesso rapido alla Dark Mode/Light Mode e notifiche "Pulse".
*   **Main Canvas:** Struttura Bento-grid asimmetrica per ospitare i widget informativi senza scroll infiniti.

## Menu / Sidebar
### GENERALE
- 📊 **Dashboard** (Vasca di riepilogo - Bento Widget)
- 🏢 **CER** (Digital twin e stato impianti/POD)
- 🤝 **Community** (Membri, candidature, suggerimenti inviati)
- 🔔 **Notifiche** (Badge numerico con effetto glowing)
- ⚙️ **Impostazioni**

## 0. Accesso e Sicurezza
### Schermata di Login
> [!NOTE]
> *UX Component*: Background astratto con gradienti fluidi animati (WebGL o mesh gradient CSS). Form centrale su scheda "frosted glass", transizioni fluide sui campi di input e feedback visivo della forza password istantaneo.

## 1. Dashboard di Supervisione (Hub Centrale)
> [!TIP]
> L'Hub è la pagina a più alto impatto. Nessuna tabella classica qui, solo visualizzazioni dinamiche.

- **KPI Widget Impianto (564 kW):** Big number con micro-grafico "sparkline" in sottofondo. Colori dinamici in base allo stato attuale.
- **Radial Progress Chart (Autoconsumo):** Indicatore circolare con animazione di riempimento allo scroll.
- **Live Energy Flow (Sincronismo):** Animazione stile "dotti luminosi" che collega l'impianto ai 4 consumer in real-time, per rendere vivo il concetto di energia condivisa.
- **Smart Notification Center:** Sidebar a comparsa laterale scattante e ricca (`backdrop-blur-md`) che emerge quando c'è un'anomalia.

## 2. Area Anagrafica e Performance (1+4)
### Lista Utenti e POD (Card View)
> [!NOTE]
> *UX Component*: Abbandonata l'idea della "tabellona", si passa a griglie di utenze. Ogni membro ha una "User Card" con tag di stato visibili ("Attivo", "Sottoperformance"). Effetto Hover "Magnetic" sulle card.
- **Modal Dettaglio:** Interfacce a comparsa (Modali) senza cambi di URL forzati, per mantenere l'utente ancorato al contesto generale.

## 3. Gestione Amministrativa e Tecnica
### Modulo Candidature & Documenti
> [!NOTE]
> *UX Component*: Interfaccia di convalida simile a uno strumento in stile "Scrum Board" (es. Da Analizzare (Kanban) / Approvate). Drag & Drop supportato (micro-animazioni di presa e rilascio fluido) per un'esperienza "App nativa".
