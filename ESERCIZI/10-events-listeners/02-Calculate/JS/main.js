/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-18
 * @description 
 * ● add inputs for half number, percentage and circle area
 * 
 * ● use the functions from the previous calculator exercises
 * 
 * ● for each operation, create an event listener for the button, and when it's 
 *   clicked, find the value of the appropriate input and show the result of the 
 *   calculation in the solution div
 * 
 * ● afterwards, change the code so that you respond to key presses so that the 
 *   user doesn't have to click the button
 */



/**
 * function createCalculatorInput
 * creates inputs and their respective labels based on given parameters,
 * which are then appended to a designated input support div.
 * @param {string} textOfLabel - description text for the label
 * @param {string} idInput - ID to be applied to the input element
 * @param {string} idButton - ID to be applied to the button element
 */
function createCalculatorInput(textOfLabel, idInput, idButton) {

  // create label element to describe the input
  let labelCyrcle = document.createElement("label");
  labelCyrcle.textContent = textOfLabel;

  // create input element for passing the entered number
  let inputCyrcle = document.createElement("input");
  inputCyrcle.type = "number";
  inputCyrcle.id = idInput;

  // create button element to trigger input value submission via event listener
  let buttonCyrcle = document.createElement("button");
  buttonCyrcle.textContent = "Calculate";
  buttonCyrcle.id = idButton;

  // create line break element for visual separation between inputs
  let breakLine = document.createElement("br");

  // if it's the percentage input, add an additional label+input (2 number input) for the second number
  if (idInput === "percentage-input") {

    let labelSecondNumber = document.createElement("label");
    labelSecondNumber.textContent = "second number:";

    let inputSecondNumber = document.createElement("input");
    inputSecondNumber.id = "secondNum-input";

    // append label + input (for percentage % case) to the input support div
    divForInput.append(labelCyrcle, inputCyrcle, labelSecondNumber, inputSecondNumber, buttonCyrcle, breakLine);

  } else {
    // append label + input (for other cases) to the input support div
    divForInput.append(labelCyrcle, inputCyrcle, buttonCyrcle, breakLine);
  }
}



// variable to hold a div where created inputs will be appended
const divForInput = document.querySelector("div.afterInput");

// variable to hold the div where results will be displayed
let divResults = document.getElementById("solution");

/* function to create inputs with labels describing them, using string arguments
that will be assigned to the IDs of the input and button elements */
createCalculatorInput("half this number:", "half-input", "half-button");
createCalculatorInput("percentage of this number:", "percentage-input", "percentage-button");
createCalculatorInput("circle area of this number:", "area-input", "area-button");



// button 1 (square): calculate square based on value entered in the square input
const buttonSquare = document.getElementById("square-button");
buttonSquare.addEventListener("click", () => {

  let inputSquare = document.querySelector("input#square-input");
  let numberSquare = inputSquare.value * inputSquare.value;
  divResults.textContent = `the square is ${numberSquare}`;
});

// button 2 (half): calculate half based on value entered in the half input
const buttonHalf = document.getElementById("half-button");
buttonHalf.addEventListener("click", () => {

  let inputHalf = document.querySelector("input#half-input");
  let numberHalf = inputHalf.value / 2;
  divResults.textContent = `the half is ${numberHalf}`;
});

// button 3 (percentage %): calculate percentage based on values entered in percentage and second number inputs
const buttonPercentage = document.getElementById("percentage-button");
buttonPercentage.addEventListener("click", () => {

  let inputPercentage = document.querySelector("input#percentage-input");
  let inputSecondNumber = document.querySelector("input#secondNum-input");
  let percentage = (inputPercentage.value * inputSecondNumber.value) / 100;
  divResults.textContent = `the % is ${percentage}`;
});

// button 4 (area): calculate circle area based on value entered in the area input
const buttonArea = document.getElementById("area-button");
buttonArea.addEventListener("click", () => {

  let inputArea = document.querySelector("input#area-input");
  let numberArea = Math.PI * (inputArea.value * inputArea.value);
  divResults.textContent = `the area is ${numberArea}`;
});
