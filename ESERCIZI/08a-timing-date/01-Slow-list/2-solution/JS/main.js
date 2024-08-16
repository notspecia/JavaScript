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

// Global Array containing some words
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
 * function printItems
 * receives the array as an entirely topic, and will go to print
 * The value of array in that position of the index "i"
 * when "i" is === length of the array "items"
 * we will erase the execution of the interval
 * @param {object} items - array whit differents values
 */
function printItems(items) {

    /* Let's go to print the value of index "i " of array items
    then We increase by 1 (i++) the index*/
    console.log(items[i]);
    i++;

    /*if the index "i" It is the same as the length of the array "items"
    then let's cancel the execution of the interval of setIntervall()*/
    if (i === items.length) {
        clearTimeout(timerId);
    }
}


// global variable to update the array index
let i = 0;

/* after a time interval of a second, 
Let's go to perform the function "printItems" passing as a topic
The whole array with all the values */
let timerId = setInterval(printItems, 1000, items);