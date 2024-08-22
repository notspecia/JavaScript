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


/**
 * function appendListItem
 * create an element <li> with the text provided and adds it to a list <ul> specified
 * @param {string} text - content that will be insered into the <li>
 * @param {NodeList} list - the element <ul> (list, that will be filled by the <li>
 */
function appendListItem(text, list) {

  /* element <li> which will contain the information of the past text of the factory, 
  and that will be appended on to the <ul> factory */
  let listItem = document.createElement("li");
  listItem.textContent = text;

  // append the X information <li> about the factory into the list <ul>
  list.append(listItem);
}



/**
 * function generateFactory
 * function which generate the factory information and display it on the page
 * @param {object} object - the factory data object
 */
function generateFactory(object) {

  // title <h1> will has the name of the specific factory taken from the JSONblob of the factory
  const titleFactory = document.createElement("h1");
  titleFactory.textContent = `${object.name}`;

  // append the title of the factory at the START of the body (prepend)
  document.body.prepend(titleFactory);


  /* get the <ul> a list which will contains the info of the factory, 
  from the document and stored into a variable */
  const listFactory = document.getElementById("factoryInfo");

  /* ! invocation functions that allow you to insert content from objects, 
  within the <li> from the <ul> factory! */
  appendListItem(`LOCATION: ${object.location}`, listFactory);
  appendListItem(`CAPACITY CARS: ${object.capacityCars}`, listFactory);
  appendListItem(`IS OPERATIONAL?: ${object.isOperational}`, listFactory);
  appendListItem(`DEPARTMENTS: ${object.departments.join(", ")}`, listFactory);
  appendListItem(`MANAGER: ${object.manager.name}, ID: ${object.manager.employeeId}, CONTACTS: ${object.manager.contacts.join(", ")}`, listFactory);

  /* cycle that for each co-founder present in the array, within the <li> from the <ul> factory */
  for (let i = 0; i < object.manager.coFounders.length; i++) {
    appendListItem(`${i + 1} CO-FOUNDERS: ${object.manager.coFounders[i].name}, AGE: ${object.manager.coFounders[i].age}, IS MARRIED: ${object.manager.coFounders[i].married}`, listFactory);
  }

  appendListItem(`DATE ESTABLISHED: ${object.established}`, listFactory);
}


/**
 * function showInfoCar
 * function that is activated, when the user goes to click a machine on the list
 * once you click, a panel will applying + information relating to that car
 * @param {object} car - the object of that specified car
 */
function showInfoCar(car) {

  /* let's take from HTML Document, all the various paragraphs and then fill them with the information
  taken from the object `car`, and show them to the user*/
  document.querySelector("p.id").textContent = `ID CAR: ${car.id}`;
  document.querySelector("p.model").textContent = `CAR: ${car.make} ${car.model} ${car.year}`;
  document.querySelector("p.color").textContent = `COLOR: ${car.color}`;
  document.querySelector("p.isElectric").textContent = `IS ELECTRIC?: ${car.isElectric}`;
  document.querySelector("p.features").textContent = `FEATURES: ${car.features.join(", ")}`;
  document.querySelector("p.owner").textContent = `OWNER: ${car.owner.name} ${car.owner.licenseNumber}`;
  document.querySelector("p.ownerContacts").textContent = `OWNER CONTACTS: ${car.owner.contacts.join(", ")}`;
  document.querySelector("p.lastInspectionDate").textContent = `LAST INSPECTION DATE: ${car.lastInspectionDate}`;
}


/**
 * function generateCars
 * function which generate the cars of the factory information and display it on the page
 * for each car, is created an element figure which contains the image of the car
 * and the caption of it, if the user press the figure of an car, will be showed more informations
 * about it
 * @param {cars} object - the array which contains the cars (objects)
 */
function generateCars(cars) {

  // variable containing the div which shows more information about the CARS + the label X
  const moreInfoDiv = document.getElementById("moreInfoCars");
  // added to a variable the label symbol X, contained in the div which show more info about the car
  const closeSimbol = document.querySelector("label");
  // take from the document the div which will containt all the cars (element figure)
  const containerImages = document.getElementById("imagesCars");

  //! FOR OF, CAR CONTAINED IN THE ARRAY WHICH HAVE MULTIPLE OBJECTS (CARS)
  for (let car of cars) {
 
    // created element figure which will have an image and a figcaption, then will appended to the div main
    let figure = document.createElement("figure");

    // created element img to add to the figure, and added attributes: src, alt
    let image = document.createElement("img");
    image.src = car.image;
    image.alt = `car image`;

    // created element figcaption to add to the figure, and added to it a content text
    let caption = document.createElement("figcaption");
    caption.textContent = `${car.make} ${car.model} ${car.year}`;

    // append the image and the figcaption elaborated, to the figure
    figure.append(image, caption);

    // append the figure to the div which contain the list of all cars
    containerImages.append(figure);

    // add event listener to the figure of the car, will show into a div, the information about that car
    figure.addEventListener("click", () => {
      moreInfoDiv.style.display = "block";
      showInfoCar(car);
    });

    /* add event listener to the X label inside the div which show more info about the car
    when it is clicked, the div will disappear */
    closeSimbol.addEventListener("click", () => {
      moreInfoDiv.style.display = "none";
    });
  }
}


// -----------------------------------------------------------------------------------------------------------


/**
 * function handleRequestSuccess
 * function to handle successful HTTPS requests
 * @param {XMLHttpRequest} request - the XMLHttpRequest object
 * @param {string} type - the type of data being handled (can be FACTORY or CARS)
 */
function handleRequestSuccess(request, type) {

  // checking the status of the request (between 200 and 300 is good response)
  if (request.status >= 200 && request.status < 300) {

    // assigned to a variable the JSONblob of the factory / cars request
    const data = JSON.parse(request.responseText); // transform a string into a usable object
    console.log(`${type} data:`, data); // debug print

    // if the type of the data is "factory", evocate a function which manage the FACTORY DATA
    if (type === "factory") {
      generateFactory(data);

      // if the type of the data is "cars", evocate a function which manage the CARS DATA
    } else {
      generateCars(data);
    }

    // bad request!
  } else {
    alert(`error loading ${type} data, retry later!`);
  }
}

/**
 * function handleRequestError
 * Function to handle errors in HTTP requests, it will show a message of error
 * @param {string} type - The type of data that failed to load (can be FACTORY or CARS)
 */
function handleRequestError(type) {
  alert(`network error while loading ${type} data retry later!`);
}



// create separate request objects for each URL
const factoryRequest = new XMLHttpRequest();
const carsRequest = new XMLHttpRequest();

// URLs of the JSON stored using jsonblob
const factoryUrl = "https://jsonblob.com/api/jsonBlob/1265346802797633536";
const carsUrl = "https://jsonblob.com/api/jsonBlob/1265750129310031872";

// ?onload / onerror =  request shortcut event listener
// set up and send requests to obtain the JSONblob of the FACTORY, manipulate the state of the request whit eventlisteners
factoryRequest.open("GET", factoryUrl, true);
factoryRequest.onload = () => { handleRequestSuccess(factoryRequest, "factory") };
factoryRequest.onerror = () => { handleRequestError("factory") };
factoryRequest.send();

// set up and send requests to obtain the JSONblob of the CARS, manipulate the state of the request whit eventlisteners
carsRequest.open("GET", carsUrl, true);
carsRequest.onload = () => { handleRequestSuccess(carsRequest, "cars") };
carsRequest.onerror = () => { handleRequestError("cars") };
carsRequest.send();