/*Concetti programmazione ad oggetti (dove vogliamo arrivare)

Nella programmazione ad oggetti si dice:

> “*everything is object”*


Si parla infatti solo in termini di oggetti, fisici, definiti o più indefiniti. 
Prima ci si concentrava più sulle *operazioni* (iterando ad esempio la lista nomi con un ciclo e considerando gli indici).

Invece di avere una lista di nomi, di cognomi e date di nascita si avrà un oggetto template “Persona” che conterrà quei valori. (esempio Carta d’identità)

Ci sono proprietà statiche (data di nascita) e altre dinamiche (libri letti) e sono le azioni (metodi/funzioni) che modificano le proprietà.

> state and behaviour
> 

Anche se dovessero avere tutti i valori uguali restano diverse (esempio panda rosse)

Sulla base delle proprietà si possono fare dei ragionamenti (esempio panda usate con 10/1000km)

Nel programma si fa uso dell’astrazione per rappresentare con proprietà definite una “cosa” che realisticamente potrebbe avere infinite caratteristiche. (esempio hobby, libri letti, ecc.)

Per ribadire il concetto *“everything is object”*, anche la window del browser è un oggetto (con proprietà larghezza, altezza,ecc.) e contiene a sua volta altri oggetti figli (barra degli indirizzi, console, barra di scorrimento, ecc.).

### Relazione tra gli oggetti

Aggregazione (debole) esempio ruote della macchina

Composizione (forte) esempio motore

La difficoltà è quindi scomporre il programma in oggetti e gli oggetti in oggetti e così via.

Il grande vantaggio della programmazione ad oggetti è la possibilità di suddividere il codice in parti, permettendo così di lavorare in più persone sullo stesso codice suddiviso in piccole parti piuttosto che una sola persona in un file enorme. Si “vince” quindi il tempo

Variabile: uno spazio di memoria associata ad un nome simbolico (identificatore)

---

### Tipi di dati

quando si prende un elemento dalla window è utile usare il casting per definire che quello che prendiamo è un “button”.

Risulta quindi utile (seppur meno “sicuro”) utilizzare javascript 

Tipi primitivi → numeri, string, bool

Tipi avanzati → Oggetti

Javascript si adatta al tipo di dato e risulta necessario fare attenzione quando si confrontano valori.
Ad esempio:

- `"5" == 5` ritorna `TRUE` perchè non controlla il tipo
- `"5" === 5` ritorna `FALSE` perchè controlla anche il tipo

### **Istruzioni di Salto**

---

- **`break`** Utilizzato per uscire da un ciclo o da uno switch-case.
- **`continue` S**alta il resto del corpo di un ciclo e passa all'iterazione successiva.
- **`return`** Restituisce un valore da una funzione e termina l'esecuzione della funzione.
- **`throw`** Lancia un'eccezione.

Funzione → ritorna sempre un output e non ha side-effects. (esempio funziona somma)

Procedura → non necessita di input e/o output e può avere side-effects. (esempio )

# Funzioni e procedure

---

Le funzioni e le procedure sono costrutti fondamentali nei linguaggi di programmazione che consentono di organizzare e strutturare il codice in modo modulare. Entrambi rappresentano blocchi di codice che eseguono un'operazione specifica, ma ci sono alcune differenze 
chiave tra di loro:

## Funzioni

1. **Ritorno di Valore:**
    - Una funzione può restituire un valore.
    - Esempio in Java:
        
        ```java
        public int somma(int a, int b) {
            return a + b;
        }
        ```
        
2. **Chiamata in Espressioni:**
    - Una funzione può essere chiamata all'interno di un'espressione.
    - Esempio in Python:
        
        ```python
        risultato = somma(3, 4)
        ```
        
3. **Nome:**
    - Una funzione ha un nome e può essere referenziata in modo esplicito.
    - Esempio in C++:
        
        ```cpp
        int moltiplica(int x, int y) {
            return x * y;
        }
        ```
        

## Procedure

1. **Nessun Ritorno di Valore (o Ritorno di Tipo Void):**
    - Una procedura può eseguire un'azione ma non restituisce un valore.
    - Esempio in C:
        
        ```c
        void stampaMessaggio() {
            printf("Ciao, mondo!\n");
        }
        ```
        
2. **Chiamata come Istruzione:**
    - Una procedura viene chiamata come un'istruzione.
    - Esempio in JavaScript:
        
        ```jsx
        function saluta() {
            console.log("Ciao, mondo!");
        }
        
        saluta();
        ```
        
3. **Nome:**
    - Una procedura ha un nome ma è spesso referenziata solo tramite la chiamata.
    - Esempio in Pascal:
        
        ```pascal
        procedure saluta;
        begin
            writeln('Ciao, mondo!');
        end;
        ```
        

In molti linguaggi di programmazione moderni, la distinzione tra funzioni e procedure potrebbe non essere così rigida, e spesso il termine "funzione" è usato in modo generico per riferirsi sia a funzioni che a procedure. La scelta tra l'utilizzo di funzioni o procedure dipende spesso dalla necessità di restituire o meno un valore.

Entrambe le funzioni e le procedure sono fondamentali per la creazione di codice modulare e riutilizzabile. Consentono di suddividere un programma complesso in parti più gestibili, migliorando la chiarezza del codice e facilitando la manutenzione.

### Nota

Attenzione alla non sequenzialità in javascript (esempio del console.log prima di una assegnazione che ritorna il valore assegnato)
Nella programmazione ad oggetti infatti non è necessario dichiarare tutte le funzioni prima di utilizzarle (esempio di C in cui bisogna dichiararle tutte prima di int main() ) */
