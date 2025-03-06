
const text = document.querySelector("p");
const inputName = document.querySelector("input#inputName");
const inputAge = document.querySelector("input#inputAge")


// parametro di default se non venisse passato alla funzione!!
function addInfo(name = "Missigno", age = null) {
    text.textContent = `hello! ${name} and u're ${age}`;
}

document.querySelector("button").addEventListener("click", () => {
    addInfo(inputName.value, inputAge.value);
});



// --------------------------------------------------------
/* Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" 
*/

// function reverseWords(str) {
//     // inizializziamo la parola singola che verrà composta dalle lettere nel ciclo
//     let word = "";
//     // inizializziamo l'array che conterrà tutte le parole ribaltate!
//     let finalPhrase = [];
    
//     for (let i = 0; i < str.length; i++) {

//     // prendiamo la lettera attuale e memorizziamola
//     const letter = str.charAt(i);

//     if(letter.trim()){
//         word += letter;
//     } else {
//         if (word) {
//             finalPhrase.push(word.split("").reverse().join("")); // aggiungiamo la parola quando si trova uno spazio di separazione invertendo le lettere di essa
//             word = "";
//         }
//         finalPhrase.push(letter); // aggiunge gli spazi esattamente come sono
//       }
//     }
    
//      // aggiunge l'ultima parola se presente (siamo usciti dal for quindi non applicherà la parola!)
//      if (word) {
//         finalPhrase.push(word.split("").reverse().join(""));
//     }

//     return finalPhrase.join("");
//   }
  
//   console.log(reverseWords("double fdfs d  spaces"));


// ---------------------------------------------------------------------
/*
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/
// function paperwork(n, m) {
//     return n < 0 || m < 0 ? 0 : n * m;
// }

// console.log(paperwork(0, 35));



// ---------------------------------------------------------------------
/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/
// function printerError(str) {
//     // stinga con rate "nuemeroErrori / lettereTotali", le lettere sono numeri in realta con un index number, quindi usiamo gli operatori > / <
//     // se la lettera è sotto il range di < "a" || sopra il range > "m" allora aggiunto elemento errato all'array di ritorno filtrato
//     return `${str.split("").filter((letter) => letter < "a" || letter > "m").length}/${str.length}`;
// }

// console.log(printerError("aaabbbbmhaijjjm"));



// ---------------------------------------------------------------------
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// function isIsogram(str){
//     const strLower = str.toLowerCase();

//     // facciamo il chek per ogni lettera confrontandola ognunga con le prossime ad essa (doppio ciclo for)
//     for (let i = 0; i < strLower.length; i++) {
//         for (let j = i + 1; j < strLower.length; j++) {
//             if (strLower.charAt(i) === strLower.charAt(j)) {
//                 return false; // return false se troviamo la lettera duplicata!
//             }
//         }
//     }
//     return true;
// }

// console.log(isIsogram("acrt"));



// ---------------------------------------------------------------------
/*
*/
// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === "needle") {
//             return `found the needle at position ${i}`;
//         } 
//     }
//     return "needle not founded!";
// }
   
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));


// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf("needle")}`;
// }



// ---------------------------------------------------------------------
/*
Write a function which calculates the average of the numbers in a given array.
Note: Empty arrays should return 0.
*/  
function findAverage(array) {
    return array.length > 0 ? array.reduce((total, n)=> total + n, 0) / array.length : 0;
}
  
console.log(findAverage([1,2,3,4]));



// ---------------------------------------------------------------------
/*
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/  
const reverseSeq = (n) => {
    const numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);        
    }
    return numbers.reverse();
};

console.log(reverseSeq(5));



// ---------------------------------------------------------------------
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/  

// prendiamo le ultime lettere (sottrazione lunghezza stringa e lettere ending) e se sono === alle lettere dell'ending? true : false
function solution(str, ending){
    return str.slice(str.length - ending.length) === ending ? true : false; 
}

console.log(solution("abrattocd", "cd"));
console.log(solution("dado", "ra"));