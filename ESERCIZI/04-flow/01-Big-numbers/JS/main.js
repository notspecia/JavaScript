/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-01
 * @description 
 * ● Write a function named greaterNum that:
   ○ takes 2 arguments, both numbers.
   ○ returns whichever number is the greater (higher) number.
   ● Call that function 2 times with different number pairs, and log the output to 
     make sure it works (e.g. "The greater number of 5 and 10 is 10.").
 */


/**
 * funzione greaterNum
 * Dfunzione che riceve in argomento 2 numeri e restituisce il numero con il valore + alro
 * @param {number} num1 - primo numero
 * @param {number} num2 - secondo numero
 * @returns {greaterNum} - prende il valore del numero + alto tra i 2
 */
function greaterNum(num1, num2) {

    let greaterNum; // variabile che prende il valore del numero + alto

    if (num1 > num2) {
        greaterNum = num1;
    } else {
        greaterNum = num2;
    }
    return greaterNum;
}



// dichiarazione e inizializzazione variabili
let num1 = 10;
let num2 = 7;
let num3 = 6;
let num4 = 3;
let numeroAlto; // prenderà il valore del numero + alto passato dalla funzione

// 1 richiamo funzione greaterNum utilizzando i primi 2 numeri per fare la prima coppia
numeroAlto = greaterNum(num1, num2);
console.log("The greater number of", num1, "and", num2, "is", numeroAlto);

// 2 richiamo funzione greaterNum utilizzando i succesivi 2 numeri per fare la seconda coppia
numeroAlto = greaterNum(num3, num4);
console.log("The greater number of", num3, "and", num4, "is", numeroAlto);