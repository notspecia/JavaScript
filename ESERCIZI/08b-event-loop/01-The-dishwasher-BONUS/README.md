## Author Details

* Name: Gabriele Speciale
* Date: 
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description




## Approach to Solution

### 1. Variable Declaration
- **Constants**: Define two constants, `min_piatti` and `max_piatti`, to represent the minimum and maximum number of dirty plates in a stack.

- Define two arrays: one for dirty dishes (`stackDirtyPlates`) and one for clean dishes (`stackCleanPlates`).
- Randomize the number of dirty dishes between 10 and 50.

### 2. Dirty Stack Creation
- Implement a function `createDirtyStack` to initialize an array with a random number of dirty dishes, and each dish is represented as a string.

### 3. Display Function
- Implement a function `displayStacks` to print the current state of both stacks (dirty and clean) to the console. Clear the console before printing to keep the display clean.

### 4. Washing Function
- Create a function `washDish` to simulate the washing process by moving a dish from the dirty stack to the clean stack using the methods:
  1. `.push()`
  2. `.pop()`

### 5. Simulation Execution
- Implement a function `runSimulation` to manage the overall simulation process:
  - Initialize the dirty and clean stacks.
  - Use `setInterval` to simulate the washing process at regular intervals.
  - Call `washDish` and `displayStacks` until all dishes are clean.





## files

* index.html
* main.js
