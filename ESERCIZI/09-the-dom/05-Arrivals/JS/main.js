/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-06-08
 * @description 
 * ● Implement the arrivals page of an airport such as this one
    ○ Create a complete and proper webpage with a title, description, and all other HTML tags
    ○ Add JavaScript and CSS files
    ○ Include as much detail as you can for each flight row
    ○ Add a Status to each flight. Status can be DEPARTING, DELAYED, ON_TIME, ARRIVED, etc

   ● Simulate a real arrivals list
    ○ The list should start empty and update every 10 seconds
    ○ Flights that have arrived should be removed after 60 seconds
    ○ Flights should change status over time. E.g. departing > on_time > delayed > arrived
    ○ Flights that are delayed should be displayed in red
    ○ New flights should be added to the bottom of the list
    ○ The list should be sorted by date and time
 */


// GLOBALS ARRAY USED TO CREATE RANDOM INFO ABOUT THE FLIGHTS

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

// array that keeps track of all flights present in the document's <table>
let allTheFlys = [];





/**
 * function statusUpdateFlys
 * function that will update the states of flights present in global array
 * and possibly if the plane has come to its destination, it will cancel itself from the table
 * after minimum 60 seconds
 */
function statusUpdateFlys() {

    // array used for the status transition: DEPARTING --> "DELAYED" / "ON_TIME"
    const statusFlysUpdate = ["DELAYED", "ON_TIME"];

    // We curtate every flight present in the global array of flights
    allTheFlys.forEach(fly => {

        /* Initially as soon as the flight is created, it will have a key with value false, to avoid
        that always in those 10 seconds goes to update immediately */
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

                // If the state of the flight is "ARRIVED", then it will cancel itself after 60seconds
                case fly.currentStatus === "ARRIVED":
                    setTimeout(() => {
                        fly.row.remove();
                    }, 50000);
                    break;
            }

        } else {
            // Now the flight can minimize the next 10 seconds to change its STATE!
            fly.canChangeStatus = true;
        }
    });
}




/**
 * function updateFlys
 * function that will be scheduled after a minimum of 10 seconds, and will create
 * a fly which will be an <tr> tag and represents a row, inside that, will be created
 * some informations about the fly which will be an <td> tag.
 * After creating the necessary, we will store the <tr> and the <td> status in an object
 * Subsequently the object will be included at the end of the array global (contain all THE FLYS)
 */
function updateFlys() {

    // assign the tbody to a variable, used to append <tr> elements to it
    let mainBodyTable = document.querySelector("tbody");

    // Creation of a <tr> element to contain flight info (<td>)
    let flyTr = document.createElement("tr");
    mainBodyTable.append(flyTr);

    //---------------- creation of <td> elements with flight info -------------------
    let flyTdDate = document.createElement("td");        // cell containing the flight date
    let flyTdTime = document.createElement("td");        // cell containing the flight time
    let flyTdDestination = document.createElement("td"); // cell containing the flight destination
    let flyTdNumberOfFly = document.createElement("td"); // cell containing the flight number
    let flyTdStatus = document.createElement("td");      // cell containing the flight status (dynamic)

    
    // creation of the flight date (day + month)
    let dayFly = new Date().getDate();
    let monthFly = new Date().getMonth() + 1;
    let dateFly = `${dayFly.toString().padStart(2, "0")}-${monthFly.toString().padStart(2, "0")}`;
    flyTdDate.textContent = dateFly;


    // creation of the flight time (hour + minute) RANDOM
    let hourFly = new Date().getHours();
    let minuteFly = new Date().getMinutes() + numbersTime[Math.floor(Math.random() * numbersTime.length)];


    // if minutes exceed 60, subtract them and add 1 hour to hourFly
    if (minuteFly >= 60) {
        hourFly += 1;
        minuteFly -= 60;
    }

    /* to pad single-digit minutes with a zero, convert the minutes
    to a string with toString() and use the .padStart() method */
    let timeFly = `${hourFly}:${minuteFly.toString().padStart(2, "0")}`
    flyTdTime.textContent = timeFly;


    // creation of the flight destination RANDOM
    let destination = destinations[Math.floor(Math.random() * destinations.length)];
    flyTdDestination.textContent = destination;


    // creation of the flight number RANDOM
    let numberOfFly = "";
    for (let i = 0; i < 3; i++) {
        numberOfFly += numberFlight[Math.floor(Math.random() * numberFlight.length)];
    }
    flyTdNumberOfFly.textContent = numberOfFly;


    // initial creation of the flight status RANDOM
    let flyStatus = statusFlys[Math.floor(Math.random() * statusFlys.length)];
    flyTdStatus.textContent = flyStatus;

    // if the flight status is delayed, add a .delay class to the <tr>
    if (flyStatus === "DELAYED") {
        flyTr.classList.add("delay");
    }


    // --------!append all <td> elements (flight info) to the <tr>!----------
    flyTr.append(flyTdDate, flyTdTime, flyTdDestination, flyTdNumberOfFly, flyTdStatus);


    // create an object for this flight, including keys useful for changing the flight status
    let fly = {
        row: flyTr,               // store the <tr> containing all flight data
        statusCell: flyTdStatus,  // store the <td> flight status
        currentStatus: flyStatus, // store the current flight status
        canChangeStatus: false    // useful to prevent immediate status change
    };

    // add the created flight object to the end of the global array of all flights
    allTheFlys.push(fly);

    // debug print of flight object keys + total flights (array)
    console.log(fly.row, fly.statusCell, fly.currentStatus);
    console.log(allTheFlys);
}



/* interval that schedules a function to create a new flight every 10 seconds and add it to the global array of all flights
+ interval that schedules a function to update the status of each flight in the global array every 10 seconds */
setInterval(() => {
    updateFlys();
    statusUpdateFlys();
}, 10000);