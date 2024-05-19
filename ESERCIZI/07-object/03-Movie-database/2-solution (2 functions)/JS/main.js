/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-01
 * @description 
 * ● Create an object to store the following information about a movie: title (a string), duration (a number),
 *   and stars (an array of strings).

   ● Create an Array of objects that can hold several movies.

   ● Create a function to print out the movie information like so: "Puff the Magic 
     Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

   ● Test the function by printing one movie.

   ● Use the function to print all the movies in the Array
 */



/**
 * function printMovie
 * Function used to print the information of a single movie on console
 * We use to print movie through the TEMPLATE LITERALS ${ }
 * @param {object} movie - single movie
 */
function printMovie(movie) {

    console.log("***SINGLE MOVIE***")

    // Print on console the information of the single film through TEMPLATE LITERALS ${ }
    console.log(`${movie.title} lasts for ${movie.duration} minutes.
Stars: ${movie.stars}`);
}



/**
 * function printAllMovies
 * Function used to print the information of multiple movies on console
 * @param {object} movies - a database of movies
 */
function printAllMovies(movies) {

    console.log("\n\n\n***DATABASE OF MOVIES***")

    for (i = 0; i < movies.length; i++) {

        // Let's print the title of the movie on console
        console.log("\n\nthe title of this movie is:", movies[i].title);

        // Let's print on console the duration of movie
        console.log("duration of the movie:", movies[i].duration, "minutes");

        // Let's print With a cycle nestled the stars of the film contained in array
        console.log("STARS:");
        for (let j = 0; j < movies[i].stars.length; j++) {
            console.log("the", j + 1, "star is:", movies[i].stars[j])
        }
    }
}







// object containing a movie
const movie = {
    title: "a Silent Voice",
    duration: 120,
    stars: ["Yoshitoki Ōima", " Naoko Yamada", " Makoto Shinkai", " Hiromu Arakawa"]
};



// array which contains various movies (objects)
let movies = [
    {
        // 1 movie
        title: "Scarface",
        duration: 180,
        stars: ["Al Pacino", "Michelle Pfeiffer", "Steven Bauer"]
    }, {
        // 2 movie
        title: "Harry potter and the chamber of secrets",
        duration: 134,
        stars: ["Daniel Radcliffe", "Emma Watson", "Michael Gambon", "Maggie Smith", "Gary Oldman"]
    }, {
        // 3 movie
        title: "Spider Man",
        duration: 110,
        stars: ["Tobey Maguire", "Kirsten Dunst", "Willem Dafoe"]
    }, {
        // 4 movie
        title: "Saw IV",
        duration: 122,
        stars: ["Tobin Bell ", "Scott Patterson"]
    }
]





// test the function by printing ONE movie
printMovie(movie);


// test the function by printing the database of movies
printAllMovies(movies);
