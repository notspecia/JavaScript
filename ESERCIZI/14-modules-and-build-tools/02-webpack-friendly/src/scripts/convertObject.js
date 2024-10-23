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
* function cloneStrings
* 
* clones only the string properties of the given object.
**if the object contains nested objects, the function will clone the string properties inside those objects as well!!
* 
* @param {object} originalObject - The object to be cloned (can be the original or an nested object (value))
* @returns {object} - a new object created whit only the string properties
*/
export function cloneStrings(originalObject) {

    let cloneObject = {}

    // !loop through each key-value pair in the original object / nested object (value of previous)
    for (let [key, value] of Object.entries(originalObject)) {

        // if the value is an object (but not a Date), call cloneStrings recursively
        if (typeof value === "object" && !(value instanceof Date)) {
            cloneObject[key] = cloneStrings(value); //* recursive function!

        } else if (typeof value === "string") {
            // add the key-value (only strings) pair from the original, to the cloned object
            cloneObject[key] = value;

            // debugging function to log the key and value
            debuggingLog(key, value);
        }
    }

    return cloneObject;
}
