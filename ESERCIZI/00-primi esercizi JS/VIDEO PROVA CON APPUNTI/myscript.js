/*java script ci permette di interagire con la pagina principale di html e di cambiarne
 il suo contenuto, java script e i suoi contenuti, vengono letti dall'alto verso il basso 
 (salvo alcuni casi).
 PER AGGIUNNERE IL LATO JS DIGITARE IL COMANDO: <script src="nome del file"></script> 


VARIABILI


1) che cosa è una variabile? 
è come se fosse una scatola che contiene dati indefiniti (x), se sappiamo che x=5, 
e facciamo il calcolo x+3= 8, il risultato varia dalla variabile, inn questo caso è 8.



2) dichiarazione di una variabile / inizializzare una variabile.

NON iniziare una variabile con numeri (5938ciao)

let nome; ---------> per dichiarare una scatola
console.log(nome)------------> per inserirla nella console
console.log(ciao)------------> NON VERRA IDENTIFICATA, xche non è stata definita



3) inizializzare una variabile.

inserire all'internno della variabile un contenuto
let nome = "specia";



4) differenza tra var e let.

nessuna in particolare, let è meglio.



5) aggiornare la variabile.
let nome = "specia"
nome = 'gabry'; -----------> non serve ridichiararla, il vecchio contenuto  cosi verra modificato



6)tipologie di variabili:

-NUMERI = interi(34)     flot(34.25 numeri conn la virgola)


-STRINGHE = "gabry è il top n1"


-BOOLEANN = true/false (vero o falso)


-ARRAY = è una collezione di dati 
let datiCaso = ["marco", "gabriele", "carlo"]
console.log(datiCaso[0]); -----------> nota importante: ogni dato ha un indice (marco=0) (gabriele=1) (carlo=2), si inizia sempre a contare da 0.

con il comando che abbiamo fatto, nella console uscirà MARCO.


-OGGETTI = rappresenta in maniera programmatica qualcosa che esiste nella realtà.
let persona = {
nome: "gabriele",
cognome: "Speciale",
codiceFiscale: "fjiewfjefew30950",
eta: 19,
coloriPreferiti : ["nero","verdeaqua"]
};

console.log(persona.cognome) -----------> uscirà SPECIALE nella console
console.log(persona.coloriPreferiti[0]) -----------> uscirà NERO nella console 



7) costanti in JS

la costante è un valore chiave NON MODIFICABILE.

const persona = "gabry";
persona = "luca";
console.log(persona) -----------> nella console NON uscirà luca anche se abbiamo aggiornato la variabile, dato che il valore persona è una costante



8)operatori in JS

esistono vari tipi di operatori per permettere si fare somme sottrazioni tra variabili ecc...
if (a==b){}...------> qui voglio dire che la variabile a è uguale alla variabile b


9) tipi di dato
if (a===b){}...------> devono avere lo stesso valore è lo stesso tipo di variabile, l'uguaglianza restituisce TRUE se il valore dei due dati sono uguali
invece restituisce FALSE se i due dati sono di tipo diverso.

10)strutture di controllo
mi permette di seguire il flusso del programma: if, if-else, while, for, do-while, swithcase
lo switch è un if else, molto più schematico ed elegante.
istruzioni di salto anche come: break (esce da un ciclo/ da uno switch case)
                                continue (passa all'iterazione succesiva)
                                return (ritorna un valore)


11)landscape(orizzontale) o portrait(verticale)*/










let persona = {
    nome: "gabriele",
    cognome: "speciale",
    codiceFiscale: "kdf9w3493jfekf",
    citta: "Torino",
    eta : 32,
    dataNascita: "07/10/2004",
    giochiPrefe: ["ffx","cod","firemblem"]
    };
    
    console.log(persona.dataNascita); 






