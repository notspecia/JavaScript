/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-27
 * @description 
 * ● Write a function named calculateSupply that:
   ○ takes 2 arguments: age, amount per day.
   ○ calculates the amount consumed for rest of the life (based on a constant max age).
   ● outputs the result to the screen like so: "You will need NN cups of coffee to last you until the age of X"
   ● Call that function three times, passing in different values each time
 */


/**
 * funzione calculateSupply
 * calcola e stampa quante tazze di caffè berrò fino a quando vivo :)
 * @param {number} age - la mia età
 * @param {number} cupsDay - numero di tazze che bevo al giorno
 */
function calculateSupply(age, cupsDay) {
    const maxAge = 80;
    let amountConsumed = (maxAge - age) * (cupsDay * 365);
    console.log("you will need", amountConsumed, "cups of coffee to last you until the age of", maxAge);
}


// 1 richiamo della funzione utilizzando due argomenti
calculateSupply(20, 2);

// 2 richiamo della funzione utilizzando una costante + argomento
const age = 35;
calculateSupply(age, 3);

// 3 richiamo della funzione utilizzando una costante + argomento (invertendo)
let cupsDay = 1;
calculateSupply(40, cupsDay);