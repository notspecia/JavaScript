/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-18
 * @description 
 *  ● the cat should start from the left side of the screen
 * 
 *    ● write a function ‘catWalk()’ that moves the cat 10 pixels to the right
 * 
 *    ● make the cat move across the screen by calling that function every 50ms
 * 
 *    ● write different versions of the function to handle the following variant:
 *     ○ variant 1: when the cat reaches the right side of the screen it should restart from the left
 */


/**
 * function catwalkRestart
 * 
 * every 50 ms, this function is scheduled to move the cat from its original position
 * once it reaches the right edge of the viewport, it returns to its original position
 */
function catwalkRestart() {

  catWalk.walkPosition += 10;
  catWalk.imageCat.style.left = `${catWalk.walkPosition}px`;

  // if the cat's current position + the image width is > the viewport, the position is resetted
  if (catWalk.walkPosition + catWalk.imageCat.width > window.innerWidth) {
    catWalk.walkPosition = 0;
  }

}



// object that stores the walk parameters of the cat
let catWalk = {
  walkPosition: 0, // current position of the cat (absolute position in px)
  imageCat: document.querySelector("img") // cat image with absolute position to the viewport
};

// every 50ms schedules a function to move the cat gif to the right (10 px)
setInterval(catwalkRestart, 50);