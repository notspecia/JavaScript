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
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function makeStory() {

  // andremo a prendere da questi input il valore scritto al loro interno!
  const name = document.getElementById("noun");
  const adjective = document.getElementById("adjective");
  const personName = document.getElementById("person");

  let story = document.getElementById("story");
  story.textContent = `${name.value} really like ${adjective.value} ${personName.value}`
}


// andiamo a prendere il button tramite ID
const buttonStory = document.getElementById("gen-button");
buttonStory.addEventListener("click", makeStory);