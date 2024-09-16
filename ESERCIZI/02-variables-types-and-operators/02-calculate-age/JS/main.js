/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-20
 * @description 
 * ● Store your birth year in a variable.
   ● Store a future year in a variable.
   ● Calculate your 2 possible ages for that year based on the stored values.
   ● For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
   ● Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
 */


// dichiarazione variabili
let birth;       //anno di nascita
let annoFuturo;  //un anno futuro
let eta;         //possibile età facendo birth - annoFuturo

// inizializzazioni variabili
birth = 2004;
annoFuturo = 2030;
eta = annoFuturo - birth;

// stampa su console di quanti anni avrò in X anno
console.log("avrò circa", eta - 1, "o", eta, "anni, nel", annoFuturo);