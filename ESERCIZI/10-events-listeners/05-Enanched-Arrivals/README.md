## Author Details

* Name: Gabriele Speciale
* Date: 2024-06-08
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description
● Start with the ‘Arrivals’ exercise from a previous lesson
  
 ● Add the following features:
  ○ When the user clicks a row, it should expand to show more information about the flight
  ○ When the user clicks an open row it should close again
  ○ If the user clicks a row, any other open rows should close
 
 ■ Like in this example of an accordion
  ○ Add a ‘Departures’ section with departing flights
  ○ The user should be able to switch between Arrivals and Departures with a fade-in/fade-out 
  animation




## Approach to Solution

### 1. Variable Declaration

#### Arrays
- `numbersTime`: Contains small numbers to add to the current time for flight times
- `destinations`: Contains possible flight destinations
- `numberFlight`: Contains prefixes for flight numbers
- `statusFlys`: Contains possible flight statuses

#### Global Variable
- `allTheFlys`: An array to keep track of all flights

### 2. Status Update Function

#### Function `statusUpdateFlys`
- Iterates through `allTheFlys` array to update each flight's status
- Implements status transitions:
  - From `DEPARTING` to either `DELAYED` or `ON_TIME` (random choice)
  - From `DELAYED` to `ON_TIME`
  - From `ON_TIME` to `ARRIVED`
- Removes flights with `ARRIVED` status after 60 seconds

### 3. Flight Addition Function

#### Function `updateFlys`
- Creates a new flight row with the current date, randomized time, destination, flight number, and initial status
- Appends the new row to the table body
- Adds the flight object to `allTheFlys`
- Implements click event listener on each row to show more information and manage row toggling

### 4. Periodic Updates

#### Set Intervals
- Uses `setInterval` to call `updateFlys` every 10 seconds to add a new flight
- Uses `setInterval` to call `statusUpdateFlys` every 10 seconds to update flight statuses

### 5. Additional Features

#### Click Row Expansion
- Allows users to click on a flight row to expand and show detailed flight information
- Clicking an open row closes it, ensuring only one row is expanded at a time
- Implements an accordion-style behavior for row expansion

#### Departures Section
- Includes a separate section for departing flights
- Enables switching between Arrivals and Departures with fade-in/fade-out animations

#### UI Interaction
- Enhances user interaction with clickable rows and dynamic content display
- Integrates CSS for styling buttons, flight rows, and additional flight information display

### 6. JavaScript Implementation

#### Initial Setup
- Selects necessary HTML elements and initializes variables for flight management
- Sets up event listeners for row clicks and UI interactions

#### Functionality Expansion
- Adds functionality to handle row expansion and collapse on user interaction
- Enhances flight status management with transitions and automatic removal of arrived flights

#### Scalability and Maintainability
- Designs the system to scale with additional features and maintainable code structure
- Ensures clear separation of concerns between data management, UI interaction, and status updates







## files

* index.html
* main.js
* style.css