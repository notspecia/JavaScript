/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-10-20
 * @description 
   ● Use promises to implement a delay function that can be used like in the code below:
   delay(300).then(myFunction);
   
   ● Your implementation should work for any type of Javascript function such as
    ○ regular functions
    ○ arrow functions
    ○ anonymous functions
 * 
 */


/**
 * function delay
 * 01. returns a promise that resolves after a specified number of milliseconds.
 * uses setTimeout to create a delay in the execution of a function.
 * 
 * 02. after the specified time has passed, the promise resolves, allowing the
 * function passed to the `then()` method to be executed.
 * 
 * @param {number} ms - the number of milliseconds to delay execution.
 * @returns {Promise<void>} - a promise that resolves after the delay.
 */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


// you can also use it with `arrow functions or anonymous functions
delay(500).then(() => {
  console.log("Executed after 500ms delay");
});