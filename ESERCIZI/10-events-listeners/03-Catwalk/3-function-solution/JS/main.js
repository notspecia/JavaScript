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
function catwalkBackwards() {

  if (direction === "forward") {
    walking += 10;

  } else {
    walking -= 10;
  }

  imageCat.style.left = `${walking}px`;

  // ---------------------------------------
  let widthViewPort = window.innerWidth;


  if (walking + imageCat.width / 2 >= widthViewPort / 2) {

    imageCat.src = "https://media.tenor.com/47qpxBq_Tw0AAAAM/cat-cat-meme.gif";

    setTimeout(() => {
      imageCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    }, 10000);
  }


  // controlla se il gatto ha raggiunto il lato destro della finestra
  if (walking + imageCat.width >= widthViewPort) {
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

