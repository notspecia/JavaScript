/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-09
 * @description 
 * ● Create a complete webpage with a title, description and all other HTML tags
   
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

 */


/* array contenente dei libri (oggetti), ogni libro contiene:
- title of the book
- name of the author of the book
- if the book is already readed or not
- an image of the book */
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

// creazione di un <h1> di intestazione al body della pagina
let headerTitle = document.createElement("h1");
headerTitle.textContent = "My Book List";
document.body.append(headerTitle);

// creazione di una lista disordinata <ul> nel body
let listBooks = document.createElement("ul");
document.body.append(listBooks);

/* andiamo ad iterare tramite un ciclo for ...  */
for (let i = 0; i < books.length; i++) {

    let line = document.createElement("hr");

    let titleBook = document.createElement("li");
    titleBook.textContent = "TITLE: " + books[i].title;


    let authorBook = document.createElement("li");
    authorBook.textContent = "AUTHOR: " + books[i].author;


    let readBook = document.createElement("li");
    readBook.textContent = "ALREADY READED? " + books[i].alreadyRead;
    if (books[i].alreadyRead) {
        readBook.classList.add("read");

    } else {
        readBook.classList.add("notRead");
    }


    let imageBook = document.createElement("img");
    imageBook.src = books[i].image;
    imageBook.classList.add("sizeImg");


    listBooks.append(line, titleBook, authorBook, readBook, imageBook);
}

/**
 * function changeStyle
 * scheduled after minimum 4 seconds, it will create inside the <head> of the document
 * a link with attributes -> rel="stylesheet", href="CSS/style.css"
 * thus a link to the external CSS file that will apply properties to the <li> with the "list-item" class
 */
function applyStyle() {
    let linkToCss = document.createElement("link"); // creating link element
    linkToCss.rel = "stylesheet"; // adding the rel attribute to the previous element
    linkToCss.href = "./CSS/style.css"; // adding the href attribute to the previous element
    document.head.append(linkToCss); // we add it to the document's head
}

/* We create a function after minimum 5 seconds,
that will create inside the document's head a link that will connect
to an external style.css file, which will apply properties
on the class previously created in the <li>, always after at least 5 seconds */
setTimeout(applyStyle, 5000);