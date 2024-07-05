/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-18
 * @description 
 *  ● The cat should start from the left side of the screen
 * 
    ● Write a function ‘catWalk()’ that moves the cat 10 pixels to the right

    ● Make the cat move across the screen by calling that function every 50ms

    ● Write different versions of the function to handle the following variant:
     ○ Variant 2: When the cat reaches the right side of the screen, it should move backwards. 
       When it reaches the left it should move forwards
 */



/**
 * function catwalkRestart
 * 
 * Descrizione della funzione
 */
function catwalkBackwards() {

  if (direction === "forward") {
    walking += 10;

  } else {
    walking -= 10;
  }

  imageCat.style.left = `${walking}px`;

  let widthViewPort = window.innerWidth;
  let catWidth = imageCat.width;

  // controlla se il gatto ha raggiunto il lato destro della finestra
  if (walking + catWidth >= widthViewPort) {
    direction = "backward";
    imageCat.style.transform = "scaleX(-1)";
  }

  // controlla se il gatto ha raggiunto il lato sinistro della finestra
  if (walking <= 0) {
    direction = "forward";
    imageCat.style.transform = "scaleX(1)";
  }
}




// assegniazione ad una variabile l'immagine del gatto
let imageCat = document.querySelector("img");

// valore number utilizzato per muovere il gatto di X px dalla sua posizione
let walking = 0;

// stabiliamo la direzione di camminata del gatto 
let direction = "forward";

// ogni 50ms andrà a schedulare una funzione che sposta la gif del gatto verso destra (10 px)
setInterval(catwalkBackwards, 50);

