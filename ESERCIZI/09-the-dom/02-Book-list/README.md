## Author Details

* Name: Gabriele Speciale
* Date: 
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description
● Create a complete webpage with a title, description and all other HTML tags

● In the body add an h1 title of "My Book List"

● In javascript, iterate through the array of books.
  ○ For each book, create HTML element with the book title and author and append it to the 
    page
  ○ Use a ul and li to display the books
  ○ Add a url property to each book object that contains the cover image of the book
  ○ Add the image to the HTML using Javascript
  ○ Using javascript change the style of the book depending on whether you have read it or not

● Add an external css file that applies after 5 seconds
  ○ Now change the style of the book depending on whether you have read it or not using both 
    css and javascript (the CSS should use a different color for read books)






## Approach to Solution

### 1. HTML Structure
- **Title and Description**:
- Add a title, "My Book List", and a brief description to the HTML document
  
- **Header and List**:
- Create an `<h1>` element with the text "My Book List" and add it to the body
- Create a `<ul>` element for the book list and add it to the body

### 2. JavaScript Implementation
- **Book Array**:
- Define an array of book objects, each containing:
- `title`: The title of the book
- `author`: The author of the book
- `alreadyRead`: The reading status (true if read, false if not).
- `image`: URL of the book's cover image

- **Dynamic HTML Elements**:
- Iterate through the array of books.
- For each book, create and append the following HTML elements to the `<ul>`:
- An `<hr>` element for visual separation
- An `<li>` element for the book title
- An `<li>` element for the book author
- An `<li>` element for the reading status, with a class based on whether the book has been read or not
- An `<img>` element for the book's cover image, with a class for styling

### 3. CSS Styling
- **Initial Styling**:
- Apply initial styles using JavaScript classes:
- `.read` for books that have been read
- `.notRead` for books that have not been read
- `.sizeImg` to resize the book cover images

- **External CSS**:
- Create an external CSS file (`style.css`) to apply additional styles
- After 5 seconds, use JavaScript to dynamically add a `<link>` element to the document's `<head>`, linking to the external CSS file

### 4. Applying External CSS
- **Function `applyStyle`**:
- Create a `<link>` element with `rel="stylesheet"` and `href="CSS/style.css"`
- Append this `<link>` element to the document's `<head>` after a delay of 5 seconds using `setTimeout`







## files

* index.html
* main.js