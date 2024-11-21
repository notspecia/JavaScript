
const text = document.querySelector("p");
const inputName = document.querySelector("input#inputName");
const inputAge = document.querySelector("input#inputAge")


// parametro di default se non venisse passato alla funzione!!
function addInfo(name = "Missigno", age = null) {
    text.textContent = `hello! ${name} and u're ${age}`;
}

document.querySelector("button").addEventListener("click", () => {
    addInfo(inputName.value);
});