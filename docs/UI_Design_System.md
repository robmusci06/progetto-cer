# Brilla - Design System & UI Guidelines

Questo documento racchiude le specifiche visive basate sulla reference fornita per garantire un'interfaccia Premium, moderna e pulita.

## 1. Palette Cromatica
*   **Background Generale:** Grigio chiarissimo, quasi bianco (`#F8F9FA` o `slate-50`), per far risaltare le card bianche.
*   **Cards & Superfici:** Bianco puro (`#FFFFFF`) con ombre morbidissime e diffuse (es. `box-shadow: 0 4px 20px rgba(0,0,0,0.03)`).
*   **Colore Primario (Data-Viz):** Ciano/Menta Brillante (circa `hsl(165, 100%, 45%)` o `#00FFC4`) utilizzato per i riempimenti dei grafici a barre e le progress bar della graduatoria. Risalta in modo estremo sul fondo bianco.
*   **Gradienti d'Accento:** Un gradiente vibrante che va dal magenta scuro all'arancione pescato (Pink-Orange Gradient). Utilizzato per:
    *   La card "Highlight" (es. Membri attivi / Candidature).
    *   L'effetto *Mesh Gradient* sfocato e ampio posizionato nell'angolo in alto a sinistra dello schermo, dietro il logo "Brilla".
*   **Testi:** 
    *   Titoli e Numeri principali: Grigio Scuro / Antracite (`#1F2937`).
    *   Label e sottotitoli: Grigio Medio (`#6B7280`).

## 2. Tipografia
*   **Font Family:** Sans-serif moderno e pulito (es. `Inter`, `Roboto`, o `SF Pro`).
*   **Pesi:** 
    *   I "Big Numbers" delle KPI (es. 1.212 MWh) usano un peso "Light" o "Regular" per dare un tocco d'eleganza, anziché un bold pesante.
    *   Le label descrittive sono più piccole e leggibili.

## 3. Elementi di Layout
### 3.1 Sidebar (Navigazione)
*   Sfondo bianco o trasparente.
*   Voce attiva: Evidenziata con una *Pill* (rettangolo con bordi massimamente arrotondati, `rounded-full`) di colore **Nero/Grigio scurissimo**, con testo e icona bianchi ad alto contrasto.
*   Voci inattive: Icona e testo grigio, con uno status morbido all'hover.

### 3.2 Widget (Bento Cards)
*   **Border Radius:** Arrotondamento generoso (es. `16px` o `rounded-2xl`).
*   Struttura a griglia fluida: Card KPI in alto (1/3 di larghezza), Chart principale al centro-sinistra (ampio) e widget Graduatoria a destra (stretto).

### 3.3 Data Visualization (Chart e Gamification)
*   **Bar Chart Principale:** Formato a barre sovrapposte/composite. La barra di sfondo (grigio chiaro/trasparente) indica un tetto massimo o uno storico, mentre la barra interna turchese brillante indica il valore raggiunto. Presente anche un indicatore orizzontale a riga nera per i target/medie.
*   **Leaderboard (Graduatoria):** Lista di elementi contenente Avatar 3D/Illustrato, Nome, valore numerico (kWh) e mini progress-bar (sempre turchese) seguita dalla %.
