/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-07-15
 * @description
 * ● Use jsonblob to store JSON data about cars and a car factory
 *
   ● You can use as many blobs as you need. Decide the structure in a way to
     reduce the amount of data you modify with HTTP requests

   ● Write an application that displays a factory with a list of cars

   ● Clicking on each car should display a collapsible panel with more
     information about the car

   ● It should be possible to edit the car details

   ● Save the modified data to jsonblob with an HTTP request

   ● Whenever data is modified you should reload the new data from jsonblob
     once the writing has finished

   ● You should handle all error cases in your application. If an HTTP request
     fails, you should display a message to the user

   ● Your project should include a folder called ‘json’ with all the initial json files
     that you upload to jsonblob (the initial state of your DB)

   ● Your readme (markdown) should include links to all the jsonblobs that you
     are using as well as a list of their IDs
 */

// created separate request objects for each URL
const factoryRequest = new XMLHttpRequest();
const carsRequest = new XMLHttpRequest();

// URLs of the JSON stored using jsonblob 
const factoryUrl = "http://jsonblob.com/api/jsonBlob/1265346802797633536";
const carsUrl = "http://jsonblob.com/api/jsonBlob/1265346918619144192";

// open and send requests of the factory
factoryRequest.open("GET", factoryUrl, true);
factoryRequest.send();

// open and send requests of the cars
carsRequest.open("GET", carsUrl, true);
carsRequest.send();



// add event listeners for the factory request if the request is loaded
factoryRequest.addEventListener("load", () => {

  // checking the status of the request (between 200 and 300 is good response)
  if (factoryRequest.status >= 200 && factoryRequest.status < 300) {
    const factoryData = JSON.parse(factoryRequest.responseText);
    console.log("factory data:", factoryData);

    // bad request!
  } else {
    console.error("error loading factory data!:", factoryRequest.statusText);
  }
});

// add event listeners for the factory to manage the network problems of the request (didn't sended!)
factoryRequest.addEventListener("error", () => {
  console.error("Network error while loading factory data");
});

// -----------------------------------------------------------------------------------------------------------

// add event listeners for the cars request if the request is loaded
carsRequest.addEventListener("load", () => {

  // checking the status of the request (between 200 and 300 is good response)
  if (carsRequest.status >= 200 && carsRequest.status < 300) {
    const carsData = JSON.parse(carsRequest.responseText);
    console.log("cars data:", carsData);

    // bad request!
  } else {
    console.error("error loading cars data:", carsRequest.statusText);
  }
});

// add event listeners for the cars to manage the network problems of the request (didn't sended!)
carsRequest.addEventListener("error", () => {
  console.error("network error while loading cars data!");
});