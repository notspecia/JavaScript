/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-04-19
 * @description 
 * 
 * ● Create two arrays: 
    ○ one for the letters of the word (e.g. 'C', 'A', 'T')
    ○ Another for the current guessed letters (start with '_', '_', '_' and add the correct letters to it).

   ● Write a function called guessLetter that should:
    ○ Take one argument, a letter.
    ○ Have a maximum number of guesses (e.g. 6)
    ○ Check if the letter is in the word array.
    ○ If the letter matches, add it in the correct position of the guessed array.
    ○ Show the user the current guessed letters.
    ○ Tell the user if they guessed a correct letter.
    ○ Tell the user how many guesses remain.
    ○ Tell the user if they won or lost the game.

    Call your function to make guesses:
    guessLetter('G');
    guessLetter('I');
    guessLetter('O');
    guessLetter('A');
    guessLetter('T');

    ● Bonus
   ○ Add a random reward for correct guesses and subtract a random amount for failed 
     guesses. x
   ○ Show the user the total reward (positive or negative). x
   ○ Draw a hangman image to the console log after each guess.
   ○ Add a function that generates the letters to guess randomly. x
   ○ Add a function that chooses the initial word to guess from an array of words. x
 */



console.log(`                                                         
+----------------------------------------------------+       _____ 
|           WELCOME TO THE HANGMAN GAME              |       |    |     
+----------------------------------------------------+       |         
                                                             |
                                                             |
+----------------------------------------------------+       |
|         YOU HAVE 6 TRYS TO GUESS THE WORD          |       |
+----------------------------------------------------+     __|__
`)


/**
 * function randomWord
 * function that receives an array containing some words (strings) as the topic
 * We go to select Randomically one of the words contained in it Tramitr --> Math.random
 * then we go to return the string transformed into an array with the letters that make it up
 * 
 * EX: string --> TIGER      array ritornato --> ["T", "I", "G", "E", "R"]
 * 
 * @param {object} listWords - Array containing words (strings)
 * @returns {object} - Word chosen randomly in the form of array --> ["D", "O", "G"]
 */
function randomWord(listWords) {

   // variable declaration
   let choicedWord;

   /* Let's choose a random array index to select a word casually
   type choicedWord --> string */
   choicedWord = listWords[Math.floor(Math.random() * words.length)];

   /* Let's go to transform the string of the random word into array and return it
   type choicedWord --> array (object) */
   return choicedWord.split("");

}





/**
 * function generateUnderscore
 * will generate a number = of underScore, compared to how many letters the word is composed
 * these underScore, they later replaced with the letters guess by the user
 * @param {object} lettersOfWord - array containing letters of the word to guess
 * @returns {object} - an array of underscores --> ["_", "_", "_" ...]
 */
function generateUnderscore(lettersOfWord) {

   // variable declaration
   let arrayUnderscore = [];

   /* cycle that adds to the variable `arrayUnderscore` (array)
   gradually "_" thanks to .push("_") method, based on the length of the array containing The word to guess 
   t*/
   for (let i = 0; i < lettersOfWord.length; i++) {

      arrayUnderscore.push("_");

   }

   return arrayUnderscore;

}







/**
 * funzione randomLetter
 * function that returns a random letter of the alphabet through --> Math.random()
 * @returns {string} - a random letter
 */
function randomLetter() {

   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

   return characters.charAt(Math.floor(Math.random() * characters.length));
}







/**
 * Guessletter function
 * function that receives an random letter from `function randomLetter` (string) as a topic, 
 * and through certain checks, a message (string) will be returned, which:
 *  - if the user has guessed the letter and in case it will be positioned In its x position (in the array), 
 *  - the number of attempts remained, if the user has lost why has finished attempts,
 *  - If the user won why, he guessed all the letters.
 * 
 * also in the console you can observe the design of the homino hanging as that proceeds in the game
 * @param {string} letter - lettera randomica passata from `function randomLetter`
 * @returns {string} - message that is composed gradually in the function
 */
function guessLetter(letter, letters, guessedLetters) {

   // Variable Declaration
   let message; // message that will be used to update the game situation
   let findLetter = false;



   // If you still have attempts
   if (trys > 0) {

      /* if you have not yet won, we go to compare the random letter passed as a topic, 
      with the array containing the correct letters of the string */
      if (victory != true) {

         for (let i = 0; i < letters.length; i++) {

            if (letter === letters[i]) {
               guessedLetters[i] = letter; // We modify the array that contains the "_"
               findLetter = true;
            }

         }

         // If the letter is not correct, he lowers -1 try
         if (findLetter != true) {
            trys--;
         }

      }

      /* If the word was guessed, you won, comparison whit .join()
      combines temporany the 2 arrays in the form of a string */
      if (guessedLetters.join("") === letters.join("")) {
         victory = true;
         message = `Congratulations you won!
The word is: ${letters.join(" ")}`;

         // If the player has finished attempts
      } else if (trys === 0) {
         message = "You have finished the attempts, you lost!";



         /* update of the game with the guessed letters and how many attempts remain to you
         if you have not yet WON / LOST */
      } else {
         message = `Letters currently guessed: ${guessedLetters.join(" ")}
you remain in total: ${trys} trys
`;

         // If the letter passed as a topic is correct
         if (findLetter == true) {
            message += "The letter you have inserted: " + letter + " it's CORRECT";

         } else {
            message += "The letter you have inserted: " + letter + " it's WRONG";
         }

      }

      // If attempts have ended, game over
   } else {
      message = `You have finished attempts, you lost!
The word is: ${letters.join(" ")}`;
   }


   // Drawing of the hanged homino
   switch (true) {

      case trys === 6:
         console.log(`
 _____      
 |    |
 |    
 |
 |
 |
_|_`)
         break;

      case trys === 5:
         console.log(`
 _____      
 |    |
 |    0
 |
 |
 |
_|_`)
         break;

      case trys === 4:
         console.log(`
 _____      
 |    |
 |    0
 |    |
 |
 |
_|_`)
         break;

      case trys === 3:
         console.log(`
 _____      
 |    |
 |    0
 |    |\\
 |
 |  
 |
_|_`)
         break;

      case trys === 2:
         console.log(`
 _____      
 |    |
 |    0
 |   /|\\
 | 
 |
_|_`)
         break;

      case trys === 1:
         console.log(`
 _____      
 |    |
 |    0
 |   /|\\
 |   /
 |
 |
_|_`)
         break;

      default:
         console.log(`
 _____      
 |    |
 |    0 
 |   /|\\  
 |   / \\   
 |    
_|_`)

   }

   return message;
}

// -----------------------------------------------------------------------------------------------------------

// Variable Declaration and Initialisation

const words = ["TIGER", "ELEPHANT", "BANANA", "MOUNTAIN", "RAINBOW", "HELLO"]; //  array which contains words

let letters;          // will be an array which contains the letters of the word
let guessedLetters;   // will be updateded with the guessed letters
let trys = 6;
let victory = false; // Boolean value that will change in "true" if the player wins
let message;          // Let's pass our letters to the function as a topic

// -----------------------------------------------------------------------------------------------------------


// Let's create an array containing the letters of the word to guess
letters = randomWord(words);


/* Let's create an array that will update later
Going to replace the "_" with the guessed letter */
guessedLetters = generateUnderscore(letters);



/* Let's try to guess the word created randomly! (! max 6 trys !)

TOPICS PASSED --> function that recive the random letter     array containing the letters of the word     array containing the guessed letters
OUTPUT ON CONSOLE --> Message received from the function `guessLetter` which updates the situation of the match */

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);

message = guessLetter(randomLetter(), letters, guessedLetters);
console.log(message);