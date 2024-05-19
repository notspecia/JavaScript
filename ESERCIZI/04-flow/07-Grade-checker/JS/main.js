/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-03
 * @description 
 * ● Write a loop that tests the function that you wrote earlier “assignGrade”.
   ● Check every value from 60 to 100: 
   ○ your log should show:
    ■ “For 88, you got a B.”
    ■ “For 89, you got a B.”
    ■ “For 90, you got an A.”
    ■ etc.
 */


    
// dichiarazione variabili
let i;
let grade;

//ciclo for che gradua tutti i voti da 60 a 100
for (i = 60; i <= 100; i++) {

    // se l'espressione è falsa, passa al caso successivo fino a quando non trova una corrispondenza o raggiunge il caso predefinito
    switch (true) {

        case i == 100:
            grade = "A";
            break;

        case i >= 75:
            grade = "B";
            break;

        case i >= 65:
            grade = "C";
            break;

        case i >= 60:
            grade = "D";
            break;

        default:
            grade = "impossibile"
    }

    // stampa della graduatoria del voto numerico
    console.log("the vote", i, "is an --->", grade);
}