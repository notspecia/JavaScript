/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-18
 * @description 
 * ● Implement a javascript clock that prints the current time to the console 
     every second
   ● The output should be in the format HH:mm:ss e.g. 17:03:06
 */



/*Every second, the current time trough console will be printed through console
The setInterval*/
let timerId = setInterval(function formatTime() {

    // updated date in real time
    const date = new Date();

    // let's go to extract from "date" --> hour:minutes:seconds 
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    // console print in the required format
    console.log(`
  +--------------------------+
  |    now is: ${hour}:${minutes}:${seconds}      |
  +--------------------------+
    `);

}, 1000);