## Author Details

* Name: Gabriele Speciale
* Date: 
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Add an external javascript file called main.js

● In JavaScript: 
    ○ Change the body style so it has a font-family of "Arial, sans-serif"
    ○ Replace each of the spans (nickname, favorites, hometown) with your own information
    ○ Iterate through each li and change the class to "list-item"
    ○ Create a new img element and set its src attribute to a picture of you
    ○ Append that element to the page

● Add an external css file using Javascript
    ○ The external css file should make items with the .list-item class white, bold and with an 
    orange background
    ○ The external css file should be applied after 4 seconds





## Approach to Solution

### 1. HTML and JavaScript Integration
- **External JavaScript File**:
- Create and link an external JavaScript file called `main.js`

### 2. JavaScript Implementation
- **Body Styling**:
- Select the `<body>` element and change its style to have a `font-family` of "Arial, sans-serif"

- **Replace Span Content**:
- Select spans by their IDs (`nickname`, `favorites`, `hometown`) and replace their content with personal information

- **List Items Styling**:
- Select all `<li>` elements
- Iterate through the `<li>` elements and change their class to `list-item`

- **Add Image**:
- Create an `<img>` element and set its `src` attribute to a picture
- Append the image element to the body

### 3. External CSS Integration
- **CSS Styling**:
- Create an external CSS file (`style.css`) to style items with the `list-item` class:
- Set the text color to white
- Make the text bold
- Set the background color to orange

- **Applying External CSS**:
- Use JavaScript to add a `<link>` element to the document's `<head>` after a delay of 4 seconds
- The `<link>` element should have `rel="stylesheet"` and `href="CSS/style.css"`

### Implementation Details
- **Body Styling**:
- Use `document.querySelector` to select the `<body>` element and apply inline styling for `font-family`

- **Span Content Replacement**:
- Use `document.getElementById` to select each span and update its `textContent`

- **List Items Class Update (2 different ways)**:
- Use `document.querySelectorAll` to get a NodeList of all `<li>` elements
- Use a `for` loop or `forEach` method to iterate over the NodeList and update the class of each `<li>` element

- **Image Element Creation**:
- Use `document.createElement` to create an `<img>` element
- Set the `src` attribute and apply inline styles
- Append the `<img>` element to the body

- **External CSS Application**:
- Create a function `changeStyle` that creates and appends a `<link>` element to the `<head>`
- Use `setTimeout` to call `changeStyle` after a delay of 4 seconds




## files

* index.html
* main.js