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

  // Variabile contenente la metà della width della viewport
  let halfViewPort = Math.round(window.innerWidth / 2); // Arrotondiamo il numero per evitare problemi di virgola

  // Calcolo per la posizione centrale del gatto
  let catPosition = walking + imageCat.width / 2;

  console.log(`walking: ${catPosition}, halfViewPort: ${halfViewPort}`);

  // ---------------------------------------

  // se il gatto è al centro della viewport, allora si fermerà e cambierà imamgine
  if (Math.abs(catPosition - halfViewPort) < 10 && !catFree) {
    imageCat.src = "https://static-cdn.jtvnw.net/jtv_user_pictures/cd3ac040-1b9b-4457-b540-a527dc035d21-profile_image-300x300.png";

    setTimeout(() => {
      imageCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
      catFree = true;
    }, 10000);

    return;

    // se il gatto non è al centro dello schermo, allora continua a muoversi
  } else {

    if (direction === "forward") {
      walking += 10;

    } else {
      walking -= 10;
    }

    imageCat.style.left = `${walking}px`;


    // controlla se il gatto ha raggiunto il lato destro della finestra
    if (walking + imageCat.width >= window.innerWidth) {
      direction = "backward";
      imageCat.style.transform = "scaleX(-1)";
    }

    // controlla se il gatto ha raggiunto il lato sinistro della finestra
    if (walking <= 0) {
      direction = "forward";
      imageCat.style.transform = "scaleX(1)";
    }
  }
}




// assegniazione ad una variabile l'immagine del gatto
let imageCat = document.querySelector("img");

// valore number utilizzato per muovere il gatto di X px dalla sua posizione
let walking = 0;

// stabiliamo la direzione di camminata del gatto 
let direction = "forward";

// flag per il movimento
let catFree = false;

// ogni 5ms andrà a schedulare una funzione che sposta la gif del gatto verso destra (10 px)
setInterval(catwalkBackwards, 50);