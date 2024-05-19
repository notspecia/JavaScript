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
let parolaArray;
let parolaNew;





// printing of the original word (parola) to make comparisons
console.log(parola);

/* Let's turn the original string into an array .split () and assign
the value to a new variable (parolaArray) */
parolaArray = parola.split("");
console.log(parolaArray)

/* Now let's erase the 4 element of array (letter "a", then 3)
and add an item (letter X) to position 3*/
parolaArray.splice(3, 1, "X");
console.log(parolaArray);

/* we go to join the array and turn it into a string assigning the value
to a new variable (parolaNew)*/
parolaNew = parolaArray.join("");
console.log(parolaNew);