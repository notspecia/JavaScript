## Author Details

* Name: Gabriele Speciale
* Date: 2024-06-10
* Concat: gabriele.speciale@edu.itspiemonte.it





## Description

create a simulation of a dishwasher system using two stacks of dishes

● one stack represents dirty dishes, and the other represents clean dishes
 
● the dirty stack has a random number of plates 2 - 7
 
● useful functions
  ○ washDish - moves a dish from the dirty stack to the clean stack
  ○ displayStacks - displays the current state of both stacks in the console
  ○ runSimulation - simulate washing all dirty dishes adding a random delay between steps
 
bonus:
1. have three stacks of dirty dishes and one clean stack
2. the dishwasher is able to wash two dishes at a time






## Approach to solution

### 1. html structure 
- **html setup**:
- create an html structure with four `<ul>` elements to represent the stacks of dirty (three) and clean dishes (one)
- include necessary css for styling the dish stacks and the plates


### 2. javascript implementation
- **dirty stack creation**:
- implement a function `createDirtyStack` to generate a random number of dirty dishes (between 2 and 7)
- each dish is represented by an `<li>` element with an `<img>` of a dirty plate

- **dish washing function**:
- implement a function `washDish` to simulate moving a dish from the dirty stack to the clean stack
- the function should:
- remove the last element from the dirty stack array
- remove the corresponding `<li>` element from the dom
- create a new `<li>` element with a clean plate image and add it to the clean stack

- **simulation execution**:
- implement a function `runSimulation` to manage the washing process
- use `setInterval` to periodically move dishes from the dirty stacks to the clean stack every 2 seconds
- stop the simulation when all dishes are moved to the clean stack


### implementation details
- **dirty stack creation**:
- use `document.getElementById` to select the `<ul>` for the dirty stack
- generate a random number of dirty plates and append corresponding `<li>` elements with dirty plate images to the `<ul>`

- **dish washing function**:
- use `Array.pop` to remove the last element from the array representing the dirty stack
- use `Node.removeChild` to remove the corresponding `<li>` from the dirty stack `<ul>`
- create a new `<li>` with a clean plate image and append it to the clean stack `<ul>`

- **simulation execution**:
- initialize the dirty and clean stacks using `createDirtyStack`
- convert the nodelist of dirty stack elements to an array for easy manipulation
- use `setInterval` to repeatedly call `washDish` every 2 seconds
- stop the interval and alert the user when all dishes are clean





## files

* index.html
* main.js
* style.css