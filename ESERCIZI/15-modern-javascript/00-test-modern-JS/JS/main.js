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



// ------------------------------------------------------



// // applichiamo il chaining dei metodi con delle arrow functions
// let result = [1, 2, 3, 4]
//     .filter(number => number % 2 === 0)
//     .map(number => number * 2);


// console.log(`result = ${result.join(", ")}`);



// -----------------------------------------------------


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


// person.talk(); // I am james
// person.talkLater(); // I am still !!!!!!!



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



// -------------------------------------------------------------------------



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



// -------------------------------------------------------------------------



//! SPIEGAZIONE PROMISE VIDEO -> https://www.youtube.com/watch?v=NOzi4wBHn0o
/* le promise sono OGGETTI, che gestiscono il codice e le operazioni asincrone che promettono un valore prima o poi
inizialmente verrà mostrato come usare le callback functions, per poi capire l'utilità delle PROMISE
*FASI:        PENDING --> RESOLVED || REJECTED
?SINTASSI:    new Promise((resolve, reject)) => {CODICE ASINCRONO}
*/


//! ripasso delle callback functions, inseriamo:  CALLBACK FUNCTION  +  RITARDO IN ms
/*
01. rendiamo asincorne le funzioni mettendo un setTimeOut al loro interno.

02. se volessimo fare questi lavoretti (funzioni) in ORDINE di come gli abbiamo scritti, allora dobbiamo modificare
le funzioni aggiungendo a loro come parametro una callback function per far si che vengano eseguite in ORDINE, 
altrimenti verrano seguite in base ai ms stabiliti in maniera asincrona */

function playVideogames(callback) {

    setTimeout(() => {
        console.log("now im playing videogames O.O");
        callback();
    }, 3000);
}


function writeCode(callback) {

    setTimeout(() => {
        console.log("im typing code :(");
        callback();
    }, 1000);
}


function takeOutTrash(callback) {

    setTimeout(() => {
        console.log("im taking out the trash bleahhh!");
        callback();
    }, 500);
}


// invochiamo la funzione passando una callback arrow function che contiene la funzione successiva che vogliamo eseguire ecc...
// ORDINE RISPETTATO!!
playVideogames(() => {
    writeCode(() => {
        takeOutTrash(() => {
            console.log("DAY ENDED, GOODNIGHT!");
        });
    });
});



//! utilizzo delle promise nell'esempio precedente per renderlo + ottimale! (NO BISOGNO DELLE CALLBACK FUNCTIONS)
/*todo */

function playVideogames() {

    setTimeout(() => {
        console.log("now im playing videogames O.O");
        callback();
    }, 3000);
}


function writeCode() {

    setTimeout(() => {
        console.log("im typing code :(");
        callback();
    }, 1000);
}


function takeOutTrash() {

    setTimeout(() => {
        console.log("im taking out the trash bleahhh!");
        callback();
    }, 500);
}













// -------------------------------------------------------------------------



// console.log(`main starts`);


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         Math.random() > 0.9 ? resolve('won toss') : reject(new Error('failed toss'));
//     }, 5000);
// })
//     // handles the result
//     .then(result => console.log(result))
//     // handles the error
//     .catch(err => console.error(err.message))
//     // runs when promise resolves or rejects
//     .finally(() => console.log('end of game'));



// console.log(`main continues`);