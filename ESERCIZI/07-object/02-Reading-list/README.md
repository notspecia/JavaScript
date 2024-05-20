## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-01
* Concat: gabriele.speciale@edu.itspiemonte.it




## Description

● Create an array of objects, where each object describes a book and has 
  properties for the title (a string), author (a string), and alreadyRead (a 
  boolean indicating if you read it yet).

● Iterate through the array of books. For each book, log the book title and 
  book author like so: "The Hobbit by J.R.R. Tolkien".
  
● Now use an if/else statement to change the output depending on whether 
  you read it yet or not. If you read it, log a string like 'You already read "The 
  Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read 
  "The Lord of the Rings" by J.R.R. Tolkien.'





## Approach to Solution

To create an array of objects describing books, iterate through the array, and change the output depending on whether the book has been read or not, the following steps are taken:

1. **Array of Books Creation**:
- An array named `books` is created to hold various book objects.
- Each book object contains properties for title, author, and read status.

2. **Logging Book Information**:
- Using a loop, the information for each book is logged to the console, including the title and author of the book.
- Dot notation (`books[i].title`, `books[i].author`) is used to access the properties of each book object.

3. **Conditional Output Based on Read Status**:
- Another loop is used to iterate through the array of books.
- An if/else statement is used to change the output depending on whether the book has been read (`true`) or not (`false`).
- If the book has been read, a message indicating that you already read the book is logged.
- If the book has not been read, a message indicating that you still need to read the book is logged.



## files

* index.html
* main.js
