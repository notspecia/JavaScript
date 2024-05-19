/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-11
 * @description 
 * ● Create a function called mixUp
   ● It should take in two strings, and return the concatenation of the two strings (separated by a 
     space) slicing out and swapping the first 2 characters of each
   ● You can assume that the strings are at least 2 characters long
    For example
    mixUp('mix', 'pod'): 'pox mid'
    mixUp('dog', 'dinner'): 'dig donner'
 */




/**
 * mixUp function
 * Function that takes 2 string values as the topic, let's create inside
 * local variables (strMod, Str2Mod), which will be modified on the basis of what is requested, 
 * subsequently concatenate and creating a unique string separated from a space
 * @param {string} str - first word passed as a topic
 * @param {string} str2 - second word passed as a topic
 * @returns {string} - return the concatenation of the 2 strings
 */
function mixUp(str, str2) {

  // Variable Declaration
  let strMod;
  let str2Mod;


  /* transformation and initialization of the 2 strings modified according to the year of the year
  We add to the 2 second character of the first string, the 2 character of the second string
  for the second reverse process string (IF THE SRINGS ARE AT LEST 2 CHARACTERS LONG!)*/
  if (str.length >= 2 && str2.length >= 2) {
    strMod = str.slice(0, 1) + str2.charAt(1) + str.slice(2);
    str2Mod = str2.slice(0, 1) + str.charAt(1) + str2.slice(2);

    // concatenation of the 2 strings modified by method .concat ()
    return strMod.concat(' ', str2Mod);
  }


  // concatenation of the 2 original strings
  return str.concat(' ', str2);

}





// Variable Declaration
let str;
let str2;
let insieme; // union of the 2 new strings modified in the function



/* 1 mixUp function recall, we pass 2 strings as the topic and will be returned to us
a single concatenate string containing the 2 strings modified or not, inside the function*/
str = "rinoceronte";
str2 = "cane";
insieme = mixUp(str, str2);
console.log(insieme);

// 2 mixUp function recall ...
str = "s";
str2 = "di";
insieme = mixUp(str, str2);
console.log(insieme);

// 3 mixUp function recall ...
str = "gatto";
str2 = "delfino";
insieme = mixUp(str, str2);
console.log(insieme);