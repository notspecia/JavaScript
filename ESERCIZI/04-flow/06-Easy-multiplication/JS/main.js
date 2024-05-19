/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-01
 * @description
 * ● Write a for loop that will iterate from 0 to 10.
   ● For each iteration of the for loop, it will multiply the number by 9 and log
     the result (e.g. "2 * 9 = 18").
   ● Bonus: Use a nested for loop to show the tables for every multiplier from 1
     to 10 (100 results total).
 */


// dichiarazione variabili
let i;
let j;
let multiplication;

// ciclo for che moltiplica e stampa ogni numero da 0 10, con il numero 9
for (i = 0; i <= 10; i++) {

    multiplication = i * 9;
    console.log("multiplication", i, "*", 9, "=", multiplication);
}



// ---BONUS!!---
console.log("\n\n\n-------------------------- BONUS ------------------------------")

// cicli annidati dove ogni numero da 0 a 10, viene moltiplicato e stampato con i numeri da 0 a 10
for (i = 0; i <= 10; i++) {

    console.log("\n\nTABELLA DI MOLTIPLICAZIONE PER:", i);

    for (j = 0; j <= 10; j++) {
        multiplication = i * j;
        console.log("multiplication", i, "*", j, "=", multiplication);

    }

}