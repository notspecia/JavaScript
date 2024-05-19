/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-14
 * @description 
 * ● Use the previous function to write another function called group that checks whether a string is 
     part of another longer string that is a list of names of a group
     The function should output the results to the console

     let group = "Mary, James, and John";

     let oldGuy = "James";
     // Outputs: "James IS part of the group"

    let newGuy = "Philip";
    // Outputs: "Philip is NOT part of the group"
 */






/**
 * function group
 * He takes 2 strings as a topic, one containing group of friends, the other the name of a person
 * We go to transform the first character of the capital string by default (thus avoiding various problems)
 * If the person is found in the  group "True print", if the person is not found in the group "False print" 
 * @param {string} str - string containing a group of friends
 * @param {TipoInput2} str2 - string containing a name of a person
 */
function group(str, str2) {

    /* Change of the 2 string (person)
    we put the first capital character of default (useful for accepting the lowercase) */
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1);

    // -1 when the str2 is not found in str (if it is different from -1, is true)
    if (str.indexOf(str2) !== -1) {
        console.log(str2.concat(" IS part of the group"));

    } else {
        console.log(str2.concat(" IS NOT part of the group"));

    }

}





// Variable Declaration
let parola;  // contains the group of friends
let parola2; // contains a person's name



// 1 recall function group, We pass 2 strings to the function
parola = "Mary, James, and John";
parola2 = "mary";
group(parola, parola2);

// 2 recall function group, We pass 2 strings to the function
parola = "Mary, James, and John";
parola2 = "Harry";
group(parola, parola2);

// 3 recall function group, We pass 2 strings to the function
parola = "Mary, James, and John";
parola2 = "james";
group(parola, parola2);