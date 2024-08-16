/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-15
 * @description 
 * ● Write a function “useful” that does something useful in Javascript
   ● Schedule it to run after 10 seconds
   ● Write another function that cancels the scheduling of the first function
   ● Use the second function to cancel the first one after 5 seconds and output 
    ‘function cancelled’ to the console
 */


/**
 * function useful
 * function that performs the function (should), after 10 seconds
 * will print a message on console
 */
function useful() {
    console.log("hi! im useful!")
}

/**
 * function stop
 * function created with the aim that after 5 seconds it will stop the action 
 * of the previous function (10 seconds), 
 * will also print a message that announces its elimination
 */
function stop() {
    clearTimeout(timerRun);
    console.log("function cancelled")
}



// function "useful" will executed after 10 seconds
let timerRun = setTimeout(useful, 10000);

/* function "stop" will executed after 5 seconds, 
and will stop the execution of the useful function*/
setTimeout(stop, 5000);

