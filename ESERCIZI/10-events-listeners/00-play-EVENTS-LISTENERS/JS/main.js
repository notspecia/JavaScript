//! 1. AGGIUNGIAMO UNA CLASSE AL BOTTONE SUL CLICK PER COLORARL (FUNZIONE DIRETTA)
// let button = document.getElementById("onClick");

// button.addEventListener("click", function () {
//     button.classList.add("colorButton");
// });





//! 2. AGGIUNGIAMO UNA CLASSE AL BOTTONE SUL CLICK PER COLORARLO (FUNZIONE SEPARATA)
// function changeColor() {
//     button.classList.add("colorButton");
// }


// let button = document.getElementById("onClick");
// button.addEventListener("click", changeColor);





//! 1. ANDIAMO A CAMBIARE TRAMITE IL CLICK DEL BOTTONE IL BG COLOR DEL BODY (FUNZIONE DIRETTA)
// let button = document.getElementById("onClick");

// function randomChoiceColor(valueColor) {
//     let colorRgb = Math.round(Math.random() * (valueColor - 1) + 1);
//     return colorRgb;
// }

//? settiamo i colori dell'RGB randomicamente, all'interno delle ``, 
//? come se fosse un valore di una proprietà sottoforma di stringa

//? event listener
// button.addEventListener("click", () => {
//     const randomColor = `rgb(${randomChoiceColor(255)} ${randomChoiceColor(255)} ${randomChoiceColor(255)})`;
//     document.body.style.backgroundColor = randomColor;
// });





//! 2. ANDIAMO A CAMBIARE TRAMITE IL CLICK DEL BOTTONE IL BG COLOR DEL BODY (FUNZIONE SEPARATA)
let button = document.getElementById("onClick");

function randomChoiceColor(valueColor) {
    let colorRgb = Math.round(Math.random() * (valueColor - 1) + 1);
    return colorRgb;
}

//? settiamo i colori dell'RGB randomicamente, all'interno delle ``,
//? come se fosse un valore di una proprietà sottoforma di stringa
function colorBody() {
    const randomColor = `rgb(${randomChoiceColor(255)} ${randomChoiceColor(255)} ${randomChoiceColor(255)})`;
    document.body.style.backgroundColor = randomColor;
}

//? event listener
button.addEventListener("click", colorBody);






// !!!!! TESTIAMO I VARI TIPI DI EVENTO !!!!!!

// ? scroll
document.addEventListener("scroll", () => {
    console.log("u are scrolling the page!");
})



// ? resize la window della pagina
function alertResizing() {
    alert("window resized!");
}

window.addEventListener('resize', alertResizing);



// ? hover con il mouse su un elemento
let title = document.querySelector("h1");

title.addEventListener("mousemove", () => {
    title.classList.add("mouseHover");
})


