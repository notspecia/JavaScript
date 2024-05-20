/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-18
 * @description 
 * ● Pretend that setInterval() doesn't exist
   ● Re-create it using setTimeout naming your function mySetInterval
   ● Test your new function
   ● Modify your function so that it automatically stops after 15 intervals
 */


/**
 * function mySetInterval
 * function that receives the Index of how many times it has been
 * performed the function between a delay of 2 seconds
 * @param {number} i - index number
 */
function mySetInterval(i) {
  console.log("hello! im the", i + 1, "interval");
}



/* cycle that performs 15 times the setTimeout function "mySetInterval" */
for (let i = 0; i < 15; i++) {
  setTimeout(mySetInterval, (i + 1) * 2000, i);
}