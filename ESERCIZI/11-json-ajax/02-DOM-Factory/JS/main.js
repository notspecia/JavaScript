/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-07-09
 * @description 
 * ● Write your cars and factory objects as JSON strings in a variable
   
   ● Parse them with JSON.parse();

   ● Write each of them to the DOM in a list
    ○ You should use a styled CSS <ul><li> list with no bullets
    ○ Don’t use <table>
 */

// object which contains the json object (from exsercise 1) writed into string in JS variable
let objectJson = `{
    "name": "Toyota agency",
    "location": "Tokyo, Japan",
    "capacityCars": 4500,
    "isOperational": true,
    "departments": [
        "assembly",
        "inspections",
        "painting",
        "quality control"
    ],
    "manager": {
        "name": "Speciale Luigi",
        "employeeId": "02310LS",
        "contacts": [
            "email",
            "conferences"
        ],
        "coFounders": [
            {
                "name": "Mario Rossi",
                "age": 53,
                "married": true
            },
            {
                "name": "Giorgio Bianchi",
                "age": 23,
                "married": false
            }
        ]
    },
    "established": 2012,
    "cars": [
        {
            "id": 1,
            "make": "Toyota",
            "model": "Mazda",
            "year": 2022,
            "color": "black",
            "isElectric": true,
            "features": [
                "air conditioning",
                "auto drive",
                "bluetooth"
            ],
            "owner": {
                "name": "Speciale Gabriele",
                "licenseNumber": "ABCD33412",
                "contacts": [
                    "email",
                    "phone",
                    "fax"
                ]
            },
            "lastInspectionDate": null
        },
        {
            "id": 2,
            "make": "Toyota",
            "model": "Yaris",
            "year": 2010,
            "color": "gray",
            "isElectric": false,
            "features": [
                "air conditioning",
                "power steering"
            ],
            "owner": {
                "name": "Conti Carlo",
                "licenseNumber": "WE46273",
                "contacts": [
                    "email",
                    "pec",
                    "fax"
                ]
            },
            "lastInspectionDate": null
        },
        {
            "id": 3,
            "make": "Toyota",
            "model": "Corolla",
            "year": 2020,
            "color": "blue",
            "isElectric": true,
            "features": [
                "air conditioning",
                "auto drive",
                "phonecall device"
            ],
            "owner": {
                "name": "Barri Laura",
                "licenseNumber": "EL45DF2",
                "contacts": [
                    "phone",
                    "email"
                ]
            },
            "lastInspectionDate": null
        },
        {
            "id": 4,
            "make": "Toyota",
            "model": "RAV4",
            "year": 2015,
            "color": "red",
            "isElectric": true,
            "features": [
                "power steering",
                "auto drive",
                "bluetooth"
            ],
            "owner": {
                "name": "Bistrotti Luca",
                "licenseNumber": "LU21ME56",
                "contacts": [
                    "email",
                    "phone",
                    "fax"
                ]
            },
            "lastInspectionDate": null
        },
        {
            "id": 5,
            "make": "Toyota",
            "model": "Hilux",
            "year": 2023,
            "color": "green",
            "isElectric": true,
            "features": [
                "air conditioning",
                "auto drive",
                "bluetooth",
                "power steering"
            ],
            "owner": {
                "name": "Nostri Daniele",
                "licenseNumber": "DA32M127",
                "contacts": [
                    "email",
                    "instagram",
                    "facebook"
                ]
            },
            "lastInspectionDate": null
        }
    ]
}`;


// conversion from the string containing the object JSON, in question JS
let objectJavaScript = JSON.parse(objectJson);



/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function createInformationsFactoryCars(text, list) {

    /* elemento <li> che conterrà l'informazione del testo passato della factory, 
    e che verrà appesso alla <ul> factory */
    let infoOfList = document.createElement("li");
    infoOfList.textContent = text;

    // append the X information <li> about the factory into the list <ul>
    list.append(infoOfList);

}


/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function createInformationsManagerFoundersFactory(objectManager, listFactory) {

    // schedulazione funzioni che permettono di inserire informazioni del founder dagli oggetti, all'interno dei <li> della <ul> factory
    createInformationsFactoryCars(`MANAGER--> ${objectManager.name}, ID: ${objectManager.employeeId}, CONTACTS: ${objectManager.contacts.join(", ")}`, listFactory);

    // ciclo che schedula per ogni co-founder presente nell'array, le sue informazioni e inserirle nell' <li> della lista <ul> factory 
    for (let i = 0; i < objectManager.coFounders.length; i++) {
        createInformationsFactoryCars(`${i + 1} CO-FOUNDERS--> ${objectManager.coFounders[i].name}, AGE: ${objectManager.coFounders[i].age},  IS MARRIED?: ${objectManager.coFounders[i].married}`, listFactory);
    }

}


/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function createInformationsOwnerCars(objectOwner, listCars) {

    // schedulazione funzioni che permettono di inserire informazioni dell'owner della car dagli oggetti, all'interno dei <li> della <ul> cars
    createInformationsFactoryCars(`OWNER--> ${objectOwner.name}, LICENSE: ${objectOwner.licenseNumber}, CONTACTS: ${objectOwner.contacts.join(", ")}`, listCars);
}


/**
 * function generateFactory
 * inizialmente andrà a prendere dall'oggetto JSON le informazioni della factory e appenderle all'interno
 * dell'array `cars` presente nell'oggetto JSON citato prima
 * del document HTML, successivamente andrà ad invocare una funzione che si occuperà delle macchine all'interno
 * @param {object} object - DescrizioneInput1
 */
function generateFactoryCars(object) {

    // title <h1> will has the name of the factory
    let titleFactory = document.createElement("h1");
    titleFactory.textContent = `${object.name}`;

    // append the title of the factory at the start of the body
    document.body.prepend(titleFactory);

    /* get the <ul> a list which will contains the info of the factory, 
    from the document and stored into a variable */
    let listFactory = document.getElementById("factoryInfo");

    // schedulazione funzioni che permettono di inserire contenuto dagli oggetti, all'interno dei <li> della <ul> factory
    createInformationsFactoryCars(`LOCATION: ${object.location}`, listFactory);
    createInformationsFactoryCars(`CAPACITY CARS: ${object.capacityCars}`, listFactory);
    createInformationsFactoryCars(`IS OPERATIONAL?: ${object.isOperational}`, listFactory);
    createInformationsFactoryCars(`DEPARTMENTS: ${object.departments.join(", ")}`, listFactory);
    createInformationsManagerFoundersFactory(object.manager, listFactory);
    createInformationsFactoryCars(`DATE ESTABLISHED: ${object.established}`, listFactory);


    /* get the <ul> a list which will contains the cars, 
    from the document and stored into a variable */
    let listCars = document.getElementById("listCarsInfo");

    for (let i = 0; i < object.cars.length; i++) {

        // creation of an title of the car 
        let titleCar = document.createElement("h2");
        titleCar.textContent = `${i + 1} CAR, ${object.cars[i].make} ${object.cars[i].model}`;

        // append the title of the car into the <ul> cars list
        listCars.append(titleCar);

        // schedulazione funzioni che permettono di inserire contenuto dagli oggetti, all'interno dei <li> della <ul> cars
        createInformationsFactoryCars(`ID: ${object.cars[i].id}`, listCars);
        createInformationsFactoryCars(`YEAR PRODUCTION: ${object.cars[i].year}`, listCars);
        createInformationsFactoryCars(`COLOR: ${object.cars[i].color}`, listCars);
        createInformationsFactoryCars(`IS ELECTRIC?: ${object.cars[i].isElectric}`, listCars);
        createInformationsFactoryCars(`FEATURES OF THE CAR: ${object.cars[i].features.join(", ")}`, listCars);
        createInformationsOwnerCars(object.cars[i].owner, listCars);
        createInformationsFactoryCars(`LAST INSPECTION DATE: ${object.cars[i].lastInspectionDate}`, listCars);
    }
}


// invocazione della funzione che genera le informazioni dell'agenzia automobilistica e delle sue macchine in 2 <ul> diverse
generateFactoryCars(objectJavaScript);