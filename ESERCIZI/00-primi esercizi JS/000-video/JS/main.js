function nameString(name) {
    let b = "cool";
    let result = name.concat(" ", b);
    return result;
}

console.log(nameString("gabry")); //attenzione al valore di ritorno! andrà a stampare la stringa di testo prodotta nella funzione
console.log(typeof(nameString("gabry")));
