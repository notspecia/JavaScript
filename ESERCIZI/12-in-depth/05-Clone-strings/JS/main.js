/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-08-20
 * @description 
 * Write a function cloneStrings() that only clones string properties of an object
   Starting with the example object of the previous exercise this should be the result:

{ 
 name: 'Green Mueller',
 email: 'Rigoberto_Muller47@yahoo.com',
 address: '575 Aiden Forks',
 bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
 bankInformation: 
{ 
  amount: '802.04',
  business: 'Bernhard, Kuhn and Stehr',
  name: 'Investment Account 8624',
  type: 'payment',
  account: '34889694' 
 }
}
 * 
 */



/**
 * function cloneStrings
 * 
 * clones only the string properties of the given object.
 *!if the object contains nested objects, the function will clone the string properties inside those objects as well!!
 * 
 * @param {object} originalObject - The object to be cloned (can be the original or an nested object (value))
 * @returns {object} - a new object created whit only the string properties
 */
function cloneStrings(originalObject) {

    let cloneObject = {}

    // !loop through each key-value pair in the original object / nested object (value of previous)
    for (let [key, value] of Object.entries(originalObject)) {
        console.log(typeof(value));

        // if the value is an object (but not a Date), call cloneStrings recursively
        if (typeof value === "object" && !(value instanceof Date)) {
            cloneObject[key] = cloneStrings(value); // *recursive function!
        }

        // if the value is a string, copy it to the cloned object
        else if (typeof value === "string") {
            cloneObject[key] = value;
        }
    }

    return cloneObject;
}

// -------------------------------------------------------------------------------------


// original object 
const originalObject = {
    name: 'Green Mueller',
    email: 'Rigoberto_Muller47@yahoo.com',
    address: '575 Aiden Forks',
    bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
    active: false,
    salary: 37993,
    birth: new Date("Sun Apr 18 1965 13:38:00 GMT +0200(W.Europe Daylight Time)"),
    bankInformation: {
        amount: '802.04',
        date: new Date("Thu Feb 02 2012 00:00:00 GMT +0100(W.Europe Standard Time)"),
        business: 'Bernhard, Kuhn and Stehr',
        name: 'Investment Account 8624',
        type: 'payment',
        account: '34889694'
    }
}

// clone object which will contain only strings
const cloneObjectStrings = cloneStrings(originalObject);

// log the original and cloned objects to see the difference
console.log(originalObject);
console.log(cloneObjectStrings);     