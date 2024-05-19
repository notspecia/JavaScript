/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-27
 * @description 
 * ● Recreate the local and global scope examples in your browser
   ● Try to call the function “addNumbers” a few more times
   ● Write a new .js file that uses both local and global variables in the same project
   ● Make sure that you understand exactly what’s happening at every stage
 */

// variabile globale;
let numGlobal = 20;

/**
 * funzione addNumers
 * somma 2 variabili locali e restituisce la somma
 * @returns {number} - somma di 2 numeri 
 */
function addNumbers() {
    let num1 = 10;
    let num2 = 3;
    let somma = num1 + num2;

    console.log(somma);
    console.log(numGlobal);

    return somma;
}


// richiamo funzione
addNumbers();

// stampiamo la variabile globale
console.log(numGlobal);

// diamo valore di somma a una variaible fuori dalla funzione con il return
let sommaFuori = addNumbers();
console.log(sommaFuori);


// PROVO a stampare la somma della funzione (non riuscendoci!!!!)
console.log(somma);