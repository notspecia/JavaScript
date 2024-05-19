/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-20
 * @description
 * ● Code 3 different solutions to change the 4th letter in the following string
     "Abracadabra" into an "X"

   ● Each solution should be in a separate folder.
     ○ Name them solution-1, solution-2, etc.

   ● Also include a doc file in which you explain what 3 ways you used

   ● Bonus: There are many ways to replace a character in a string. Code other
     solutions than the above 3
 */


// Variable Declaration
let parola = "Abracadabra";
let parolaMod;
let parolaArray;

// we print the original word on console to make comparisons
console.log(parola);

/* 3 Solution to change the 4th letter with an "X"
We transform the strig into an array using .split("")*/
parolaArray = parola.split("");

// Let's change the 4 element of array (3), putting the X character
parolaArray[3] = "X";
console.log(parolaArray);

/* We transform and combine the elements of the ARRAY WORDRAARY in string
and we assign the value to the word variable*/
parolaMod = parolaArray.join("");
console.log(parolaMod);
