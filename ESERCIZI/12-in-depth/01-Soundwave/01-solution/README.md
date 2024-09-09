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

to generate the modified `noisesArrayNew` array from the initial `noisesArray`:

### 1. **array declaration**:
- the `noisesArray` is initialized with the values `['quack', 'sneeze', 'boom']`
- an empty array `noisesArrayNew` is declared to store the newly modified sounds

### 2. **nested loop structure**:
- we use a `for...of` loop to iterate through each sound in the `noisesArray`
- for each sound, a nested `for` loop iterates through each letter of the sound using the index (`i`) to determine which letter to capitalize

### 3. **string modification**:
- for each iteration of the inner loop:
- a substring is created using `slice()` where the letter at index `i` is capitalized while the rest remains unchanged
- we build a string of exclamation marks (`!`) whose length depends on the current index (`i + 1`)
- the modified sound string is then appended to the `noisesArrayNew` array
   
### 4. **final output**:
- after both loops complete, the modified sounds with alternating capital letters and increasing exclamation marks are stored in `noisesArrayNew`
- the final array is printed to the console, containing variations of each original sound

this approach ensures that each sound is modified based on the position of its letters, with progressively more exclamation marks as the index increases. the final result is a visually dynamic array of modified sounds that are printed to the console








## files

* index.html
* main.js