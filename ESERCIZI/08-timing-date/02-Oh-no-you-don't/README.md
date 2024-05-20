## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-15
* Concat: gabriele.speciale@edu.itspiemonte.it




## Description

● Write a function “useful” that does something useful in Javascript
● Schedule it to run after 10 seconds
● Write another function that cancels the scheduling of the first function
● Use the second function to cancel the first one after 5 seconds and output 
 ‘function cancelled’ to the console





## Approach to Solution

To schedule a function to run after a delay and then cancel that scheduling, the following steps are taken:

1. **Creating the Useful Function**:
- A function named `useful` is defined, which prints a message ("hi! I'm useful!") to the console.

2. **Scheduling the Useful Function**:
- The `setTimeout` function is used to schedule the `useful` function to run after a delay of 10 seconds (10,000 milliseconds).
- The return value of `setTimeout` (a timer ID) is stored in a variable named `timerRun`.

3. **Creating the Stop Function**:
- A function named `stop` is defined, which cancels the scheduled execution of the `useful` function.
- Inside the `stop` function, `clearTimeout` is used with the `timerRun` ID to cancel the `useful` function.
- The `stop` function also prints a message ("function cancelled") to the console to indicate the cancellation.

4. **Scheduling the Stop Function**:
- The `setTimeout` function is used again to schedule the `stop` function to run after a delay of 5 seconds (5,000 milliseconds).
- This ensures that the `stop` function will cancel the `useful` function before it has a chance to execute.

This approach allows the `useful` function to be scheduled and then canceled before it executes, demonstrating the use of `setTimeout` and `clearTimeout` for managing delayed function execution.





## files

* index.html
* main.js