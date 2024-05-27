/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-18
 * @description 
 * ● Create a function getDateAgo(date, days) that returns the day of the month 
     n days ago from the given date
   ● For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be 
     19th and getDateAgo(new Date(), 2) should be 18th
   ● Test the function to make sure it works reliably with any valid Date object
   ● Decide what to do with a negative 'days' parameter
    ○ e.g. getDateAgo(new Date(), -2)
 */




/**
 * function getDateAgo
 * it receives the current date as a topic, and will only return the
 * day of the past date, but it will be followed by going to remove the number of days
 * passed as a topic
 * @param {object} date - current date
 * @param {number} days - number of days to climb to the past date
 * @returns {number} - Scaled day with the number of days to be removed
 */
function getDateAgo(date, days) {

  /* Let's change the day going to remove the past "days" as topics:
  returns the day setted by doing -> day of the month - days*/
  if (days > 0) {
    date.setDate(date.getDate() - days)
    return date.getDate();

  } else {
    date.setDate(date.getDate() + days);
    return date.getDate();

  }

}





// variable whit current time
const date = new Date();

/* recall function getDateAgo, passing the current date and 
The number of days to climb back on the date */
let newDate = getDateAgo(date, -11);
console.log(`the day of the month, now is: ${newDate}`);