## Author Details

* Name: Gabriele Speciale
* Date: 2024-06-18
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Add inputs for half number, percentage and circle area
 
● Use the functions from the previous calculator exercises

● For each operation, create an event listener for the button, and when it's 
  clicked, find the value of the appropriate input and show the result of the
  calculation in the solution div
  
● Afterwards, change the code so that you respond to key presses so that the 
  user doesn't have to click the button





## Approach to Solution

### 1. HTML Structure and JavaScript Integration
- **HTML Setup**:
- Create an HTML structure with input elements and buttons for various calculations (square, half, percentage, circle area)
- Include a `<div>` to display the results of the calculations (`solution`)


### 2. JavaScript Implementation
- **Input Creation Function**:
- Implement the function `createCalculatorInput` to dynamically generate input fields and buttons based on specified labels and IDs
- Include conditional logic to handle additional inputs for the percentage calculation

- **Calculation Functions**:
- Implement event listeners for each calculation button (`square`, `half`, `percentage`, `area`) to perform respective calculations when clicked
- Retrieve input values, execute calculations, and display results in the `solution` `<div>`

- **Key Event Handling**:
- Modify the event listeners to respond to key presses (`Enter` key) instead of clicks for improved usability

- **Event Listeners**:
- Attach event listeners to each button to execute specific calculations (`square`, `half`, `percentage`, `area`) when clicked or when the `Enter` key is pressed within the input field

- **Calculation Logic**:
- Implement calculation formulas (`square`, `half`, `percentage`, `area`) using JS arithmetic operations
- Update the `textContent` of the `solution` `<div>` with the calculated result upon each button press or `Enter` key press





## files

* index.html
* main.js