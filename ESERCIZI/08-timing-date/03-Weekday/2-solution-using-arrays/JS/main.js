/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-17
 * @description 
 * ● Write a function getWeekDay(date) to show the weekday in short format: 
     ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
    ● Write another function that does the same in Italian
    ● Add a language parameter to the function that accepts ‘en’ or ‘it’ and 
      the day in the correct language
 */





/**
 * function getWeekDayEnglish
 * It is passed as a topic an Object date, inside it we go
 * to extract the day of the week through the .get method (0-6)
 * We use a switch-case to go to print the abbreviation on consoles of the day of the week (EN)
 * @param {objcet} date - date passed as a topic
 */
function getWeekDayEnglish(date) {

  console.log(DaysEn[date.getDay()]);

}




/**
 * function getWeekDayItalian
 * It is passed as a topic an Object date, inside it we go
 * to extract the day of the week through the .get method (0-6)
 * We use a switch-case to go to print the abbreviation on consoles of the day of the week (IT)
 * @param {objcet} date - date passed as a topic
 */
function getWeekDayItalian(date) {

  console.log(DaysIt[date.getDay()]);

}



/**
 * function getWeekDay
 * It is passed as a topic an Object date, inside it we go
 * to extract the day of the week through the .get method (0-6)
 * We use a if statement in which according to the language (EN / IT),
 * We use 2 switch-case to go to print the abbreviation on consoles of the day of the week (EN - IT)
 * @param {objcet} date - date passed as a topic
 * @param {string} lang - Translation in the desired language
 */
function getWeekDay(date, lang) {

  if (lang === "en") {
    console.log(DaysEn[date.getDay()]);

  } else if (lang === "it") {
    console.log(DaysIt[date.getDay()]);

  } else {
    console.log("language format not founded!!");
    
  }

}








/* The "date" variable will be updated with different dates and syntax to test
most cases*/

// global array used in functions
let DaysEn = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
let DaysIt = ["DO", "LU", "MA", "ME", "GI", "VE", "SA"];

// 1 recall function getWeekDayEnglish (EN)
let date = new Date();
getWeekDayEnglish(date);

// 2 recall function getWeekDayEnglish (EN)
date = new Date(2004, 9, 7, 8, 52, 27);
getWeekDayEnglish(date);

// 3 recall function getWeekDayEnglish (EN)
date = new Date(421939949999); // 01 JAN 1970 + milliseconds
getWeekDayEnglish(date);

// 4 recall function getWeekDayEnglish (EN)
date = new Date("2000 9 23 12:45:23");
getWeekDayEnglish(date);


console.log("\n------------------------\n\n");


// 1 recall function getWeekDayItalian (IT)
let date2 = new Date();
getWeekDayItalian(date2);

// 2 recall function getWeekDayItalian (IT)
date2 = new Date(2004, 9, 7, 8, 52, 27);
getWeekDayItalian(date2);


console.log("\n------------------------\n\n");



// 1 recall function getWeekDay (EN - IT)
let date3 = new Date();
getWeekDay(date3, "it");

// 2 recall function getWeekDay (EN - IT)
date3 = new Date(2004, 9, 7, 8, 52, 27);
getWeekDay(date3, "en");

// 3 recall function getWeekDay (EN - IT)
date3 = new Date("2000 9 23 12:45:23");
getWeekDay(date3, "jp");