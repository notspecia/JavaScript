// ARRAY METHODS

// !01. MAP

// let numbers = [1, 2, 3, 4];

// // USIAMO FOR
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     newNumbers[i] = numbers[i] * 2;
// }

// // log dei newNumbers (ogni numero di number è stato moltiplicato per 2)
// console.log(newNumbers);

// // ----------------------------------------

// // USIAMO FOR OF
// let newNumbersTwo = [];

// for (let number of numbers) {
//     newNumbersTwo.push(number * 10);
// }

// console.log(newNumbersTwo);

// // -----------------------------------------

// // USIAMO FOR EACH
// let newNumbersThree = [];

// numbers.forEach((number) => {
//     newNumbersThree.push(number * 4);
// });

// console.log(newNumbersThree);

// // -----------------------------------------

// // USIAMO MAP! funzione anonima!!
// // 01 andiamo ad usare il metodo sull'array numbers di prima
// // 02 evochiamo una funzione in cui per ogni elemento dell'array, ritorna quell'elemento *2 e lo mette nell'array newNumbersSimply
// let newNumbersSimply = numbers.map((number) => {
//     return number * 3;
// });

// console.log(numbers, newNumbersSimply);


// // USIAMO DI NUOVO MAP! funzione separata!!
// function moltiplica(number) {
//     return number * 5
// }

// // moltiplica --> callbackfunction
// let newNumbersSimply2 = numbers.map(moltiplica);
// console.log(newNumbersSimply2);

// // ---------------------------------------------

// // PICCOLO ESERCIZIO DI PROVA CON MAP

// function changeFormateDates(date) {
//     let framesDate = date.split("-"); // è un array con tutti i frammenti delle date!
//     return `${framesDate[0]}/${framesDate[1]}/${framesDate[0]}`;
// }

// // array contenente delle date
// const dates = ["2004-12-11", "2012-7-4", "2022-3-21"];

// // tramite map, andiamo a creare un array con il formato data da noi desiderato! (senza modificare dates)
// let datesNewFormate = dates.map(changeFormateDates);

// console.log(datesNewFormate);
// console.log("\n\n\n\n\n\n");


// ---------------------------------------------------------------------------------------------------------------------------


// !02. FILTER

// // USIAMO FILTER! funzione separata!!
// let numbers = [1, 2, 3, 4, 5, 6, 7];


// // il numero verrà restituito nel nuovo array solo se la condizione è TRUE
// function isEven(number) {
//     return number % 2 === 0; // condizione booleano (se il resto è == 0, true)
// }

// // array che contiene i numeri even (PARI), tutti i numeri dovranno passare un "test"
// let numbersEven = numbers.filter(isEven);
// console.log(numbersEven);

// // ---------------------------------------------------------------

// // USIAMO FILTER! funzione anonima!!
// let numbersTwo = [12, 2, 3, 45, 52, 62, 79];


// // array che contiene i numeri even (PARI), tutti i numeri dovranno passare un "test"
// let numbersEvenTwo = numbersTwo.filter((number) => {
//     return number % 2 === 0; // condizione booleano (se il resto è == 0, true)
// }).map();

// console.log(numbersEvenTwo);


// ---------------------------------------------------------------------------------------------------------------------------


// !02.01. MAP + FILTER (CHAINING --> CONCATENAZIONE)
// // 01. andiamo a prendere solo i numeri dispari (filter)
// // 02. i numeri dispari, li andiamo a * 2 (map)

// const numbers = [12, 4, 3, 1, 6, 7];

// // FILTER dei numeri dispari + MAP numeri dispari moltiplicati * 2
// const newNumbers = numbers.filter((number) => {
//     return number % 2 !== 0;
// }).map((number) => {
//     return number * 2;
// });

// console.log(newNumbers);


// ---------------------------------------------------------------------------------------------------------------------------


// !03. REDUCE
















// // 1. NESTING OBJECTS
// let doll = {
//     size: 'large',
//     innerDoll: {
//         size: 'medium'
//     }
// };

// doll.innerDoll.innerDoll = {
//     size: 'small'
// };

// console.log(doll);



// // 2 ARRAY OF OBJECTS
// let cats = [
//     {
//         name: 'Angel',
//         age: 18,
//         furColor: 'grey'
//     },
//     {
//         name: 'Evil',
//         age: 14,
//         furColor: 'red'
//     },
//     {
//         name: 'Meh',
//         age: 12,
//         FurColor: 'white' // whit braket notation
//     }
// ];

// console.log(cats);
// console.log(cats[1].furColor);
// console.log(cats[2]['FurColor']);