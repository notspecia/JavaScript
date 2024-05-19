/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-27
 * @description 
 * Calculate a puppy’s age in dog years
● Write a function named calculateDogAge that:
○ takes 1 argument: the dog's age in human years
○ calculates the dog's age based on the conversion rate of 1 human year to 7 dog years
○ outputs the result to the screen like so: "Your dog is NN years old in dog years!"
● Call the function three times with different sets of values
 */


/**
 * calculateDogAge
 * funzione che converte e stampa il numero di anni umani passati nella funzione, in anni x cane
 * @param {number}  humanAge - anni dell'umano
 * @param {number} yearDog - numero fisso di quanto vale 1 anno umano in anni cane (7)
 */
function calculateDogAge(humanAge, yearDog) {
    let dogAge = humanAge * yearDog;
    console.log("your dog is", dogAge, "years old in DOG years")
}


// costante di quanto vale 1 anno umano in anni cane
const yearDog = 7;

// 1 richiamo della funzione calculateDogAge con argomento età umana in anni di cane
calculateDogAge(10, yearDog);

// 2 richiamo della funzione calculateDogAge con argomento età umana in anni di cane
calculateDogAge(14, yearDog);

// 3 richiamo della funzione calculateDogAge con argomento età umana in anni di cane
calculateDogAge(6, yearDog);