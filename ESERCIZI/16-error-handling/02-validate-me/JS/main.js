/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-11-21
 * @description 
 * 
Write a function validatePassword() that returns true if a password meets the following requirements:
    ● Must be at least 8 characters long
    ● Must contain at least one uppercase letter, one lowercase letter, one digit and one symbol

If the password is invalid, the function should throw a custom error object with the message "Invalid 
password format" and the reason the password is not valid
This code tests the function. Add more cases to it
*/



/**
 * function validatePassword
 * validates if a password meets security requirements, if there are issue, the problem whill be pushed into an array which will
 * insert into the ERROR OBJECT "throwed"
 * @param {string} password - the password to validate.
 * @returns {boolean} - returns true if the password is valid.
 * @throws {object} - throws an error object with a message and details of the errors, if invalid.
 */
function validatePassword(password) {

    const reasons = [];

    // check password length
    if (password.length < 8) {
        reasons.push("Password must be at least 8 characters long!");
    }

    // check for a least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        reasons.push("Password must contain at least one uppercase letter!");
    }

    // check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        reasons.push("Password must contain at least one lowercase letter!");
    }

    // check for at least one digit
    if (!/\d/.test(password)) {
        reasons.push("Password must contain at least one digit!");
    }

    // check for at least one symbol
    if (!/[@.#$!%*?&]/.test(password)) {
        reasons.push("Password must contain at least one symbol (@.#$!%*?&)!");
    }


    // if there is at least 1 problem on the password, throw a new object error whitch will be 
    if (reasons.length > 0) {
        throw {
            message: "Invalide format password!",
            errors: reasons
        }

    }

    // if the password is correct, return a true value
    return true;
}



// array of random password used fot testing the validator function
const passwords = [
    "A1b!",
    "abcdefgh",
    "AllGood!1",
    "Abcdefgh",
    "12345678",
    "Abcdef1!",
    "ABCDEFGH",
    "Abcdef1",
    "Abc1!ghi",
    "!@dAa1",
    "P@ssw0rd",
    "NoSymbol1",
    "aB1@cD3!",
    "UPPERCASE1@",
    "n0SymbolHere",
    "TooSh0rt!"];



passwords.forEach((password) => {

    console.log(password);


    // se viene ritornato true, si entra in questo blocco try { } facendo il console .og()
    try {
        console.log(`${validatePassword(password)} Valid password!`);
        // se viene ritornato il "throw" con l'oggetto di errore, entra nel blocco catch { }
    } catch (error) {
        console.error(`${error.message} ${error.errors.join(", ")}`);
    }

});