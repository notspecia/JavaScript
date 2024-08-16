/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-18
 * @description 
 * ● Add an event listener to the button so that it calls a makeStory function 
     when clicked.

   ● In the makeStory function, retrieve the current values of the form input 
     elements, make a story from them, and output that in the story div (like 
     "Joseph really likes pink cucumbers.")
 */

/**
 * function makeStory
 * This function is triggered when the button is clicked. It assigns the input values to variables,
 * forms a story from them, and inserts the story into the designated div.
 */
function makeStory() {

  // Get the values entered in the inputs and assign them to variables
  const name = document.getElementById("noun");
  const adjective = document.getElementById("adjective");
  const personName = document.getElementById("person");

  // Create the story by combining the input values
  let story = document.getElementById("story");
  story.textContent = `${name.value} really like ${adjective.value} ${personName.value}`
}

// Get the button by ID and assign it to a variable
const buttonStory = document.getElementById("gen-button");
buttonStory.addEventListener("click", makeStory);