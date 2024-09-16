// !01. SEMPLICE FUNZIONE --> DONT WORK 
/* Il motivo per cui il codice non funziona è che stai usando la sintassi sbagliata per 
restituire un oggetto con this all'interno di una funzione costruttore. 

Quando usi return in una funzione costruttore insieme a this, 
non è necessario restituire esplicitamente un oggetto. 

La funzione costruttore, con la parola chiave new, 
crea automaticamente un nuovo oggetto e associa this a quell'oggetto.
Inoltre, this non può essere utilizzato direttamente all'interno di un oggetto restituito da return. 
Se provi a farlo, non avrai l'effetto desiderato. */

// function Canine(latinName) {
//     return {
//         this.genus: 'Canis',
//         this.latinName: latinName
//     }
// };

// let dog = Canine('Canis familiaris');
// let greyWolf = Canine('Canis lupus');

// console.log(dog, greyWolf);


// --------------------------------------------------------------------------------------------


// !02. SEMPLICE FUNZIONE --> WORK! 
/* In questo caso, il codice funziona perché non stai utilizzando una funzione costruttore, 
ma una semplice funzione che restituisce un oggetto letterale. 
Questo è diverso dal meccanismo di una funzione costruttore con `new`*/

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
Adam e Sam non sono copie indipendenti di person, 
ma puntano entrambi allo stesso oggetto in memoria. Quindi, se cambi una proprietà di adam, 
cambierà anche per sam (e viceversa), perché in realtà stai modificando lo stesso oggetto. */

// let person = {
//     heart: 'black'
// };

// let adam = person; // Riferimento allo STESSO oggetto 
// let sam = person;  // Riferimento allo STESSO oggetto 

// console.log(adam.heart); // black
// console.log(sam.heart);  // black

// adam.heart = 'big'; //! will change also the original!!!

// console.log(adam.heart); // big
// console.log(sam.heart);  // big





// * --------------------------------------------------------------------------------------------
// * --------------------------------------------------------------------------------------------





// !01. CREATION OBJECT WHIT Object.create() and NO CONSTRUCTOR
/* Il metodo statico crea un nuovo oggetto utilizzando 
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





// *--------------------------------------------------------------------------------------------
//* ----------------------------- using PROTOTYPE (prima di JS ES6) ----------------------------





// !01. CREATION OBJECT WHIT CONSTRUCTOR FUNCTION (OOP) + create `new` instances
/* In JavaScript, una "Function Costruttore" è una funzione utilizzata per creare oggetti. 
Funziona come un modello (stampino) per creare più oggetti con proprietà e metodi simili. 
Quando viene chiamata con la parola chiave `new`, viene creata una nuova istanza dell'oggetto 
e `this` all'interno del costruttore si riferisce all'oggetto appena creato. */


// Canine is called a Constructor Function -->  typeof Canine is 'function'
// function Canine(latinName, age) {
//     this.genus = 'Canis';
//     this.latinName = latinName;
//     this.age = age;
// };


// // Use the new keyword to create new instances of this "class"
// let dog = new Canine('Canis familiaris', 2);
// let greyWolf = new Canine('Canis lupus', 7);

// console.log(dog, greyWolf);


// --------------------------------------------------------------------------------------------


// !02. add METHODS and PROPERTIES to the prototype of the  ---> CONSTRUCTOR FUNCTION (Canine)!!!
/* si sta aggiungendo il metodo `howl` al prototipo di `Canine`
significa che tutte le istanze di Canine avranno accesso a questo metodo senza che il metodo sia duplicato in ogni istanza.
Questo è un modo efficiente di condividere metodi tra tutte le istanze.

Anche se non vedi il metodo `howl` direttamente nell'output, le istanze dog e greyWolf
possono comunque chiamarlo perché lo ereditano dal prototipo di `Canine` */


// function Canine(latinName) {
//     this.genus = 'Canis';
//     this.latinName = latinName;
// };

// let dog = new Canine('Canis familiaris');
// let greyWolf = new Canine('Canis lupus');



// // add the METHOD TO THE --> prototype of the CONSTRUCTOR
// Canine.prototype.howl = () => {
//     console.log('AAAAWWWOOOOOO');
// }


// // U CAN USE THE METHOD ON BOTH `ISTANCE`
// dog.howl(); // AAAAWWWOOOOOO
// greyWolf.howl(); // AAAAWWWOOOOOO


// --------------------------------------------------------------------------------------------


// !03. add METHODS and PROPERTIES to an ISTANCE (dog || greywolf)  does not apply them to all instances!!
/* quando aggiungi metodi o proprietà a un'`istanza` specifica di un oggetto,
questi NON VENGONO ereditati o applicati alle ALTRE ISTANZE dello stesso tipo!! */


// function Canine(latinName) {
//     this.genus = 'Canis';
//     this.latinName = latinName;
// };

// let dog = new Canine('Canis familiaris');
// let greyWolf = new Canine('Canis lupus');



// // METODO aggiunto solamente all'istanza dell'oggetto `dog` (non sarà applicato a greyWolf!)
// dog.fetch = function () {
//     console.log('dog wants to play fetch!');
// };

// // METODO aggiunto solamente all'istanza dell'oggetto `greyWolf`(non sarà applicato a dog!)
// greyWolf.hunt = function () {
//     console.log('grey wolf is hunting its prey');
// };


// dog.fetch(); //? dog wants to play fetch!
// dog.hunt(); //! Error: dog.hunt is not a function

// greyWolf.fetch(); //! Error: greyWolf.fetch is not a function
// greyWolf.hunt(); //? grey wolf is hunting its prey





// * --------------------------------------------------------------------------------------------
// * --------------------------------------------------------------------------------------------





//!01. review of --> CREATE OBJECT DEFINING CONSTRUCTOR FUNCTIONS AND METHODS
/* */


//? -------------------------------------------------------------------|
//? per un esempio COMPLETO con tutto guardare slide --> ex: book      |
//? -------------------------------------------------------------------|


// --------------------------------------------------------------------------------------------


//!02. USE CLEANER CONSTRUCTORS
/* */



// --------------------------------------------------------------------------------------------


//!03. EXTENDING OBJECTS
/* */



// --------------------------------------------------------------------------------------------


//!04. OPERATOR ISTANCEOF 
/* */















// *--------------------------------------------------------------------------------------------
//*  ----------------------------- using CLASSES (dopo di JS ES6) ------------------------------



















// * --------------------------------------------------------------------------------------------
// * --------------------------------------------------------------------------------------------



// !APPUNTI E RESOCONTO DI  ----> FUNZIONI NORMALI VS FUNZIONE COSTRUTTORE / CLASSI (new, this)

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