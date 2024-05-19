/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-27
 * @description 
 * ● Write a function named tellFortune that:
   ○ Takes 4 arguments: number of children, partner's name, geographic location, job title.
   ○ outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
   ● Call that function 3 times with 3 different values for the arguments
 */

/**
 * funzione tellFortune
 * funzione che prende le variabili passate e fa una stampa unita del mio futuro
 * @param {number} x - numero di bambini
 * @param {string} y - nome di mia moglie
 * @param {string} z - nazione in cui vivrò
 * @param {string} n - lavoro che farò
 * 
 */
function tellFortune(x, y, z, n) {
    console.log("you will be a", n, "in", z, ", and married to", y, "whit", x, "kids")
}


// 1 chiamata funzione tellFortune con argomenti sul mio futuro
tellFortune(2, "Giorgia", "Japan", "programmer");

// 2 chiamata funzione tellFortune con argomenti sul mio futuro
tellFortune(1, "Michela", "Italy", "goalkeeper");

// 3 chiamata funzione tellFortune con argomenti sul mio futuro
tellFortune(3, "Sara", "Germany", "laborer");