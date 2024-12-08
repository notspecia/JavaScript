//! FETCH data from an API using JS
/* La Fetch API è una funzione moderna di JavaScript per fare richieste HTTP / HTTPS  e prendere dei dati, dati come:
- JSON
- immagini
- files

È utilizzata per interagire con risorse esterne (come un'API), È più semplice e potente rispetto a tecnologie più vecchie 
come XMLHttpRequest. 

* fetch(url, {method}) ->  url: il link della risorsa     method: è un oggetto che contiene delle opzioni, 
*                                                                 default è quello "GET" per ricevere delle risorse   
*                                                                 "POST" per inviare alcuni dati...

in questo esempio andiamo a prendre delle immagini di pokemon usando il fetch (in base a che pokemon è scritto in un campo di input) */



//? --------------------------------------- FETCH() con .then() + .catch() --------------------------------------------------------------------



const inputName = document.querySelector("input#pokemonName");
const buttonFetchPokemon = document.querySelector("button");
const pokemonImage = document.querySelector("img");
const pokemonCry = document.querySelector("audio");


const APIpokemon = `https://pokeapi.co/api/v2/pokemon/`;

buttonFetchPokemon.addEventListener("click", function () {

    pokemonImage.classList.remove("shake");

    fetch(`${APIpokemon}${inputName.value}`.toLowerCase(), {
        method: "GET"
    })
        .then(resolve => { return resolve.json(); }) // trasferisco il resolve.json() PROMISE, nel prossimo .then per visualizzarla
        .then(info => { console.log(info); return info; }) // passo usato per visualizzare l'oggetto con le caratteristiche del pokemon
        .then(data => {
            pokemonImage.src = data.sprites.front_default;
            pokemonImage.style.display = "Block";
            pokemonCry.src = data.cries.legacy;
            pokemonImage.classList.add("shake");
        }) // applichiamo l'immagine al src tramite lo sprite preso dall'oggetto (data)
        .catch(error => { console.log(`error to try to get API of pokemons!: ${error}`) });
});



//? --------------------------------------- ASYNC E AWAIT con fetch() ---------------------------------------------------------------



// const inputName = document.querySelector("input#pokemonName");
// const buttonFetchPokemon = document.querySelector("button");
// const pokemonImage = document.querySelector("img");
// const pokemonCry = document.querySelector("audio");


// const APIpokemon = `https://pokeapi.co/api/v2/pokemon/`;

// // STESSO FUNZIONAMENTO USANDO ASYNC E AWAIT ( uso di try{} + catch{}   al posto di .then() + .catch() )
// buttonFetchPokemon.addEventListener("click", async function () {

//     pokemonImage.classList.remove("shake");

//     // in caso di successo nella richiesta fetch()ò
//     try {
//         const response = await fetch(`${APIpokemon}${inputName.value}`.toLowerCase(), {
//             method: "GET"
//         });

//         const data = await response.json();
//         console.log(data);

//         pokemonImage.src = data.sprites.front_shiny;
//         pokemonImage.style.display = "Block"
//         pokemonCry.src = data.cries.legacy;
//         pokemonImage.classList.add("shake");

//         // in caso di errore nella richiesta fetch()
//     } catch (error) {
//         console.log("errore!");
//     }
// });