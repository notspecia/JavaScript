/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-18
 * @description 
 *  ● The cat should start from the left side of the screen
 * 
    ● Write a function ‘catWalk()’ that moves the cat 10 pixels to the right

    ● Make the cat move across the screen by calling that function every 50ms

    ● Write different versions of the function to handle the following variants:
     ○ Variant 1: When the cat reaches the right side of the screen it should restart from the left
     ○ Variant 2: When the cat reaches the right side of the screen, it should move backwards. 
       When it reaches the left it should move forwards
     ○ Variant 3: When the cat reaches the middle of the screen, replace the img with a different 
       cat image. Keep it in the middle for 10 seconds, and then replace the img with the original 
       image and have it continue the walk as in variant 2
 */



/**
 * function catwalkRestart
 * 
 * Descrizione della funzione
 */
function catwalkRestart() {

  walkToRight += 5;
  imageCat.style.left = `${walkToRight}px`;

  // calcolo dato dai -> (px della width viewport della pagina - la width dell'immagine del gatto) - i px left che permettono al gatto di spostarsi
  let widthViewPort = window.innerWidth;
  // let widthViewPortCalc = (window.innerWidth - imageCat.width) - walkToRight;


  if (walkToRight + imageCat.width > widthViewPort) {
    walkToRight = 0;
  }

}




// assegniazione ad una variabile l'immagine del gatto
let imageCat = document.querySelector("img");

// valore number utilizzato per muovere il gatto di X px dalla sua posizione
let walkToRight = 0;

// ogni 50ms andrà a schedulare una funzione che sposta la gif del gatto verso destra (10 px)
setInterval(catwalkRestart, 50);

