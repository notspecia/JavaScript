## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-26
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

Create a simulation of a dishwasher system using two stacks of dishes
 ● one stack represents dirty dishes, and the other represents clean dishes
 ● the dirty stack has a random number of plates 10 - 50
 ● useful functions
  ○ washDish - moves a dish from the dirty stack to the clean stack
  ○ displayStacks - displays the current state of both stacks in the console
  ○ runSimulation - simulate washing all dirty dishes adding a random delay between steps







## Approach to Solution

### 1. Variable Declaration
- **Constants**: Define two constants, `min_piatti` and `max_piatti`, to represent the minimum and maximum number of dirty plates in a stack.

### 2. Dirty Stack Creation
- **Function `createDirtyStack(numberStack)`**:
- Initializes an array with a random number of dirty dishes (between 10 and 50).
- Each dish is represented as a string indicating its stack and plate number.
- Uses a loop to populate the stack with the generated dirty dishes.

### 3. Display Function
- **Function `displayStacks(cleanPlateStack, dirtyPlateStacks)`**:
- Prints the current state of all stacks (dirty and clean) to the console.
- Iterates through each dirty stack and prints its contents.
- Prints the contents of the clean stack.
- If all dirty stacks are empty, it prints a completion message indicating all plates are clean.

### 4. Washing Function
- **Function `washDish(cleanPlateStack, dirtyPlateStacks)`**:
- Simulates the washing process by moving up to two dishes from the dirty stacks to the clean stack.
- Iterates through each dirty stack and pops dishes from the end of the stack (representing washing the last dirty dish).

### 5. Simulation Execution
- **Function `runSimulation()`**:
- Manages the overall simulation process.
- Initializes the dirty and clean stacks.
- Uses `setInterval` to simulate the washing process at regular intervals (every 2 seconds).
- Calls `washDish` and `displayStacks` functions to move dishes and update the console display.
- Checks if all dirty stacks are empty and stops the simulation if all dishes are clean.







## files

* index.html
* main.js