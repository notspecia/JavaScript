"use strict";
//! INFERRED TYPES + EXPLICIT TYPES -----------------------------------------------------------------
let str = "ciao";
str = "bella";
let age = "10";
age = 40;
let flag = false;
flag = true;
//! PROTECTION FROM TYPE ERRORS + RETURN VALUE -----------------------------------------------------------------
function printGreeting(message) {
    console.log(message);
    return message === "buonasera a tutti";
}
const isEvening = printGreeting("buongiorno a tutti");
console.log(isEvening);
//! SPECIAL TYPES (undefind & null) (any & unknow) -----------------------------------------------------------------
