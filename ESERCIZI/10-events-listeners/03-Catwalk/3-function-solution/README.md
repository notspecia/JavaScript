## Author Details

* Name: Gabriele Speciale
* Date: 2024-06-18
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● The cat should start from the left side of the screen

● Write a function ‘catWalk()’ that moves the cat 10 pixels to the right

● Make the cat move across the screen by calling that function every 50ms

● Write different versions of the function to handle the following variant:
 ○ Variant 3: When the cat reaches the middle of the screen, replace the img with a different 
   cat image. Keep it in the middle for 10 seconds, and then replace the img with the original 
   image and have it continue the walk as in variant 2




## Approach to Solution

### Variable Declaration

#### Global Variable
- `catWalk`: Object to manage the cat's position, direction, image, and state

### Function `catwalkBackwards`

#### Function `catwalkBackwards`
- Moves the cat image across the screen, handling direction changes and image replacement at the middle
- Flips the cat image horizontally when changing direction

### Periodic Updates

#### Set Interval
- Uses `setInterval` to call `catwalkBackwards` every 50 milliseconds for continuous movement

### JavaScript Implementation

#### Initial Setup
- Initializes `catWalk` object with starting position, direction, image element, and state flag

#### Functionality
- Checks if the cat reaches the middle of the screen to replace its image for 10 seconds
- Resumes walking with the original image after the timeout

#### Scalability and Maintainability
- Designed for functionality with clear handling of direction changes and image transitions




## files

* index.html
* main.js