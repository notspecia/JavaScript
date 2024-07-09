/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-18
 * @description 
 *  ● the cat should start from the left side of the screen
 * 
 *  ● write a function ‘catWalk()’ that moves the cat 10 pixels to the right
 * 
 *  ● make the cat move across the screen by calling that function every 50ms
 * 
 *  ● write different versions of the function to handle the following variant:
 *    ○ variant 2: when the cat reaches the right side of the screen, it should move backwards. 
 *       when it reaches the left it should move forwards
 */


/**
 * function catwalkBackwards
 * 
 * every 50 ms, this function is scheduled to move the cat from its original position
 * once it reaches the right edge of the viewport, it changes the direction of its walk
 * then again, when it reaches the left edge of the viewport, it starts walking forward again
 */
function catwalkBackwards() {

  // if moving forward, add 10px to walk position
  if (catWalk.walkDirection === "forward") {
    catWalk.walkPosition += 10;

    // if moving backward, subtract 10px from walk position
  } else {
    catWalk.walkPosition -= 10;
  }


  catWalk.imageCat.style.left = `${catWalk.walkPosition}px`;

  // if the cat's current position + the image width is >= the viewport width, change direction to backward
  if (catWalk.walkPosition + catWalk.imageCat.width >= window.innerWidth) {
    catWalk.walkDirection = "backward";
    catWalk.imageCat.style.transform = "scaleX(-1)";
  }

  // if the cat's current position <= 0, change direction to forward
  if (catWalk.walkPosition <= 0) {
    catWalk.walkDirection = "forward";
    catWalk.imageCat.style.transform = "scaleX(1)";
  }
}


// object that stores the walk parameters and direction of the cat
let catWalk = {
  walkPosition: 0, // current position of the cat (absolute position in px)
  walkDirection: "forward", // current walking direction of the cat
  imageCat: document.querySelector("img") // cat image with absolute position to the viewport
};

// every 50ms schedules a function to move the cat gif to the right (10 px)
setInterval(catwalkBackwards, 50);
