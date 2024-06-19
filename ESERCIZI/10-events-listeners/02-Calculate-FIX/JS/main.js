/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-18
 * @description 
 * ● Add inputs for half number, percentage and circle area
 * 
   ● Use the functions from the previous calculator exercises

   ● For each operation, create an event listener for the button, and when it's 
     clicked, find the value of the appropriate input and show the result of the 
     calculation in the solution div

   ● Afterwards, change the code so that you respond to key presses so that the 
     user doesn't have to click the button
 */



/**
 * function createCalculatorInput
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 */
function createCalculatorInput(textOfLabel, idInput, idButton) {

  // creazione del label da usare come descrizione dell'input
  let labelCyrcle = document.createElement("label");
  labelCyrcle.textContent = textOfLabel;

  // creazione di un elemento input da utilizzare per passare il numero scritto in esso
  let inputCyrcle = document.createElement("input");
  inputCyrcle.type = "number";
  inputCyrcle.id = idInput;

  // creazione di un elemento button da utilizzare per inviare il valore dell'input dall'event listener
  let buttonCyrcle = document.createElement("button");
  buttonCyrcle.textContent = "Calculate";
  buttonCyrcle.id = idButton;

  // creazione di un elemento br per andare a capo tra un input e un altro
  let breakLine = document.createElement("br");

  // CREAZIONE DELL'INPUT E DESCRIZIONE DEL LABEL


  // ! se si tratta dell'input PERCENTUALE%, aggiungiamo +1 input con inserimento di un secondo numero
  if (idInput === "percentage-input") {

    let labelSecondNumber = document.createElement("label");
    labelSecondNumber.textContent = "second number:";

    let inputSecondNumber = document.createElement("input");
    inputSecondNumber.id = "secondNum-input";

    // appendiamo il label e il label successivamente al div di supporto 
    divForInput.append(labelCyrcle, inputCyrcle, labelSecondNumber, inputSecondNumber, buttonCyrcle, breakLine);

  } else {
    // appendiamo il label e il label successivamente al div di supporto 
    divForInput.append(labelCyrcle, inputCyrcle, buttonCyrcle, breakLine);
  }
}



// assegniamo alla variabile un div utile per appendere dopo esso gli input successivi
const divForInput = document.querySelector("div.afterInput");

// funzione che esegue la creazione degli input con label che lo descrive
createCalculatorInput("Half this number:", "half-input", "half-button");
createCalculatorInput("Percentage of this number:", "percentage-input", "percentage-button");
createCalculatorInput("Circle Area of this number:", "area-input", "area-button");











