## Author Details

* Name: Gabriele Speciale
* Date: 
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● Create an object to store the following information about a movie: title (a string), duration (a number),
  and stars (an array of strings).

● Create an Array of objects that can hold several movies.

● Create a function to print out the movie information like so: "Puff the Magic 
  Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

● Test the function by printing one movie.

● Use the function to print all the movies in the Array




## Approach to Solution

This solution involves creating two functions: one to print the information of a single movie and another to print the information of multiple movies.

1. **Function to Print a Single Movie**:
- The function `printMovie(movie)` takes a single movie object as a parameter.
- It prints the movie's information using template literals, including the title, duration, and stars.

2. **Function to Print Multiple Movies**:
- The function `printAllMovies(movies)` takes an array of movie objects as a parameter.
- It iterates through each movie object in the array and prints its information, including the title, duration, and stars.
- Nested loops are used to handle the array of stars for each movie.

3. **Testing the Functions**:
- The `printMovie()` function is tested by printing out the information of a single movie.
- The `printAllMovies()` function is tested by printing out the information of all movies in the array.

This approach separates the concerns of printing single movie information and multiple movie information into distinct functions, promoting modularity and reusability.






## files

* index.html
* main.js
