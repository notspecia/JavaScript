## Author Details

* Name: Gabriele Speciale
* Date: 2024-06-19
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● start with the code from the previous ‘Catwalk’ exercise
● add 4 buttons at the top of the page: ‘start’, ‘faster’, ‘slower’ and ‘stop’
● add an area to display info
● when the start button is clicked the cat should start moving across the 
  screen
● the cat should stop moving when the stop button is clicked
● the cat moves faster when the faster button is clicked and slower when the 
  slower button is clicked
● show the current speed on screen in the info area
● disable the start/stop/faster/slower buttons at the appropriate times
  ○ e.g. the user shouldn't be able to click "stop" if the cat isn't currently moving






## Approach to Solution

### 1. HTML Structure
- **HTML Setup**:
- Create an HTML structure with four buttons: 'start', 'faster', 'slower', and 'stop'
- Add a `<div>` to display the current speed of the cat
- Include an image of a cat that will be moved across the screen
- Include necessary CSS for styling the buttons and the cat's movement

### Implementation Details
- **HTML Structure**:
- Create buttons with IDs `start`, `stop`, `faster`, and `slower`
- Create an info `<div>` to display the cat's current speed
- Include an image of a cat with an initial position set to absolute

- **JavaScript Functions**:
- Use `document.querySelector` and `document.getElementById` to select the necessary HTML elements
- Define `walkPosition` to track the cat's current position
- Define `walkSpeed` to track the cat's current speed
- Use `setInterval` and `clearInterval` to control the cat's movement
- Update the text content of the info `<div>` to display the current speed

- **Event Listeners**:
- Attach event listeners to the start, stop, faster, and slower buttons to handle clicks and adjust the cat's movement and speed accordingly
- Manage button visibility and functionality to ensure correct user interactions


### 2. JavaScript Implementation
- **Initial Setup**:
- Assign variables to select the required HTML elements (buttons, info `<div>`, cat image)
- Define variables for the cat's current position, walking speed, and the interval timer

- **Start Movement Function**:
- Implement the function `startMoving` to start the cat's movement when the start button is clicked
- Use `setInterval` to increment the cat's position by the current walking speed every 50 milliseconds
- Update the info `<div>` with the current speed
- Hide the start button and show the stop button

- **Stop Movement Function**:
- Implement the function `stopMoving` to stop the cat's movement when the stop button is clicked
- Use `clearInterval` to stop the movement interval
- Hide the stop button and show the start button
- Update the info `<div>` with the current speed (0 px/h)

- **Speed Adjustment Functions**:
- Implement the function `speedMoving` to increase the cat's walking speed by 2 px/h when the faster button is clicked
- Implement the function `slowMoving` to decrease the cat's walking speed by 2 px/h when the slower button is clicked, ensuring the speed does not go below 1 px/h








## files

* index.html
* main.js