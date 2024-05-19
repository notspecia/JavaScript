/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-03-20
 * @description 
 * ● Store your current age into a variable.
   ● Store a maximum age into a variable.
   ● Store the amount of coffee you drink per day (as a number).
   ● Calculate how much coffee you would drink for the rest of your life.
   ● Output the result to the screen like so: "You will need NN cups of coffee to last you until the ripe old age of X".
 */


// dichiarazione variabili
let age;        //età attuale
let maxage;     //età massima di vita
let coffe_day;   //quanti caffè al giorno bevo
let coffe_life;  //quanti caffè berrò per i prossimi anni

// inizialiazzazione variabili
age = 19;
maxage = 30;
coffe_day = 2;

// calcolo di quanti caffè dovro bere per X anni
coffe_life = (maxage - age) * (coffe_day * 365);

// età massima di vita ora diventa quanti anni devono trascorrere ancora
maxage -= age;

// stampa su console di quanti caffe dovrò beere per il resto della vita
console.log("avrò bisogno di bere", coffe_life, ", per i prossimi", maxage, "anni");
