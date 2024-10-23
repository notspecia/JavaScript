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



// Array that tracks all flights present in the document's table
let allFlights = [];

const moreInfoDiv = document.getElementById("moreInfoFlight");
const closeIcon = document.querySelector("label");


/**
 * Update the state of all flights. If a flight has arrived, it will remove itself after 60 seconds.
 */
const statusUpdateFlights = () => {

  // status situations of the flights
  const statusUpdates = ["DELAYED", "ON_TIME"];

  // change the status of each fly
  allFlights.forEach(flight => {

    if (flight.canChangeStatus) {

      switch (flight.currentStatus) {
        case "DEPARTING":
          flight.currentStatus = statusUpdates[Math.floor(Math.random() * statusUpdates.length)];
          flight.statusCell.textContent = flight.currentStatus;
          if (flight.currentStatus === "DELAYED") {
            flight.row.classList.add("delay");
          }
          break;
        case "DELAYED":
          flight.row.classList.remove("delay");
          flight.currentStatus = "ON_TIME";
          flight.statusCell.textContent = flight.currentStatus;
          break;
        case "ON_TIME":
          flight.currentStatus = "ARRIVED";
          flight.statusCell.textContent = flight.currentStatus;
          break;
        case "ARRIVED":
          setTimeout(() => flight.row.remove(), 50000);
          break;
      }

    } else {
      flight.canChangeStatus = true;
    }
  });
};



/**
 * Create a date string in the format DD-MM.
 */
const createDate = () => {
  const day = String(new Date().getDate()).padStart(2, "0");
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  return `${day}-${month}`;
};


/**
 * Create a time string with added random minutes.
 * @param {number[]} timeOffsets - An array of minute offsets.
 */
const createTime = (timeOffsets) => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes() + timeOffsets[Math.floor(Math.random() * timeOffsets.length)];
  if (minutes >= 60) {
    hour++;
    minutes -= 60;
  }
  return `${hour}:${String(minutes).padStart(2, "0")}`;
};


/**
 * Generate a random flight number.
 */
const createFlightNumber = (prefixes) => {
  return Array(3)
    .fill(null)
    .map(() => prefixes[Math.floor(Math.random() * prefixes.length)])
    .join("");
};


/**
 * Show more information about the selected flight.
 * @param {object} flight - Flight object containing information.
 */
const showMoreInfo = (flight) => {

  // if an fly is aleready open, cannot open another one, must close it before
  if (moreInfoDiv.classList.contains("show")) return;

  // add a class that shows the div (from display: none to display: block)
  moreInfoDiv.classList.add("show");

  const { date, time, destination, number, currentStatus } = flight;
  document.querySelector("p.date").textContent = date;
  document.querySelector("p.time").textContent = time;
  document.querySelector("p.destination").textContent = destination;
  document.querySelector("p.number").textContent = number;
  document.querySelector("p.status").textContent = currentStatus;
};



/**
 * Add a new flight to the table and initialize its data.
 */
const updateFlights = () => {
  const timeOffsets = [2, 5, 7, 10, 13, 15];
  const destinations = ["Japan", "USA", "Italy", "Australia", "Spain", "Canada"];
  const flightPrefixes = ["A1", "3L", "U2", "BA", "LH"];
  const flightStatuses = ["DEPARTING", "DELAYED", "ON_TIME", "ARRIVED"];

  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");
  tbody.append(tr);

  const tdDate = document.createElement("td");
  const tdTime = document.createElement("td");
  const tdDestination = document.createElement("td");
  const tdFlightNumber = document.createElement("td");
  const tdStatus = document.createElement("td");

  const date = createDate();
  const time = createTime(timeOffsets);
  const destination = destinations[Math.floor(Math.random() * destinations.length)];
  const flightNumber = createFlightNumber(flightPrefixes);
  const status = flightStatuses[Math.floor(Math.random() * flightStatuses.length)];

  tdDate.textContent = date;
  tdTime.textContent = time;
  tdDestination.textContent = destination;
  tdFlightNumber.textContent = flightNumber;
  tdStatus.textContent = status;

  if (status === "DELAYED") tr.classList.add("delay");

  tr.append(tdDate, tdTime, tdDestination, tdFlightNumber, tdStatus);

  const flight = {
    row: tr,
    date: date,
    time,
    destination,
    number: flightNumber,
    statusCell: tdStatus,
    currentStatus: status,
    canChangeStatus: false,
    interactiveRow() {
      this.row.addEventListener("click", () => showMoreInfo(this));
    },
  };

  flight.interactiveRow();
  allFlights.push(flight);
};


// after minimun 10s, will create a new fly object
setInterval(() => {
  updateFlights();
  statusUpdateFlights();
}, 10000);

// event listener activated when the user click on a fly
closeIcon.addEventListener("click", () => {
  moreInfoDiv.classList.remove("show");
});