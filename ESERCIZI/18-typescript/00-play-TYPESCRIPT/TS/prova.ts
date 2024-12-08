//! INFERRED TYPES + EXPLICIT TYPES -----------------------------------------------------------------
let str = "ciao";
str = "bella";

let age: number | string = "10";
age = 40;
let flag: boolean = false;
flag = true;



//! PROTECTION FROM TYPE ERRORS + RETURN VALUE -----------------------------------------------------------------
function printGreeting(message: string): boolean {
    console.log(message);
    return message === "buonasera a tutti";
}

const isEvening = printGreeting("buongiorno a tutti");
console.log(isEvening);



//! SPECIAL TYPES (undefind & null) (any & unknow) -----------------------------------------------------------------





let myTuple: [boolean, number, string];

// initialize
myTuple = [true, 18, 'working'];

myTuple.push("ciao");