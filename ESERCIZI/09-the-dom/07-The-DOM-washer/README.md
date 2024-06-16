## Author Details

* Name: Gabriele Speciale
* Date: 2024-06-10
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

create a simulation of a dishwasher system using two stacks of dishes
 
 ● one stack represents dirty dishes, and the other represents clean dishes

 ● the dirty stack has a random number of plates 10 - 15
 
 ● useful functions
  ○ washDish - moves a dish from the dirty stack to the clean stack
  ○ drawStacks - displays the current state of both stacks in the page updating the DOM
  ○ runSimulation - simulate washing all dirty dishes adding a random delay between steps

 ● use correct HTML and CSS as needed for this exercise




## Approach to Solution

### 1. HTML Structure and JavaScript Integration
- **HTML Setup**:
- Create an HTML structure with two `<ul>` elements to represent the stacks of dirty and clean dishes
- Include necessary CSS for styling the dish stacks



### 2. JavaScript Implementation
- **Dirty Stack Creation**:
- Implement a function `createDirtyStack` to generate a random number of dirty dishes (between 10 and 15)
- Each dish is represented by an `<li>` element with an `<img>` of a dirty plate

- **Dish Washing Function**:
- Implement a function `washDish` to simulate moving a dish from the dirty stack to the clean stack

* The function should:
- Remove the last element from the dirty stack array
- Remove the corresponding `<li>` element from the DOM
- Create a new `<li>` element with an `<img>` of a clean plate and add it to the clean stack

- **Simulation Execution**:
- Implement a function `runSimulation` to manage the washing process
- Use `setInterval` to periodically move a dish from the dirty stack to the clean stack every 2 seconds
- Stop the simulation when all dishes are moved to the clean stack

### Implementation Details
- **Dirty Stack Creation**:
- Use `document.getElementById` to select the `<ul>` for the dirty stack
- Generate a random number of dirty plates and append corresponding `<li>` elements with dirty plate images to the `<ul>`






## files

* index.html
* main.js
* style.css