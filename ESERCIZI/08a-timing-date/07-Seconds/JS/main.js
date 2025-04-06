/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-18
 * @description 
 *  Write two functions that based on the current date and time output the number 
    of seconds:

  ● getSecondsToday() returns the number of seconds from the beginning of today
  ● getSecondsToTomorrow() returns the number of seconds till tomorrow
 */



/**
 * function getSecondsToday
 * function that receives the current time as a topic, will calculate
 * remain the total seconds starting from the beginning of the day until our current time
 * @param {object} date - data current updated in real time
 * @returns {number} - number of total seconds since the day started
 */
function getSecondsToday(date) {

    // variable that will have as value today's total seconds starting from 00:00:00
    let totalSeconds = 0;

    // We extract from the current time --> hour:minutes:seconds
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // We calculate today's total seconds, by converting all the time in seconds
    totalSeconds = (hour * 3600) + (minutes * 60) + seconds;

    return totalSeconds;
}



/**
 * function getSecondsToTomorrow
 * function that receives the current time as a topic, will calculate
 * The total seconds that are missing to move on to the next day (Tomorrow)
 * @param {object} date - data current updated in real time
 * @returns {number} - number of total seconds that are missing to get to tomorrow
 */
function getSecondsToTomorrow(date) {

    // variable that will have as value The second remained to get to tomorrow
    let totalSeconds = 0;

    /* We extract from the current time --> hour:minutes:seconds
    and we go to differentiate them with the maximum time of the day --> 23:59:59 */
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // We calculate the total seconds left for tomorrow
    totalSeconds = 86400 - ((hour * 3600) + (minutes * 60) + seconds);

    return totalSeconds;
}





// current time
const date = new Date();

// recall function getSecondsToday, passing the current time as a topic
const secondsOfToday = getSecondsToday(date);
console.log(secondsOfToday);

// recall funzione getSecondsToTomorrow, passing the current timetable as a topic
const secondsForTomorrow = getSecondsToTomorrow(date);
console.log(secondsForTomorrow);