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



// Variable declaration
let parola = "Abracadabra";
let parolaMod;

/* 3 Solution to change the 4th letter with an X
We use .Substr () Method even if deprecated, the 2 index indicates Length! */
parolaMod = parola.substr(0, 3) + "X" + parola.substr(4);
console.log(parolaMod);