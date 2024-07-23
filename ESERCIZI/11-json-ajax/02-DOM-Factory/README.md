## Author Details

* Name: Gabriele Speciale
* Date: 2024-07-07
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Write your cars and factory objects as JSON strings in a variable
   
● Parse them with JSON.parse();

● Write each of them to the DOM in a list
 ○ You should use a styled CSS <ul><li> list with no bullets
 ○ Don’t use <table>



## Approach to solution

#### JSON string into JS object
- `objectJson`: Contains a JSON string representing a factory with cars information

- `objectJavaScript`: Parsed JavaScript object from the JSON string

#### Function `appendListItem`
- Creates an `<li>` element with the provided text
- Appends the `<li>` to the specified `<ul>`


#### Function `generateFactoryCars`
- Generates and dynamically inserts information into the DOM from a JavaScript object
- Displays information in two separate lists:

**Factory Information**
- Displays factory details such as location, capacity, and departments
- Lists manager details and co-founders

- **Cars Information**
- Lists details for each car including make, model, owner, and features



## files

* index.html
* style.css
* main.js