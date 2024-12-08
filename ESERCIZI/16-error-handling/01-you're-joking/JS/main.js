/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-11-20
 * @description 
 * 
Create a function called fetchRandomJoke() that fetches one random joke from a 
Random joke API and returns a promise that resolves with the text of the joke.

Create a page that uses the function and displays the joke on the page or an error message if the promise rejects

The function:
 ● Should use error handling to handle errors that may occur during the fetching
 ● Should return a Promise that resolves with the joke text, not the joke text itself
 ● If the fetch operation fails, the function should retry the operation up to 3 times before giving up
 ● If the fetch operation fails after 3 attempts, the function should reject the promise 
 
 Bonus
 Create variants that can fetch jokes by number and by type
 */


//  variable used for check how many retries for the fetch operation
const retries = 0;


/**
 * function fetchRandomJoke
 * fetches a random joke from an external API, and returns will a Promise that resolves with the joke data.
 * @returns {Promise} - a promise that resolves with the joke data (.then(resolve())) or rejects with an error if the fetch fails (.catch(reject())).
 */
function fetchRandomJoke() {

    return new Promise((resolve, reject) => {

        fetch("https://official-joke-api.appspot.com/jokes/random")
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => { console.error(`joke reject ${error.message}`); return reject(error) })
    });
}


/**
 * function startJoke
 * attempts to fetch a random joke using fetchRandomJoke, displays the joke on the page,
 * and handles errors with a retry mechanism.
 */
function startJoke() {
    fetchRandomJoke()
        .then(data => {

            // if the response contains an error (if the API returns an error object)
            if (data.type === "error") {
                throw new Error(data.message);
            }

            const jokeQuestion = document.createElement("h2");
            jokeQuestion.textContent = data.setup;

            const jokeResponse = document.createElement("h3");
            jokeResponse.textContent = data.punchline;

            document.body.prepend(jokeQuestion, jokeResponse);
            console.log("funziona!");

        })
        .catch(error => {

            // if an error occurs, attempt to retry up to 3 times
            if (retries < 3) {
                retries++;
                startJoke();
            } else {
                console.error(`operation failed after 3 try! ${error}`);
            }
        });
}

// start the joke-fetching!
startJoke();