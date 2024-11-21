//* ------------------------------------------------------------------------------------------------------------------------
//* ------------------------------------- RIPASSO DI CODICE MODERNO ES6 ----------------------------------------------------
//* ------------------------------------------------------------------------------------------------------------------------


// // BLOCK SCOPE (let) -> Le variabili dichiarate all'interno di un blocco { } non sono accessibili dall'esterno del blocco
// for (let i = 0; i < 10; i++) {
//     let t = i;
//     console.log('inside i = ', i);
//     console.log('inside t = ', t);
// }
// console.log('outside i = ', i); // i not defined
// console.log('outside t = ', t); // t not defined


// // FUNCTION SCOPE (var) -> Le variabili dichiarate all'interno di un blocco { } sono accessibili dall'esterno del blocco.
// for (var i = 0; i < 10; i++) {
//     var t = i;
//     console.log('inside i = ', i);
//     console.log('inside t = ', t);
// }

// console.log('outside i = ', i); // 10
// console.log('outside t = ', t); // 9

//? ----------------------------------------------------------



//* ------------------------------------- CHAINING + ARROW FUNCTIONS AND SCOPE ----------------------------------------------------


/* questo codice utilizza funzioni freccia (arrow functions) e la funzione setTimeout()
per dimostrare il comportamento delle operazioni asincrone in JavaScript. */

// // arrow function usata in entrambi i timeout
// const f = () => {
//     console.log('no return value');
// };

// setTimeout(() => {
//     console.log('before calling f');
//     f();
//     console.log('after calling f');
// }, 500);


// setTimeout(f, 1500);


//? ------------------------------------------------------------------

// // applichiamo il chaining dei metodi con delle arrow functions
// let result = [1, 2, 3, 4]
//     .filter(number => number % 2 === 0)
//     .map(number => number * 2);


// console.log(`result = ${result.join(", ")}`);

//? ------------------------------------------------------------------

// // PROBLEMA
// let person = {
//     name: 'Gabriele',
//     // this si riferisce correttamente all'oggetto persona, CON ARROW FUNCTION SI RIFERISCE AL CONTESTO GLOBALE (window)
//     talk: function () {
//         console.log('I am', this.name);
//     },
//     talkLater: function () {
//         // all'interno della funzione passata a setTimeout, this non si riferisce più all'oggetto person, si riferisce al contesto globale.
//         setTimeout(function () {
//             console.log('I am still', this.name);
//         }, 1000);
//     },
// };

// person.talk(); // I am Gabriele
// person.talkLater(); // I am still !!!!!!!

// ----------------------------------------

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


//* ------------------------------------- DESTRUCTING (ARRAY / OBJECTS) ----------------------------------------------------


/* */

// const person = {
//     firstName: 'james',
//     lastName: 'smith',
//     teacher: true,
//     age: 33
// };

// // quickly get property values from an object
// const { firstName, age } = person;
// console.log(`My name is ${firstName} I am ${age + 10} years old (lie)`);

// // quickly get + rename the values
// const { firstName: name, lastName, age: years } = person;
// console.log(`Name is ${name}, Lastname is ${lastName}, age is ${years}`);




/* */




//* ------------------------------------- SPREAD OPERATOR (ARRAY / OBJECTS) ----------------------------------------------------


/* */


//* ------------------------------------- OPTIONAL CHAINING ----------------------------------------------------


/* */