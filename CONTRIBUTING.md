# Linee Guida per la Collaborazione e i Commit (Progetto CER "Brilla")

Questo documento stabilisce le regole di base per la gestione del repository, assicurando che tutti gli sviluppatori (umani e intelligenza artificiale) lavorino in sincrono senza creare conflitti sul ramo `main`.

## 1. Sicurezza e Sincronizzazione (Pull First)
Prima di iniziare a sviluppare una nuova feature o di lanciare un qualsiasi comando di `git commit`, è **obbligatorio** allineare sempre il proprio codice locale con quello che si trova attualmente sul server remoto. 
* Eseguire: `git pull origin main` (o `git pull --rebase origin main`) per scaricare le modifiche dei colleghi.
* In caso di lavori "a metà" non ancora pronti per il commit, utilizzare preventivamente `git stash` e, subito dopo il pull, `git stash pop`.

## 2. Nomenclatura dei Commit (Conventional Commits)
Per mantenere uno storico (log) pulito e leggibile da chiunque senza dover esaminare riga per riga i file modificati, i commit dovranno seguire questa standardizzazione:
* `feat:` → Per l'aggiunta di una nuova funzionalità (es. `feat: aggiunta dashboard bento-box`).
* `fix:` → Per la risoluzione di bug o errori nel codice (es. `fix: sistemato crash al caricamento dei widget`).
* `docs:` → Per modifiche ai soli file di documentazione (markdown, immagini README, ecc.).
* `refactor:` → Per la pulizia, formattazione o potenziamento strutturale di codice esistente che non altera il suo scopo (es. `refactor: ottimizzazione UI/UX del form`).

## 3. Risoluzione Conflitti e Push
- **Vietato Forzare**: L'uso del comando `git push --force` è severamente vietato sul ramo principale. Se un push non va a buon fine, il motivo è che qualcuno ha inviato del codice tra il tuo ultimo pull e il tuo push.
- **Come risolvere**: Esegui `git pull`, analizza i file in conflitto, rimuovi i marker di git, aggiungi le modifiche consolidate con `git add`, finisci il merge con un commit e riprova a pushare.

Queste regole sono adottate nativamente anche dall'Assistente AI del progetto, il quale si auto-sincronizzerà prima di ogni push per evitare sovrascritture autonome del lavoro umano.
