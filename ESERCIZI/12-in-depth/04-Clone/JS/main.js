/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-08-20
 * @description 
 * 
 * This script contains a function `clone()` that clones any given object.
 * The function is tested on a sample object provided below. The name of the cloned
 * object is changed to ensure that the original object remains unaffected.
 * 
 * Important:
 * The function is implemented without using built-in methods like Object.assign(),
 * jQuery.extend(), or JSON.parse(JSON.stringify()) to clone objects.
 */

/* ! REMEMBER ! --> Assigning an object to a new JavaScript variable DOES NOT create a copy of the object, 
but simply a new reference to the same object! */


/**
 * function debuggingLog
 * logs the key and value for debugging purposes
 * @param {string} key - the key of the object property
 * @param {*} value - the value of the object property
 */
function debuggingLog(key, value) {
  console.log(`key--> ${key}, ${typeof (key)}`);
  console.log(`value--> ${value}, ${typeof (value)}`);
  console.log(`\n\n`);
}


/**
 * function clone
 * creates a deep clone of the original object
 * @param {object} originalObject - The object to be cloned
 * @returns {object} - the cloned object.
 */
function clone(originalObject) {

  // create the cloned object (initially empty)
  let cloneObject = {}

  // the 'name' property will be the ONLY key different from the original object
  cloneObject.name = "Speciale Gabriele";


  // !copy all other properties from the original object (except the 'name')
  for (let [key, value] of Object.entries(originalObject)) {

    if (key !== "name") {

      // debugging function to log the key and value
      debuggingLog(key, value);

      // add the key-value pair from the original to the cloned object
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
  bankInformation:
  {
    amount: '802.04',
    date: new Date("Thu Feb 02 2012 00:00:00 GMT +0100(W.Europe Standard Time)"),
    business: 'Bernhard, Kuhn and Stehr',
    name: 'Investment Account 8624',
    type: 'payment',
    account: '34889694'
  }
}

// clone object
const cloneObject = clone(originalObject);



// log the original and cloned objects
console.log(originalObject);
console.log(cloneObject);

// log the 'name' properties of both the original and cloned objects
console.log(originalObject.name);
console.log(cloneObject.name);
