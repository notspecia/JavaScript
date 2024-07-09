## Author Details

* Name: Gabriele Speciale
* Date: 2024-06-18
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● the cat should start from the left side of the screen

● write a function ‘catWalk()’ that moves the cat 10 pixels to the right

● make the cat move across the screen by calling that function every 50ms

● write different versions of the function to handle the following variant:
  ○ variant 2: when the cat reaches the right side of the screen, it should move backwards.
     when it reaches the left it should move forwards




## Approach to solution

### Variable Declaration

#### Global Variable
- `catWalk`: Object to manage the cat's position, direction, and DOM element

### Function `catwalkBackwards`

#### Function `catwalkBackwards`
- Moves the cat image across the screen, altering direction as it reaches edges
- Changes direction and flips the cat image horizontally when reaching screen edges

### Periodic Updates

#### Set Interval
- Uses `setInterval` to call `catwalkBackwards` every 50 milliseconds for continuous movement

### JavaScript Implementation

#### Initial Setup
- Initializes `catWalk` object with starting position, direction, and selects the cat image

#### Functionality
- Utilizes conditional logic to manage forward and backward movement of the cat image
- Updates CSS transform property to flip the cat image horizontally for visual feedback

#### Scalability and Maintainability
- Designed for clarity and functionality, focusing on handling directional changes seamlessly





## files

* index.html
* main.js