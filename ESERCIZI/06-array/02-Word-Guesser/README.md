## Author Details

* Name: Gabriele Speciale
* Date: 2024-04-19
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Create two arrays: 
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





## Approach to the Solution

1. **Game Initialization:**
- Create two arrays: one for the letters of the word to guess and another for the guessed letters.
- Initialize the guessed letters array with underscores representing the unguessed letters.
- Define a variable for the maximum number of attempts and a boolean to track victory.

2. **Random Word Selection:**
- Create a function `randomWord(listWords)` that takes an array of words as a parameter.
- Within this function, randomly select a word from the array using `Math.random()` and return it as an array of       
  individual letters.

3. **Underscores Generation:**
- Create a function `generateUnderscore(lettersOfWord)` that takes an array of letters representing the word as a 
  parameter.
- Use a loop to generate an array of underscores of the same length as the word.

4. **Random Letter Selection:**
- Implement a function `randomLetter()` that returns a random letter from the alphabet.

5. **Guessing Letters:**
- Define a function `guessLetter(letter, letters, guessedLetters)` that takes a guessed letter and the arrays of word 
  letters and guessed letters as parameters.
- Check if the guessed letter matches any of the letters in the word array.
- If the letter matches, update the guessed letters array with the correct position of the guessed letter.
- Provide feedback to the user regarding correct or incorrect guesses, remaining attempts, and game outcome.
- Draw a hangman image in the console after each incorrect guess.

6. **Game Execution:**
- Initialize the game by selecting a random word and generating underscores for it.
- Continuously prompt the user for guesses until the game is won or lost, calling the `guessLetter()` function for 
  each guess.

7. **Bonus Features:**
- Implement additional features like random rewards for correct guesses, subtracting points for failed guesses, and 
  displaying the total reward.
- Enhance the game interface with ASCII art or animations for the hangman image.
- Include functions for generating random letters and choosing the initial word from an array of words.







## files

* index.html
* main.js

