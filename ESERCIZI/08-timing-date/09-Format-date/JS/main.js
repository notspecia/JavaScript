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

  // attribuiamo ad una varibile la data attuale (si aggiornerà sempre)
  let currentDate = new Date();


  // We extract the information for print the date required format
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // calculations for the difference in time
  // through Math.floor(), Let's go to round off the seconds / minutes
  let dateDiff = currentDate - date; // We breathe the milliseconds of difference between the dates
  let secDiff = Math.floor(dateDiff / 1000); // value that will always change, indicates the seconds of difference
  let minDiff = Math.floor(dateDiff / 60000); // value that will always change, indicates the minutes of difference


  /*Second/minutes printing on the basis of the difference in time
  + date update every second */
  if (secDiff < 1) {
    console.log(`right now`);

  } else if (secDiff < 60) {
    console.log(`${secDiff} sec. ago`);

  } else if (minDiff < 60) {
    console.log(`${minDiff} min. ago`);

  } else {
    console.log("okay");
  }

  // print on console the data format required
  console.log(`DATE PASSED --> ${day}.${month}.${year} ${hours}:${minutes}:${seconds}
DATE CURRENT --> ${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}\n\n\n`);

}





// variable that will contain the desired date
let date = new Date();

// recall function formatDate
setInterval(formatDate, 1 + 1000, date);