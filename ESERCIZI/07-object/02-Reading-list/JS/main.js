/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-01
 * @description 
 * ● Create an array of objects, where each object describes a book and has 
     properties for the title (a string), author (a string), and alreadyRead (a 
     boolean indicating if you read it yet).

   ● Iterate through the array of books. For each book, log the book title and 
     book author like so: "The Hobbit by J.R.R. Tolkien".

   ● Now use an if/else statement to change the output depending on whether 
     you read it yet or not. If you read it, log a string like 'You already read "The 
     Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read 
     "The Lord of the Rings" by J.R.R. Tolkien.'
 */



// array which contains various books (objects)
let books = [{

    // 1 book
    title: "Star Wars",
    author: "George Lucas",
    read: true
}, {
    // 2 book
    title: "Harry potter",
    author: "J. K. Rowling",
    read: false
}, {
    // 3 book
    title: "The Lord of the Rings",
    author: "Peter Jackson",
    read: false
}, {
    // 4 book
    title: "Strange Case of Dr Jekyll and Mr Hyde",
    author: "Robert Louis Stevenson",
    read: true
}];



/* !!! USED DOT NOTATION !!!
cycle to through and print on console the array informations of books*/
for (let i = 0; i < books.length; i++) {
    console.log("\n", i + 1, "book -->", books[i].title, "by", books[i].author);
}



/* !!! USED DOT NOTATION !!!
cycle to through and print on console the array information of books
and say if you already read the or still need to read, based on the .read value in the object */
console.log("\n\n")

for (let i = 0; i < books.length; i++) {

    if (books[i].read) {
        console.log("\nYou already read the", i + 1, "book -->", books[i].title, "by", books[i].author);

    } else {
        console.log("\nYou still need to read the", i + 1, "book -->", books[i].title, "by", books[i].author);
    }
    
}