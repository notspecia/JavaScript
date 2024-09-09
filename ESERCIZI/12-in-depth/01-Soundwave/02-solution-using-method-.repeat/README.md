## Author Details

* Name: Gabriele Speciale
* Date: 2024-08-05
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

Given the following array
let noisesArray = ['quack', 'sneeze', 'boom'];

Produce the following array, then print it to the console:

['Quack!','qUack!!','quAck!!!','quaCk!!!!','quacK!!!!!','Sneeze!','sNeeze!!','snEeze!!!','sneEze!!!!
','sneeZe!!!!!','sneezE!!!!!!','Boom!','bOom!!','boOm!!!','booM!!!!']




## Approach to solution

to generate the modified `noisesArrayNew` from the initial `noisesArray`:

### 1. **array declaration**:
   - the `noisesArray` is initialized with the values `['quack', 'sneeze', 'boom']`
   - an empty array `noisesArrayNew` is declared to store the modified sounds

### 2. **nested loop structure**:
   - we use a `for...of` loop to iterate through each sound in the `noisesArray`
   - for each sound, a nested `for` loop iterates through each character using its index (`i`), which determines the letter to capitalize and the number of exclamation marks to append

### 3. **string modification**:
   - for each iteration of the inner loop:
     - the letter at index `i` is capitalized using the `slice()` method to create a new string where only one letter is changed
     - the `!` character is repeated `i + 1` times using the `.repeat()` method, depending on the position of the letter in the word
     - the modified sound is added to the `noisesArrayNew` array

### 4. **final output**:
   - once the loops are completed, the modified versions of each sound with alternating capital letters and increasing exclamation marks are stored in `noisesArrayNew`
   - the final array is printed to the console, showing different variations of each sound with progressively more exclamation marks and capitalized letters

this approach ensures that each sound in the array is modified by alternating the capitalization of letters and appending exclamation marks, resulting in a dynamic and visually structured output







## files

* index.html
* main.js