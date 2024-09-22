/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-09
 * @description 
 *   ● Create a complete webpage with a title, description and all other HTML tags
 * 
 *   ● In the body add an h1 title of "My Book List"
 * 
 *   ● In javascript, iterate through the array of books.
 *     ○ For each book, create HTML element with the book title and author and append it to the 
 *       page
 *     ○ Use a ul and li to display the books
 *     ○ Add a url property to each book object that contains the cover image of the book
 *     ○ Add the image to the HTML using Javascript
 *     ○ Using javascript change the style of the book depending on whether you have read it or not
 * 
 *   ● Add an external css file that applies after 5 seconds
 *     ○ Now change the style of the book depending on whether you have read it or not using both 
 *       css and javascript (the CSS should use a different color for read books)
 */


// Array containing book objects, each with:
// - title: title of the book
// - author: author of the book
// - alreadyRead: reading status (true if read, false if not read)
// - image: URL of the book's cover image
let books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        image: "./IMG/1-BOOK.jpg"
    }, {
        title: 'Star Wars',
        author: 'George Lucas',
        alreadyRead: true,
        image: "./IMG/4-BOOK.jpg"
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: false,
        image: "./IMG/2-BOOK.jpg"
    }, {
        title: 'Le Petit Prince',
        author: 'Antoine de Saint-Exupéry',
        alreadyRead: true,
        image: "./IMG/3-BOOK.jpg"
    }
];



// Creation of an <h1> element for the title and adding it to the body of the page
let headerTitle = document.createElement("h1");
headerTitle.textContent = "My Book List";
document.body.append(headerTitle);

// Creation of a <ul> element for the book list and adding it to the body
let listBooks = document.createElement("ul");
document.body.append(listBooks);




/* Iterating through the array of books to create 
and append HTML elements for each book */
for (let i = 0; i < books.length; i++) {

    // Creation of an <hr> element to visually separate the books
    let line = document.createElement("hr");

    // Creation of an <li> element for the book title
    let titleBook = document.createElement("li");
    titleBook.textContent = "TITLE: " + books[i].title;

    // Creation of an <li> element for the book author
    let authorBook = document.createElement("li");
    authorBook.textContent = "AUTHOR: " + books[i].author;

    // Creation of an <li> element for the reading status of the book
    let readBook = document.createElement("li");
    readBook.textContent = "ALREADY READED? " + books[i].alreadyRead;
    // Adding a CSS class based on the reading status of the book
    if (books[i].alreadyRead) {
        readBook.classList.add("read"); // Book read
    } else {
        readBook.classList.add("notRead"); // Book not read
    }

    /* Creation of an <img> element for the book's cover image
    also adding a class .sizeImg to resize the <img> */
    let imageBook = document.createElement("img");
    imageBook.src = books[i].image;
    imageBook.classList.add("sizeImg");

    // Adding the created elements (<hr>, <li>*3, <img>) to the <ul> list in the HTML document
    listBooks.append(line, titleBook, authorBook, readBook, imageBook);
}




/**
 * function changeStyle
 * Scheduled after at least 5 seconds, it will create a link in the document's <head>
 * with attributes -> rel="stylesheet", href="CSS/style.css"
 * External CSS file that will apply properties to the <li> and <img> classes
 */
function applyStyle() {
    let linkToCss = document.createElement("link"); // creating link element
    linkToCss.rel = "stylesheet"; // adding the rel attribute to the previous element
    linkToCss.href = "./CSS/style.css"; // adding the href attribute to the previous element
    document.head.append(linkToCss); // adding it to the document's head
}


/* We create a function that, after at least 5 seconds,
will create a link in the document's head that will connect
to an external style.css file, which will apply properties
to the classes previously created in the <li>, after at least 5 seconds */
setTimeout(applyStyle, 5000);