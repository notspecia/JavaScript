/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-07-02
 * @description 
 * 
 * ● Start with the ‘Arrivals’ exercise from a previous lesson
 * 
 * ● Add the following features:
 *   ○ When the user clicks a row, it should expand to show more information about the flight
 *   ○ When the user clicks an open row it should close again
 *   ○ If the user clicks a row, any other open rows should close
 * 
 *   ■ Like in this example of an accordion
 *   ○ Add a ‘Departures’ section with departing flights
 *   ○ The user should be able to switch between Arrivals and Departures with a fade-in/fade-out 
 *     animation
 */

// array that keeps track of all flights (objects with keys) present in the document's <table>
let allTheFlys = [];

// variable containing the div which shows more information about the flight + the label X
let moreInfoDiv = document.getElementById("moreInfoFlight");

// added to a variable the label symbol X, contained in the div
let crosSimbol = document.querySelector("label");


/**
 * function statusUpdateFlys
 * Function that will update the states of flights present in the global array
 * and possibly, if the plane has reached its destination, it will remove itself from the table
 * after a minimum of 60 seconds
 */
function statusUpdateFlys() {

    // array used for the status transition: DEPARTING --> "DELAYED" / "ON_TIME"
    const statusFlysUpdate = ["DELAYED", "ON_TIME"];

    // iterate over every flight present in the global array of flights
    allTheFlys.forEach(fly => {

        /* initially, as soon as the flight is created, it will have a key with value false to avoid
        it from immediately updating within those 10 seconds */
        if (fly.canChangeStatus) {

            switch (true) {

                case fly.currentStatus === "DEPARTING":
                    fly.currentStatus = statusFlysUpdate[Math.floor(Math.random() * statusFlysUpdate.length)];
                    fly.statusCell.textContent = fly.currentStatus;
                    if (fly.currentStatus === "DELAYED") {
                        fly.row.classList.add("delay");
                    }
                    break;

                case fly.currentStatus === "DELAYED":
                    fly.row.classList.remove("delay");
                    fly.currentStatus = "ON_TIME";
                    fly.statusCell.textContent = fly.currentStatus;
                    break;

                case fly.currentStatus === "ON_TIME":
                    fly.currentStatus = "ARRIVED";
                    fly.statusCell.textContent = fly.currentStatus;
                    break;

                // if the state of the flight is "ARRIVED", it will remove itself after 60 seconds (50 + 10 interval)
                case fly.currentStatus === "ARRIVED":
                    setTimeout(() => {
                        fly.row.remove();
                    }, 50000);
                    break;
            }

            // now the flight can change its status in the next 10 seconds!
        } else {
            fly.canChangeStatus = true;
        }
    });
}


/**
 * function createDateFly
 * function that creates and returns the current date in the format DD-MM
 * @returns {string} - The current date in the format DD-MM
 */
function createDateFly() {

    // creation of the current day and month
    let dayFly = new Date().getDate();
    let monthFly = new Date().getMonth() + 1;

    return `${dayFly.toString().padStart(2, "0")}-${monthFly.toString().padStart(2, "0")}`;
}

/**
 * function createTimeFly
 * function that creates and returns the current time with added minutes
 * @param {object} numbersTime - array of minutes to add to the current time
 * @returns {string} - the flight time in the format HH:MM
 */
function createTimeFly(numbersTime) {

    // creation of the flight time (hour + minute) RANDOM
    let hourFly = new Date().getHours();
    let minuteFly = new Date().getMinutes() + numbersTime[Math.floor(Math.random() * numbersTime.length)];

    // if minutes exceed 60, subtract them and add 1 hour to hourFly
    if (minuteFly >= 60) {
        hourFly += 1;
        minuteFly -= 60;
    }

    // to pad single-digit minutes with a zero, convert the minutes
    // to a string with toString() and use the .padStart() method
    return `${hourFly}:${minuteFly.toString().padStart(2, "0")}`
}

/**
 * function createNumberFly
 * function that creates and returns a random flight number
 * @param {object} numberFlight - array of prefixes for the flight number
 * @returns {string} - the flight number
 */
function createNumberFly(numberFlight) {

    // creation of an empty string to contain the flight number
    let numberOfFly = "";

    for (let i = 0; i < 3; i++) {
        numberOfFly += numberFlight[Math.floor(Math.random() * numberFlight.length)];
    }

    return numberOfFly;
}



/**
 * function showMoreInfo
 * function that shows more information about the flight in a div
 * @param {object} fly - the flight object containing flight information
 */
function showMoreInfo(fly) {

    /* if the <div> is already displayed and shows some information, other rows 
    cannot be clicked to show their information */
    if (moreInfoDiv.classList.contains("show")) {
        return;

        // add a class that shows the div (from display: none to display: block)
    } else {
        moreInfoDiv.classList.add("show");

        // creation of variables that contain the <p> element for each piece of flight information
        let paragraphDate = document.querySelector("p.date").textContent = fly.date;
        let paragraphTime = document.querySelector("p.time").textContent = fly.time;
        let paragraphDestination = document.querySelector("p.destination").textContent = fly.destination;
        let paragraphNumber = document.querySelector("p.number").textContent = fly.numberFly;
        let paragraphStatus = document.querySelector("p.status").textContent = fly.currentStatus;
    }
}

/**
 * function updateFlys
 * function that will be scheduled after a minimum of 10 seconds, and will create
 * a flight which will be a <tr> tag and represent a row. inside that, will be created
 * some information about the flight which will be a <td> tag.
 * after creating the necessary elements, we will store the <tr> and the <td> status in an object.
 * subsequently, the object will be included at the end of the global array (containing all flights)
 */
function updateFlys() {

    // array containing small numbers to add to the current time for the flight time
    const numbersTime = [2, 5, 7, 10, 13, 15];

    // array containing the destinations of the flights
    const destinations = [
        "Japan", "USA", "Italy", "Australia", "Spain", "Canada", "Brazil", "South Africa", "Thailand",
        "Germany", "China", "Mexico", "India", "United Kingdom", "Argentina", "Egypt", "New Zealand", "Greece",
        "Netherlands", "Turkey", "Switzerland", "Russia", "Indonesia", "Portugal"
    ];

    // array containing various prefixes to compose the flight number
    const numberFlight = ["A1", "3L", "U2", "BA", "LH", "4F", "6M", "SQ", "1F", "C0"];

    // array containing the flight statuses
    const statusFlys = ["DEPARTING", "DELAYED", "ON_TIME", "ARRIVED"];

    // assign the tbody to a variable, used to append <tr> elements to it
    let mainBodyTable = document.querySelector("tbody");

    // creation of a <tr> element to contain flight info (<td>) in the <tbody>
    let flyTr = document.createElement("tr");
    mainBodyTable.append(flyTr);

    // ---------------- creation of <td> elements with flight info ------------------------------
    let flyTdDate = document.createElement("td");        // cell containing the flight date
    let flyTdTime = document.createElement("td");        // cell containing the flight time
    let flyTdDestination = document.createElement("td"); // cell containing the flight destination
    let flyTdNumberOfFly = document.createElement("td"); // cell containing the flight number
    let flyTdStatus = document.createElement("td");      // cell containing the flight status (dynamic)

    // creation of the flight date (day + month)
    let dateFly = createDateFly();
    flyTdDate.textContent = dateFly;

    // creation of the time of the flight (RANDOM)
    let timeFly = createTimeFly(numbersTime);
    flyTdTime.textContent = timeFly;

    // creation of the flight destination (RANDOM)
    let destination = destinations[Math.floor(Math.random() * destinations.length)];
    flyTdDestination.textContent = destination;

    // creation of the flight number (RANDOM)
    let numberFly = createNumberFly(numberFlight);
    flyTdNumberOfFly.textContent = numberFly;


    // initial creation of the flight status (RANDOM)
    let flyStatus = statusFlys[Math.floor(Math.random() * statusFlys.length)];
    flyTdStatus.textContent = flyStatus;

    // if the flight status is delayed, add a .delay class to the <tr>
    if (flyStatus === "DELAYED") {
        flyTr.classList.add("delay");
    }


    // -------- append all <td> elements (flight infos) to the <tr> -----------
    flyTr.append(flyTdDate, flyTdTime, flyTdDestination, flyTdNumberOfFly, flyTdStatus);

    // create an object for this flight, including keys useful for changing the flight status
    let fly = {
        row: flyTr,                // store the <tr> element containing all flight data
        date: dateFly,             // store the value of the <td> date of the flight
        time: timeFly,             // store the value of the <td> time of the flight
        destination: destination,  // store the value of the <td> destination of the flight
        numberFly: numberFly,      // store the value of the <td> flight number
        statusCell: flyTdStatus,   // store the <td> containing the flight status
        currentStatus: flyStatus,  // store the current flight status
        canChangeStatus: false,    // used to prevent immediate status changes

        /* added a method that has an event listener,
        which adds a class to show the div containing flight information */
        interactiveRow: function () {
            this.row.addEventListener("click", () => showMoreInfo(this));
        }
    };

    // schedule the function contained in the object(method)
    fly.interactiveRow();

    // add the created flight object to the end of the global array of all flights
    allTheFlys.push(fly);

}


/* interval that schedules a function to create a new flight every 10 seconds and add it to the global array of all flights
interval that schedules a function to update the status of each flight in the global array every second */
setInterval(() => {
    updateFlys();
    statusUpdateFlys();
}, 10000);

// added an event listener to the label on click, it will hide the div with display: none
crosSimbol.addEventListener("click", () => {
    moreInfoDiv.classList.remove("show");
});