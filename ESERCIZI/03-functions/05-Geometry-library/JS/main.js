/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-27
 * @description 
 * ● Create a function called calcCircumfrence:
   ○ Pass the radius to the function
   ○ Calculate the circumference based on the radius, and output "The circumference is NN"
   ● Create a function called calcArea:
   ○ Pass the radius to the function.
   ○ Calculate the area based on the radius, and output "The area is NN"
 */



/**
 * funzione calcCircumfrence
 * funzione che calcola la circonferenza del cerchio
 * @param {number} raggio - raggio del cerchio
 */
function calcCircumfrence(raggio) {
    let circonferenza = 2 * raggio * Math.PI;
    console.log("the circumference is", circonferenza);
}

/**
 * funzione calcArea
 * funzione che calcola l'area del cerchio
 * @param {number} raggio - raggio del cerchio
 */
function calcArea(raggio) {
    let area = Math.PI * raggio * raggio;
    console.log("the area is", area);
}



// dichiarazione costante raggio
const raggio = 15;

// richiamo funzione calcCircumfrence che calcolo circonferenza
calcCircumfrence(raggio);

// richiamo funzione calcArea che calcola l'area
calcArea(raggio);