/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-18
 * @description 
 * Write a function formatDate(date) that accepts a date and outputs it as follows:
  ● If less than a second has passed since the date, output "right now"
  ● If less than a minute has passed since the date, output "n sec. ago"
  ● If less than an hour has passed since the date, output "m min. ago"
  ● Otherwise, output the date in this format "DD.MM.YY HH:mm"
   ○ e.g. 17.04.16 10:00
 */




/**
 * function formatDate
 * It receives as a topic a date set by the user, from that date we will go to
 * extract all data relating to it (year, month, day ...) that we will use
 * To print the date in the format required by delivery.
 * Theb difference of milliseconds between the past date and the current one, is used
 * To print certain messages requested in consoles according to the specifications
 * 
 * @param {object} date - contains the date passed as a topic
 */
function formatDate(date) {

  // We attribute the current date to a variable (always updates)
  let currentDate = new Date();

  // We extract the information for print the date required format
  const year = date.getFullYear(); // used only for the format of the required date
  const month = date.getMonth(); // used only for the format of the required date
  const day = date.getDate(); // used only for the format of the required date
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // calculations for the difference in time
  // through Math.floor(), Let's go to round off the seconds / minutes
  const dateDiff = currentDate - date; // We breathe the milliseconds of difference between the dates

  const secDiff = Math.floor(dateDiff / 1000); // value that will always change, indicates the seconds of difference
  const minDiff = Math.floor(dateDiff / 60000); // value that will always change, indicates the minutes of difference
  const hourDiff = Math.floor(dateDiff / 3600000); // value that will always change, indicates the hourss of difference

  /*Second/minutes printing on the basis of the difference in time
  + date update every second */
  if (secDiff < 1) {
    console.log(`right now`);

  } else if (secDiff < 60) {
    console.log(`${secDiff} sec. ago`);

  } else if (minDiff < 60) {
    console.log(`${minDiff} min. ago`);

  } else if (hourDiff < 24) {
    console.log(`${hourDiff} hour. ago`);

  } else {
    console.log("day ended!");
    clearInterval(timerId);

  }

  // print on console the data format required
  console.log(`DATE PASSED --> ${day}.${month + 1}.${year} ${hours}:${minutes}:${seconds}
DATE CURRENT --> ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}\n\n\n`);

}





// variable that will contain the current or desired date
const date = new Date("2024 6 1 23:15:30");

// recall function formatDate
let timerId = setInterval(formatDate, 1 + 1000, date);