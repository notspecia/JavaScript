/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-11
 * @description 
 * ● Create a function called Money
   ● It should take a single argument, an amount, and return '<amount> dollars'
   ● Add a smiley at the end if the amount is 1 million. Deal with edge cases
    For example
    Money(1): 1 dollar
    Money(10): 10 dollars
    Money(1000000): 1000000 dollars ;)

    Bonus
    add to the function the ability to convert dollars to euros
    Money(10): 10 dollars are 9.31 euros
 */




/**
 * Money function
 * function that receives a sum of money as a topic, converts dollars into euros, and will return a value
 * string, containing a message on how much money you own in the correct form (both dollars and euros)
 * @param {number} amount - sum of money passed as a topic
 * @returns {string} - Message (string) correctly formed with dollars and euros
 */
function money(amount) {

    // Variable Declaration
    let messageMoney; // Message varies according to the amount of money received
    let euro;         // contains the sum of money in euros

    // dollar conversion calculation in euros
    euro = (amount * 0.9330).toFixed(2); // We do not go beyond the 2 digits after,

    // messageMoney will have a different value according to the pre established conditions
    if (amount === 1000000) {
        return messageMoney = amount + " " + "dollars" + " ,in euros are " + euro + "€  ;)";

    } else if (amount > 1 || amount < -1) {
        return messageMoney = amount + " " + "dollars" + " ,in euros are " + euro + "€";

    } else {
        return messageMoney = amount + " " + "dollar" + " ,in euro are " + euro + "€";

    }
}




// Variable Declaration
let soldi;     // amount of money
let soldiText; // string containing a message in the correct form (based on the amount of money)

/* 1 Recall Money function we pass a sum of money, we are always returned the sum
 both in dollars and Euro formalized correctly according to the specifications */
soldi = 10;
soldiText = money(soldi);
console.log(soldiText);

// 2 Recall Money Function ...
soldi = -1;
soldiText = money(soldi);
console.log(soldiText);

// 3 Recall Money function ...
soldi = 1000000;
soldiText = money(soldi);
console.log(soldiText);
