/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-19
 * @description 
 *   ● start with the code from the previous ‘Catwalk’ exercise
 *   ● add 4 buttons at the top of the page: ‘start’, ‘faster’, ‘slower’ and ‘stop’
 *   ● add an area to display info
 *   ● when the start button is clicked the cat should start moving across the 
 *     screen
 *   ● the cat should stop moving when the stop button is clicked
 *   ● the cat moves faster when the faster button is clicked and slower when the 
 *     slower button is clicked
 *   ● show the current speed on screen in the info area
 *   ● disable the start/stop/faster/slower buttons at the appropriate times
 *     ○ e.g. the user shouldn't be able to click "stop" if the cat isn't currently moving
 */

// ---------------------------------- functions event handler separated ----------------------------------

/**
 * function startMoving
 * activated when the start button is clicked, the cat will walk
 * Xpx from its original position (based on the walkSpeed which can be increased or decreased)
 * once the cat reaches the right edge of the viewport, it will return to its original absolute position (0px)
 * @param {object} event - event information
 */
function startMoving(event) {

  timerStart = setInterval(() => {

    // movement from its original position by Xpx at each interval
    catWalk.walkPosition += catWalk.walkSpeed;
    catWalk.imageCat.style.left = `${catWalk.walkPosition}px`;

    /* hide the start button to prevent adding another start event listener
    / show the stop button to stop the cat when the button is clicked */
    buttonStart.classList.add("hideButton");
    buttonStop.classList.remove("hideButton");

    // if the cat's position + the width of its image is > the viewport, it resets
    if (catWalk.walkPosition + catWalk.imageCat.width > window.innerWidth) {
      catWalk.walkPosition = 0;
    }

    // add the current speed of the cat to the info div at each interval
    infoDiv.textContent = `current movement speed of cat: ${catWalk.walkSpeed}px/h`;

  }, 50);
}



/**
 * function stopMoving
 * activated when the stop button is clicked, the cat will stop walking
 * and will stop at its current position, and the start button will reappear
 * to allow the cat to start walking again
 * @param {object} event - event information
 */
function stopMoving(event) {

  // stop the interval that allows the cat to move
  clearInterval(timerStart);

  /* hide the stop button 
  show the start button */
  buttonStop.classList.add("hideButton");
  buttonStart.classList.remove("hideButton");
  infoDiv.textContent = `current movement speed of cat: 0px/h`;
}



/**
 * function speedMoving
 * activated when the faster button is clicked, which increases the cat's 
 * walkSpeed by +2 each time the button is clicked
 * @param {object} event - event information
 */
function speedMoving(event) {
  catWalk.walkSpeed += 2;
}



/**
 * function slowMoving
 * activated when the slower button is clicked, which decreases the cat's 
 * walkSpeed by -2 each time the button is clicked
 * checks to ensure that the cat's walkSpeed is not < 1, which would cause the 
 * cat to walk backwards 
 * @param {object} event - event information
 */
function slowMoving(event) {

  if (catWalk.walkSpeed > 1) {
    catWalk.walkSpeed -= 2;
  }
}



// used to stop the walk when the stop button is pressed
let timerStart;

// get the div that will contain the cat's movement speed
let infoDiv = document.querySelector("div.info");


// object that storage the walk parameters of the cat
let catWalk = {
  walkPosition: 0, // current position of the cat (absolute position in px)
  walkSpeed: 3, // walking speed
  imageCat: document.querySelector("img") // cat image with absolute position to the viewport
};


// get the buttons and assign them to variables
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonFaster = document.getElementById("faster");
let buttonSlower = document.getElementById("slower");

// add event listeners to the buttons
buttonStart.addEventListener("click", startMoving);
buttonStop.addEventListener("click", stopMoving);
buttonFaster.addEventListener("click", speedMoving);
buttonSlower.addEventListener("click", slowMoving);