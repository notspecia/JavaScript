/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-01
 * @description 
 * ● Write a for loop that will iterate from 0 to 20. 
   ● For each iteration, it will check if the current number is odd or even, and 
     report that to the screen (e.g. "2 is even").
*/



// dichiarazione variabili
let i;

// ciclo for che stampa i numeri da 0 a 20
for (i = 0; i <= 20; i++) {

    i % 2 === 0 ? console.log("il numero", i, "è un numero pari") : console.log("il numero", i, "è un numero dispari");
    // condizione che verifica e stampa se il numero è pari o dispari
    // if (i % 2 == 0) {
    //     console.log("il numero", i, "è un numero pari");
    // } else {
    //     console.log("il numero", i, "è un numero dispari");
    // }
}