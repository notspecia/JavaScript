/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-09
 * @description 
 *  ● Add an external javascript file called main.js

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
 */


/* assigning to a variable the node containing the body
to the body node, we apply through manipulation (bad) of the style
a font-family "Arial, sans-serif" WE WILL APPLY AN INLINE STYLE WHICH IS A DISCOURAGED ACTION! */
document.body.style.fontFamily = "Arial, sans-serif";




/* assigning to each variable the node containing that specific #id (of the spans)
to these nodes (span), we add content with personal data using dot notation */
console.log("\nspan modified:");

let nicknameNote = document.getElementById("nickname");
console.log(nicknameNote);
nicknameNote.textContent = "gabry";

let favoritesNote = document.getElementById("favorites");
console.log(favoritesNote);
favoritesNote.textContent = "eat, sleep, JS!";

let homeTownNote = document.getElementById("hometown");
console.log(homeTownNote);
homeTownNote.textContent = "Italy, Turin";


/* we create an <img> element with my photo, and we apply
some inline styles */
let myPhoto = document.createElement("img");
myPhoto.src = "IMG/IO.jpg";
myPhoto.style.width = "300px";
document.body.append(myPhoto);


/* we assign to a variable a NodeList through querySelectorAll
that will contain all selectors with the <li> tag */
let lists = document.querySelectorAll("li"); // NodeList
console.log(lists);



// -----------------------------------------------------------------------


/**
 * function changeStyle
 * scheduled after minimum 4 seconds, it will create inside the <head> of the document
 * a link with attributes -> rel="stylesheet", href="CSS/style.css"
 * thus a link to the external CSS file that will apply properties to the <li> with the "list-item" class
 */
function changeStyle() {
    let linkToCss = document.createElement("link"); // creating link element
    linkToCss.rel = "stylesheet"; // adding the rel attribute to the previous element
    linkToCss.href = "./CSS/style.css"; // adding the href attribute to the previous element
    document.head.append(linkToCss); // we add it to the document's head
}


/* create a function after minimum 4 seconds,
that will create inside the document's head a link that will connect
to an external style.css file, which will apply properties
on the class previously created in the <li>, always after at least 4 seconds */
setTimeout(changeStyle, 4000);







/*
We iterate and add a class "list-item" to all <li> elements present in the document

!IMPORTANT NOTES!
-it is not possible to directly iterate over an HTMLCollection,
you need to first transform it from array-like to array

-it is possible to iterate directly over a NodeList with .forEach(item => {}) */

// 1st WAY: FOR LOOP
console.log("\nadded a class 'list-item' to <li> elements with a FOR loop");
for (let i = 0; i < lists.length; i++) {
    lists[i].className = "list-item";
    console.log(lists[i]);
}

// 2nd WAY: FOR EACH LOOP (only for NodeLists!)
console.log("\nadded a class 'list-item' to <li> elements with a FOR EACH loop");
lists.forEach(item => {
    item.className = "list-item";
    console.log(item);
});