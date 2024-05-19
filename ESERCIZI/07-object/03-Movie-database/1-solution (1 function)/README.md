## Author Details

* Name: Gabriele Speciale
* Date: 2024-05-01
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

This solution involves creating an object to store movie information, an array of objects to hold multiple movies, and a function to print out movie information.

1. **Object Creation**:
   - An object named `movie` is created to store information about a single movie.
   - The object includes properties for title (a string), duration (a number), and stars (an array of strings).

2. **Array of Objects Creation**:
   - An array named `movies` is created to hold multiple movie objects.
   - Each movie object within the array follows the same structure as the `movie` object.

3. **Function to Print Movie Information**:
   - The function `printMovieOrMovies` is created to print out movie information.
   - It accepts a parameter `movieOrMovies`, which can be either a single movie object or an array of movie objects.
   - If a single movie object is provided, it prints its information using template literals.
   - If an array of movie objects is provided, it iterates through each movie object and prints its information.

4. **Testing the Function**:
   - The function is tested by printing out a single movie and all the movies in the array.
   - Both scenarios are handled using the same function, demonstrating its versatility and reusability.

This approach effectively handles the storage and printing of movie information, whether it's for a single movie or a collection of movies.







## files

* index.html
* main.js
