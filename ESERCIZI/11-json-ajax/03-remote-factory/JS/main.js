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

// create separate request objects for each URL
const factoryRequest = new XMLHttpRequest();
const carsRequest = new XMLHttpRequest();

// URLs of the JSON stored using jsonblob
const factoryUrl = "https://jsonblob.com/api/jsonBlob/1265346802797633536";
const carsUrl = "https://jsonblob.com/api/jsonBlob/1265346918619144192";



/**
 * function appendListItem
 * create an element <li> with the text provided and adds it to a list <ul> specified
 * @param {string} text - content that will be insered into the <li>
 * @param {element} list - the element <ul> that will be filled
 */
function appendListItem(text, list) {

  /* element <li> which will contain the information of the past text of the factory, 
  and that will be appended on to the <ul> factory */
  let infoOfList = document.createElement("li");
  infoOfList.textContent = text;

  // append the X information <li> about the factory into the list <ul>
  list.append(infoOfList);

}



/**
 * function generateFactory
 * function to generate the factory information and display it on the page
 * @param {object} object - the factory data object
 */
function generateFactory(object) {

  // title <h1> will has the name of the factory
  let titleFactory = document.createElement("h1");
  titleFactory.textContent = `${object.name}`;

  // append the title of the factory at the start of the body
  document.body.prepend(titleFactory);


  /* get the <ul> a list which will contains the info of the factory, 
  from the document and stored into a variable */
  let listFactory = document.getElementById("factoryInfo");

  /* invocation functions that allow you to insert content from objects, 
  within the <li> from the <ul> factory */
  appendListItem(`LOCATION: ${object.location}`, listFactory);
  appendListItem(`CAPACITY CARS: ${object.capacityCars}`, listFactory);
  appendListItem(`IS OPERATIONAL?: ${object.isOperational}`, listFactory);
  appendListItem(`DEPARTMENTS: ${object.departments.join(", ")}`, listFactory);
  appendListItem(`MANAGER--> ${object.manager.name}, ID: ${object.manager.employeeId}, CONTACTS: ${object.manager.contacts.join(", ")}`, listFactory);

  /* cycle that for each co-founder present in the array, 
  within the <li> from the <ul> factory*/
  for (let i = 0; i < object.manager.coFounders.length; i++) {
    appendListItem(`${i + 1} CO-FOUNDERS--> ${object.manager.coFounders[i].name}, AGE: ${object.manager.coFounders[i].age},  IS MARRIED?: ${object.manager.coFounders[i].married}`, listFactory);

  }
  appendListItem(`DATE ESTABLISHED: ${object.established}`, listFactory);

}


/**
 * function handleRequestSuccess
 * function to handle successful HTTPS requests
 * @param {XMLHttpRequest} request - the XMLHttpRequest object
 * @param {string} type - the type of data being handled (factory or cars)
 */
function handleRequestSuccess(request, type) {

  // checking the status of the request (between 200 and 300 is good response)
  if (request.status >= 200 && request.status < 300) {
    const data = JSON.parse(request.responseText);
    console.log(`${type} data:`, data);

    // if the type of the data is "factory", evocate a function which manage that data
    if (type === "factory") {
      generateFactory(data);

      // if the type of the data is "cars", evocate a function which manage that data
    } else {
      generateCars(data);
    }

    // bad request!
  } else {
    console.error(`error loading ${type} data:`, request.statusText);
  }
}

/**
 * function handleRequestError
 * Function to handle errors in HTTP requests
 * @param {string} type - The type of data that failed to load (factory or cars)
 */
function handleRequestError(type) {
  console.error(`network error while loading ${type} data!`);
}

// set up and send requests for the factory, manipulate the state of the request whit eventlisteners
factoryRequest.open("GET", factoryUrl, true);
factoryRequest.addEventListener("load", () => handleRequestSuccess(factoryRequest, "factory"));
factoryRequest.addEventListener("error", () => handleRequestError("factory"));
factoryRequest.send();

// set up and send requests for the cars, manipulate the state of the request whit eventlisteners
carsRequest.open("GET", carsUrl, true);
carsRequest.addEventListener("load", () => handleRequestSuccess(carsRequest, "cars"));
carsRequest.addEventListener("error", () => handleRequestError("cars"));
carsRequest.send();