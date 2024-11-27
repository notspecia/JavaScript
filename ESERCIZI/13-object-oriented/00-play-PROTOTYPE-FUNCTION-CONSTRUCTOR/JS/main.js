// !01. SEMPLICE FUNZIONE --> DONT WORK
/* Il motivo per cui il codice non funziona è che si sta usando la sintassi sbagliata per
restituire un oggetto con this all'interno di una funzione costruttore.

Quando usi return in una funzione costruttore insieme a this,
non è necessario restituire esplicitamente un oggetto.

La funzione costruttore, con la parola chiave new,
crea automaticamente un nuovo oggetto e associa this a quell'oggetto.
Inoltre, this non può essere utilizzato direttamente all'interno di un oggetto restituito da return.
Se provi a farlo, non avrai l'effetto desiderato. */

// function Canine(latinName) {
//     return {
//         this.genus = 'Canis';
//         this.latinName = latinName;
//     }
// };

// let dog = Canine('Canis familiaris');
// let greyWolf = Canine('Canis lupus');

// console.log(dog, greyWolf);


//? --------------------------------------------------------------------------------------------


// !02. SEMPLICE FUNZIONE --> WORK!
/* In questo caso, il codice funziona perché NON stai utilizzando una funzione costruttore,
ma una semplice funzione che restituisce un oggetto letterale.

Questo è diverso dal meccanismo di una funzione costruttore delle istanze con `new` */

// function Canine(latinName) {
//     return {
//         genus: 'Canis',
//         latinName: latinName
//     }
// };


// let dog = Canine('Canis familiaris');
// let greyWolf = Canine('Canis lupus');

// console.log(dog, greyWolf);




// * --------------------------------------------------------------------------------------------
// * --------------------------------------------------------------------------------------------


// !01. CREATION OBJECT WHITOUT CONSTRUCTOR and NO METHODS!
/*in questo caso andiamo a creare un oggetto e lo assegneremo a 2 variabili DIVERSE,

il PROBLEMA!!!!!!!!:
Adam e Sam non sono copie indipendenti di `person`
ma puntano entrambi allo stesso oggetto in memoria. Quindi, se cambi una proprietà di adam,
cambierà anche per sam (e viceversa), perché in realtà stai modificando lo stesso oggetto. */

// let person = {
//     heart: 'black'
// };


// let adam = person; // riferimento allo STESSO oggetto
// let sam = person;  // riferimento allo STESSO oggetto

// console.log(adam.heart); // black
// console.log(sam.heart);  // black


// adam.heart = 'big'; //! will change also the original for every copy!!!

// console.log(adam.heart); // big
// console.log(sam.heart);  // big




// * --------------------------------------------------------------------------------------------
// * --------------------------------------------------------------------------------------------


// !01. CREATION OBJECT WHIT Object.create() and NO CONSTRUCTOR
/* Il metodo statico Object.create(), crea un nuovo oggetto utilizzando
un oggetto esistente come prototipo del nuovo oggetto creato. */

// let person = {
//     heart: 'black'
// };


// let adam = Object.create(person);
// let sam = Object.create(person);

// console.log(adam.heart); // black
// console.log(sam.heart);  // black


// adam.heart = 'yellow'; //?  will NOT change also the original!!!

// console.log(adam.heart); // big
// console.log(sam.heart); // yellow




// *---------------------------------------------------------------------------------------------------
//* ----------------------------- using PROTOTYPE (prima di JS ES6) -----------------------------------


// !01. CREATION OBJECT WHIT CONSTRUCTOR FUNCTION (OOP) + create `new` instances
/* In JavaScript, una "Function Costruttore" è una funzione utilizzata per creare oggetti.
Funziona come un modello (stampino) per creare più oggetti con proprietà e metodi simili.

Quando viene chiamata con la parola chiave `new`, viene creata una nuova istanza dell'oggetto
e `this` all'interno del costruttore si riferisce all'oggetto appena creato. */


// // Canine is called a Constructor Function -->  typeof Canine is 'function'
// function Canine(latinName, age) {
//     this.genus = 'Canis';
//     this.latinName = latinName;
//     this.age = age;
//     this.saluti = function () {
//         console.log(`ciao faccio parte della famiglia dei: ${this.latinName}`);
//     }
// };


// // Use the new keyword to create new instances of this "class"
// let dog = new Canine('Canis familiaris', 2);
// let greyWolf = new Canine('Canis lupus', 7);

// console.log(dog, greyWolf);
// greyWolf.saluti(); // try to use an method whit and istance


//? --------------------------------------------------------------------------------------------


// !02. add METHODS and PROPERTIES (separated) to the prototype of the  ---> CONSTRUCTOR FUNCTION (Canine)!!!
/* si sta aggiungendo il metodo `howl` separatamente, al prototipo di `Canine`
significa che tutte le istanze di Canine avranno accesso a questo metodo senza che il metodo sia duplicato in ogni istanza.
Questo è un modo efficiente di condividere metodi tra tutte le istanze.

Anche se non vedi il metodo `howl` direttamente nell'output, le istanze dog e greyWolf
possono comunque chiamarlo perché lo ereditano dal prototipo di `Canine` */


// function Canine(latinName) {
//     this.genus = 'Canis';
//     this.latinName = latinName;
// };

// // add the METHOD TO THE --> prototype of the CONSTRUCTOR
// Canine.prototype.howl = function () {
//     console.log(`AAAAWWWOOOOOO im ${this.latinName}`);
// }


// let dog = new Canine('Canis familiaris');
// let greyWolf = new Canine('Canis lupus');

// // U CAN USE THE METHOD ON BOTH `ISTANCE`
// dog.howl(); 
// greyWolf.howl(); 


//? --------------------------------------------------------------------------------------------


// !03. add METHODS and PROPERTIES to an `single ISTANCE` (dog || greywolf) does not apply them to all instances!!
/* quando aggiungi metodi o proprietà a un'`istanza` specifica di un oggetto,
questi NON VENGONO ereditati o applicati alle ALTRE ISTANZE dello stesso tipo!! */

// funzione costruttrice per creare delle istanze
function Canine(latinName) {
    this.genus = 'Canis';
    this.latinName = latinName;
};

let dog = new Canine('Canis familiaris');
let greyWolf = new Canine('Canis lupus');


// METODO aggiunto solamente all'istanza dell'oggetto `dog` (non sarà applicato a greyWolf!)
dog.fetch = function () {
    console.log(`dog wants to play fetch!, im ${this.latinName}`);
};

// METODO aggiunto solamente all'istanza dell'oggetto `greyWolf`(non sarà applicato a dog!)
greyWolf.hunt = function () {
    console.log(`grey wolf is hunting its prey, im ${this.latinName}`);
};



dog.fetch(); //? dog wants to play fetch!
dog.hunt(); //! Error: dog.hunt is not a function

greyWolf.hunt(); //? grey wolf is hunting its prey
greyWolf.fetch(); //! Error: greyWolf.fetch is not a function




// * --------------------------------------------------------------------------------------------
// * --------------------------------------------------------------------------------------------


//!01. CREATE OBJECT and DEFINING CONSTRUCTOR FUNCTIONS AND METHODS
/* RIPASSO --> Stai creando una funzione costruttore in JavaScript per generare oggetti libro
con proprietà come titolo, autore e numero di pagine.

aggiunta di un metodo al prototipo per condividere funzionalità tra gli oggetti,
come simulare la lettura del libro, aggiornando le pagine lette e stampando un messaggio
In questo modo, ottieni oggetti con proprietà uniche e comportamenti comuni. */

// // constructor function whit the proprieties of the book
// function Book(title, author, numPages) {
//     this.title = title;
//     this.author = author;
//     this.numPages = numPages;
//     this.currentReadPages = 0;
// }

// // aggiunta di un metodo (read) al prototipo dell'oggetto (Book)
// Book.prototype.read = function () {
//     this.currentPage = this.numPages;
//     console.log('You read ' + this.numPages + ' pages!');
// };


// // instantiating a new Book object
// let book = new Book('Robot Dreams', 'Isaac Asimov', 320);

// console.log(`the title of the book is ${book.title} and it's author is ${book.author}`);
// book.read();


//? --------------------------------------------------------------------------------------------


//!02. CREATE CLEANER OBJECTS CONSTRUCTORS
/* creazione oggetti in modo più pulito passando un oggetto di configurazione
alla funzione costruttore. Questo approccio è utile quando ci sono molte proprietà
da impostare, poiché semplifica la gestione dei dati e rende il codice più leggibile. */

// //è consigliabile passare un OGGETTO GIA CONFIGURATO se ci sono MOLTE PROPRIETA
// function Book(config) {
//     this.title = config.title;
//     this.author = config.author;
//     this.numPages = config.numPages;
//     this.currentPage = 0;
// }

// // creazione di una new istance (book) passando già un oggetto configurato
// let book = new Book({
//     title: 'Robot Dreams',
//     author: 'Isaac Asimov',
//     numPages: 320
// });


//? --------------------------------------------------------------------------------------------


//!03. OPTIONAL PROPERTIES CONSTRUCTORS
/* alcune proprietà POSSONO ESSERE RESE OPZIONALI assegnando valori di default.
In questo modo, se non vengono forniti parametri alla funzione costruttrice (ad esempio, se manca l'autore),
vengono utilizzati valori predefiniti per garantire che l'oggetto sia comunque valido e informativo. */

// some properties can be made optional by assigning default values
function Book(config) {
    this.title = config.title || 'Untitled';
    this.author = config.author || 'Unknown';
    this.numPages = config.numPages || "No informations!";
    this.currentPage = 0;
}


/* nel caso non fossero passati dei parametri alla funzione costruttrice (ex non è presente la prop AUTHOR)
allora mettiamo delle opzioni di "altra scelta" nella funzione costruttrice (||) */
let book = new Book({
    title: 'Robot Dreams',
    numPages: 320
});

console.log(book);


//? --------------------------------------------------------------------------------------------


//!04. EXTENDING THE PROTOTYPE OBJECTS +
//!05. OPERATOR ISTANCEOF
/*
   Esaminazione dell'esempio su come funziona l'estensione:

   01. Book.call(this, title, author, numPages) --> inizializza le proprietà dell'oggetto PaperBack
   richiamando il costruttore Book.

   TODO 02.
*/

// // Funzione costruttore per BOOK
// function Book(title, author, numPages) {
//     this.title = title;
//     this.author = author;
//     this.numPages = numPages;
//     this.currentPage = 0;
// }

// // Funzione costruttore per PAPERBACK
// function PaperBack(title, author, numPages, cover) {
//     Book.call(this, title, author, numPages); // Inizializza le proprietà ereditate da Book
//     this.cover = cover; // Aggiunge la proprietà specifica per PaperBack
// }


// // Estensione del prototipo di Book
// PaperBack.prototype = Object.create(Book.prototype); // Permette a PaperBack di ereditare metodi da Book



// // Aggiunta di un metodo al prototipo di PaperBack
// PaperBack.prototype.read = function () {
//     this.currentPage = this.numPages; // Imposta la pagina corrente all'ultima
//     console.log('Hai letto ' + this.numPages + ' pagine!'); // Messaggio di conferma
// };

// // Aggiunta di un metodo al prototipo di PaperBack
// PaperBack.prototype.burn = function () {
//     console.log('Omg, hai bruciato tutte le ' + this.numPages + ' pagine'); // Messaggio di avviso
//     this.numPages = 0; // Imposta il numero di pagine a 0
// };



// // Creazione di una nuova istanza di oggetto PaperBack
// let paperback = new PaperBack('1984', 'George Orwell', 250, 'cover.jpg');
// console.log(paperback);

// paperback.read(); // Invocazione del metodo "leggere" sull'oggetto PaperBack
// paperback.burn(); // Invocazione del metodo "bruciare" sull'oggetto PaperBack



//! PART OF istanceof -----------------------------------------------------------
// TODO COMPLETE THE EXPL /* */

// // book is a book, also paperback is a Book
// console.log(book instanceof Book); // true
// console.log(paperback instanceof Book); // true

// // but book is not a PaperBack
// console.log(paperback instanceof PaperBack); // true
// console.log(book instanceof PaperBack); // false

// // both are instances of Object because of prototype inheritance
// console.log(book instanceof Object); // true
// console.log(paperback instanceof Object); // true










// APPUNTI E RESOCONTO DI  ----> FUNZIONI NORMALI   VS   FUNZIONE COSTRUTTORE / CLASSI (new, this)

// ?01. Struttura OOP: Funzione Costruttore o Classi (con new):
/* riuso del codice tramite prototipi: Con una funzione costruttore o una classe, i metodi
definiti sono associati al prototipo dell'oggetto, il che significa che tutte le istanze condividono
lo stesso metodo senza duplicarlo in ogni oggetto. Questo risparmia memoria. */


// ?02. Differenza di comportamento con new
/* `new` e il contesto di this --> Quando usi `new`, la funzione costruttore,
crea automaticamente un nuovo oggetto e imposta il contesto di `this` per riferirsi a quell'oggetto.
Senza `new`, this non viene gestito automaticamente, e devi restituire l'oggetto manualmente. */


// ?03. Funzione Normale (Semplice Restituzione di Oggetti)
/* ogni oggetto è separato e indipendente: Ogni volta che chiami la funzione,
crei una nuova copia di tutti i dati e metodi, inclusi i metodi all'interno dell'oggetto.
Questo può aumentare il consumo di memoria se stai creando molti oggetti,
poiché i metodi non sono condivisi tra le istanze. */


// --------------------------------------------------------------------------------------------