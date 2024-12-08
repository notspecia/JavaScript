//* ------------------------------------------------------------------------------------------------------------------------
//* ------------------------------------- RIPASSO DI CODICE MODERNO ES6 ----------------------------------------------------
//* ------------------------------------------------------------------------------------------------------------------------


// BLOCK SCOPE (let) -> Le variabili dichiarate all'interno di un blocco { } non sono accessibili dall'esterno del blocco
for (let i = 0; i < 10; i++) {
  let t = i;
  console.log('inside i = ', i);
  console.log('inside t = ', t);
}
console.log('outside i = ', i); // i not defined
console.log('outside t = ', t); // t not defined


// FUNCTION SCOPE (var) -> Le variabili dichiarate all'interno di un blocco { } sono accessibili dall'esterno del blocco.
for (var i = 0; i < 10; i++) {
  var t = i;
  console.log('inside i = ', i);
  console.log('inside t = ', t);
}

console.log('outside i = ', i); // 10
console.log('outside t = ', t); // 9






//* ---------------------------------------------- CHAINING + ARROW FUNCTIONS AND SCOPE ----------------------------------------------------


/* questo codice utilizza funzioni freccia (arrow functions) e la funzione setTimeout()
per dimostrare il comportamento delle operazioni asincrone in JavaScript. */

// arrow function usata in entrambi i timeout
const f = () => {
  console.log('no return value');
};

setTimeout(() => {
  console.log('before calling f');
  f();
  console.log('after calling f');
}, 500);


setTimeout(f, 1500);


//? ------------------------------------------------------------------


// applichiamo il chaining dei metodi .filter().map() con delle arrow functions
let result = [1, 2, 3, 4]
  .filter(number => number % 2 === 0)
  .map(number => number * 2);


console.log(`result = ${result.join(", ")}`);


//? ------------------------------------------------------------------


// PROBLEMA
// let person = {
//     name: 'Gabriele',
//     // .this -> si riferisce correttamente all'oggetto persona, CON ARROW FUNCTION SI RIFERISCE AL CONTESTO GLOBALE (window)
//     talk: function () {
//         console.log('I am', this.name);
//     },
//     // all'interno della funzione passata a setTimeout, this non si riferisce più all'oggetto person, si riferisce al contesto globale.
//     talkLater: function () {
//         setTimeout(function () {
//             console.log('I am still', this.name);
//         }, 1000);
//     },
// };

// person.talk(); // I am Gabriele
// person.talkLater(); // I am still

// -------------------------------------------------------------------------

// // SOULUZIONE
// /* le arrow functions, a differenza delle funzioni normali, non creano un proprio contesto this.
// Invece, ereditano il valore di this dal contesto in cui sono state definite. */

// let person = {
//     name: 'james',
//     talk: function () {
//         console.log('I am', this.name);
//     },
//     talkArrow: function () {
//         setTimeout(() => {
//             console.log('I am still', this.name);
//         }, 3000);
//     }
// };
// person.talk(); // I am james
// person.talkArrow(); // I am still james





//* ----------------------------- DESTRUCTING (ARRAY / OBJECTS) + DEFAULT PARAMETERS + REST OPERATOR ---------------------------------

/* Destructuring è una funzionalità introdotta in ES6,È particolarmente utile per migliorare la leggibilità e ridurre il codice
che permette di:

! 01. ordinare/scambiare la posizione dei valori dell'array originale:
- Questo è particolarmente utile con array.

! 02. estrarre valori da array e assegnarli a variabili in modo coinciso:
- Creare direttamente delle variabili e assegnarli i valori inseriti nel'destructing dall'array originale
- Puoi ignorare gli elementi che non ti servono lasciando uno spazio vuoto (x, ,z)
- Se un valore nell'array è undefined, puoi specificare un valore predefinito nel destructuring

! 03. rest operators ... :
- Usa il rest operator ... permettono di raccogliere un numero variabile di argomenti in un array di quelli che sono rimasti dutante il destructing. 
  Questo è utile quando non si conosce a priori quanti argomenti verranno passati a una funzione.
  IMPORTANTE: I rest parameters sono sempre l'ultimo parametro di una funzione,  Non è possibile avere parametri dopo i rest parameters:
*/


const lettere = ["a", "b", "c", "d"];

// andiamo ad effettuare lo SWAP di 2 valori nell'array
[lettere[0], lettere[3]] = [lettere[3], lettere[0]];
console.log(lettere);


// --------------------------------------------------------------------


const numeri = [10, 20, 30, 50];

// Destructuring dell'array test base su come funziona con gli array
const [a, b, , d] = numeri;

console.log(a); // 10
console.log(b); // 20
console.log(d); // 50


// --------------------------------------------------------------------


const sports = ["calcio", "tennis", "nuoto", undefined, "muay thai", "mma", "baseball"];

// Destructuring dell'array passando le variabili a una funzione (test del rest operator ...  /  test valore predefinito)
function DestructuringSports([first, , third, fourth = "karate", fifth, ...rest]) {
  console.log(first);
  console.log(third);
  console.log(fourth);
  console.log(fifth);
  console.log(rest);
  console.log(`mi chiamo Gabriele e mi piacciono i seguenti sport : ${rest.join(", ")}.`); // join() dell rest[] con gli sports rimasti
}

DestructuringSports(sports);



//? --------------------------------------------------------------------------------------------------



/* La destructuring degli oggetti permette di estrarre valori dalle proprietà degli oggetti
utilizzando la sintassi delle parentesi graffe {}.

! 01. proprietà da oggetti e assegnarli a variabili
- Puoi rinominare le variabili usando la sintassi -->  proprietà: nuovoNome
- Anche qui puoi specificare valori predefiniti nel caso siano `undefind`
- Con gli oggetti, il rest operator ...  raccoglie tutte le proprietà non destrutturate

! 02. proprietà da oggetti NESTATI dentro altri oggetti
- Si può anche per gli oggetti nestati ma ovviamente richiede una sintassi + complessa da creare -> { lavoro:{1x, 2x} }
*/


const person = {
  firstName: 'james',
  lastName: 'smith',
  teacher: true,
  age: 33
};

// prendiamo proprietà dall'oggetto senza andarle a rinominare! /   possiamo dare dei valori di default anche per gli oggetti!
const { firstName, age, teacher, city = "Torino" } = person;
console.log(`My name is ${firstName} I am ${age + 10} years old (lie) and i live in ${city}`);

// prendiamo le proprietà dall'oggetto e rinominimole con nomi a piacere!   
const { firstName: name, lastName, age: years } = person;
console.log(`Name is ${name}, Lastname is ${lastName}, age is ${years} `);


// // ------------------------------------------------------------------------


const student = {
  firstName: 'gabry',
  lastName: 'specia',
  age: 20,
  hobby: {
    nameVideogame: "FFX",
    relase: 2000
  },
  zaino: "tessuto",
  bottiglietta: "metallo",
  isOld: false
};

// Destructuring dell'oggetto passando le variabili a una funzione (test del rest operator ...  /  test oggetto nidificato)
function destructuringStudent({ firstName, lastName, age, city = "Naples", hobby: { nameVideogame: videogame, relase } }) {

  console.log(`Name is ${firstName}, Lastname is ${lastName}, age is ${age} and he live in ${city}`);

  if (relase <= 2000) {
    console.log(`u're game ${videogame}, is old (but good!) mancano i rest andiamo ad unire: ${isOld}`);
    console.log(isOld);

  } else {
    console.log(`u're game ${videogame}, is new gen!`);
  }
}

destructuringStudent(student);





//* --------------------------------------------- SPREAD OPERATOR (ARRAY / OBJECTS) ----------------------------------------------------

/*
Lo Spread Operator (...) consente di espandere (o "spargere") gli elementi di un array 
in un altro contesto, come un altro array 

! Che azioni posso fare con lo spread operator con gli array (...):
- copiare
- copiare + aggiungere
- fondere + array

! DIFFERENZE TRA -> IL REST OPERATOR(...) / LO SPREAD OPERATOR(...)

*/


const colors = ["blue", "white", "yellow", "red", "green"];
const colors2 = ["magenta", "orange", "aqua"];

// copia 
const clones = [...colors];
console.log(clones);

// copia + aggiunta
const colorsAndDarks = [...colors, "black", "gray", "oscure", "darksea"];
console.log(colorsAndDarks);

// fusione di molteplici array
const allColors = [...colors, ...colors2, ...colorsAndDarks];
console.log(allColors);


//? ------------------------------------------------------------------






//* --------------------------------------------------- OPTIONAL CHAINING -------------------------------------------------------------


/* */