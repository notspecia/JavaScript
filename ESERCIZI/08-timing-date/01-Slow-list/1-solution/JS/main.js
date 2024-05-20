/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-15
 * @description 
 * ● Create an array that holds a list of 30 items (food, books, etc.)
   ● Print one item of the list every second until the list is completely printed
    ○ Use setInterval to achieve this goal
    ○ Do the same thing using setTimeout
 */




// Array containing some words
let items = ["Pizza",
    "The Great Gatsby by F. Scott Fitzgerald",
    "Bananas",
    "To Kill a Mockingbird by Harper Lee",
    "Chocolate",
    "Harry Potter and the Philosopher's Stone by J.K. Rowling",
    "Apples",
    "1984 by George Orwell",
    "Spaghetti",
    "Pride and Prejudice by Jane Austen",
    "Ice Cream",
    "The Catcher in the Rye by J.D. Salinger",
    "Cheeseburger",
    "The Lord of the Rings by J.R.R. Tolkien",
    "Strawberries",
    "The Hobbit by J.R.R. Tolkien",
    "Sushi",
    "The Da Vinci Code by Dan Brown",
    "Salad",
    "The Alchemist by Paulo Coelho",
    "Pancakes",
    "The Hitchhiker's Guide to the Galaxy by Douglas Adams",
    "Coffee",
    "The Hunger Games by Suzanne Collins",
    "Tacos",
    "The Chronicles of Narnia by C.S. Lewis",
    "French Fries",
    "Moby-Dick by Herman Melville",
    "Orange Juice",
    "Frankenstein by Mary Shelley"];


/**
 * anonymous function printItems 
 * function that receives a value contained in Array "items" as the topic,
 * we will go to print all its elements with a delay of a 1 second
 * @param {object} item - cycle value in array
 */

/* Let's go to perform ---> i * 1000:
To determine the delay of each call to function printItems.*/
for (let i = 0; i < items.length; i++) {

    setTimeout(function printItems(item) {
        console.log(item);
    }, (i + 1) * 1000, items[i]);

}