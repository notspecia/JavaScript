## Author Details

* Name: Gabriele Speciale
* Date: 2024-06-08
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description
● Implement the arrivals page of an airport such as this one
 ○ Create a complete proper webpage with a title, description and all other HTML tags 
 ○ Add Javascript and CSS files
 ○ Include as much detail as you can to each flight row
 ○ Add a Status to each flight. Status can be DEPARTING, DELAYED, ON_TIME, ARRIVED, etc

● Simulate a real arrivals list
 ○ The list should start empty and update every 10 seconds
 ○ Flights that have arrived should be removed after 60 seconds
 ○ Flights should change status in time. E.g. departing>on_time>delayed>arrived
 ○ Flights that are delayed should be displayed in red
 ○ New flights should be added to the bottom of the list
 ○ The list should be sorted by date and hour




## Approach to Solution

### 1. Variable Declaration
- **Arrays**:
- `numbersTime`: Contains small numbers to add to the current time for flight times.
- `destinations`: Contains possible flight destinations.
- `numberFlight`: Contains prefixes for flight numbers.
- `statusFlys`: Contains possible flight statuses.

- **Global Variable**:
- `allTheFlys`: An array to keep track of all flights.

### 2. Status Update Function
- **Function `statusUpdateFlys`**:
- Iterate through `allTheFlys` array to update each flight's status.
- Implement status transitions:
- From `DEPARTING` to either `DELAYED` or `ON_TIME` (random choice).
- From `DELAYED` to `ON_TIME`.
- From `ON_TIME` to `ARRIVED`.
- Remove flights with `ARRIVED` status after 60 seconds (60-10 -> 50 seconds).

### 3. Flight Addition Function
- **Function `updateFlys`**:
- Create a new flight row with the current date, randomized time, destination, flight number, and initial status.
- Append the new row to the table body.
- Add the flight object to `allTheFlys`.

### 4. Periodic Updates
- **Set Intervals**:
- Use `setInterval` to call `updateFlys` every 10 seconds to add a new flight.
- Use `setInterval` to call `statusUpdateFlys` every 10 seconds to update flight statuses.





## files

* index.html
* main.js
* style.css