// export singolo funzione usando DEFAULT
export default function (num1, num2) {
    return num1 + num2;
}









// export di molteplici variabili e funzioni
export const PI = 3.14;


export function calcCircumfrence(radius) {
    return 2 * radius * PI;
}

export function calcArea(radius) {
    return PI * radius * radius;
}

export function calcVolume(radius) {
    return 4 * PI * radius * radius * radius / 3;
}

//!!!!! modo + compatto per fare una esportazione unica !!!!
// export { PI, calcArea, calcCircumfrence, calcVolume }; 