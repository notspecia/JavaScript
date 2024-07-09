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
 * function catwalkBackwards
 * 
 * every 50 ms, this function is scheduled to move the cat from its original position.
 * once it reaches the right edge of the viewport, it changes direction and walks backward.
 * if the cat reaches the left edge of the viewport, it changes direction and walks forward.
 * if the cat reaches the middle of the viewport, it changes the image, waits for 10 seconds,
 * and then continues walking as before.
 */
function catwalkBackwards() {

  // variable containing half of the viewport width
  let halfViewPort = Math.round(window.innerWidth / 2); // round the number to avoid decimal issues

  // calculate the middle position of the cat
  let catMiddle = catWalk.walkPosition + catWalk.imageCat.width / 2;

  // if the cat is in the middle of the viewport and hasn't stopped before, it will stop and change its image
  if (Math.abs(catMiddle - halfViewPort) < 10 && !catWalk.catFree) {
    catWalk.imageCat.src = "https://static-cdn.jtvnw.net/jtv_user_pictures/cd3ac040-1b9b-4457-b540-a527dc035d21-profile_image-300x300.png";

    // after 10 seconds, it will return to its original image and start walking again
    setTimeout(() => {
      catWalk.imageCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
      catWalk.catFree = true;
    }, 10000);

    return;

  } else {

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

}

// object that stores the walk parameters and direction of the cat
let catWalk = {
  walkPosition: 0, // current position of the cat (absolute position in px)
  walkDirection: "forward", // current walking direction of the cat
  imageCat: document.querySelector("img"), // cat image with absolute position to the viewport
  catFree: false  // flag for the stop in the middle
};

// every 50ms, schedule a function that moves the cat gif to the right (10px)
setInterval(catwalkBackwards, 50);