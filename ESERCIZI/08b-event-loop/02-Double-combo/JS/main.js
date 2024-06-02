/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-05-30
 * @description 
 * 
Create a simulation of a turn-based combat system in a Dungeons and Dragons game using two queues of cards

● the card types are
    ○ characters, spells, or enemies

● create two queues: one for each player's cards

● fill each queue with N random cards of different types

● each card should be an object with appropriate
    ○ properties e.g. strength, defense, healthh
    ○ methods e.g. attack(enemy), buff(character), damage(character), duel(character)
 
Turn-based Combat:

● on each turn, draw one card from the start of each player's queue

● based on the type of cards drawn, certain combinations might trigger 
special actions or effects, such as:
    ○ Character vs. Enemy: Attack action, dealing damage to the enemy
    ○ Spell vs. Character: Buff action, boosting the character's attributes or Damage action, 
      damaging or killing the character
    ○ Character vs. Character: Duel action, comparing attributes to determine the winner
    ○ Enemy vs. Enemy: No effect
    
● award points to each player based on the remaining healthh of their used 
character cards
*/





// andiamo a creare e riempire le que dei 2 giocatori, con delle carte vergine
let que1 = createQueCards();
let que2 = createQueCards();

// andiamo a modificare le carte delle 2 que, dandogli delle caratteristiche
fillQueCards(que1);
fillQueCards(que2);
console.log(que1, que2);


/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function createQueCards() {

    // dichiarazione variabili
    const max_cards = 30;
    const min_cards = 10;
    let que = [];
    let card = {};

    // andiamo a creare un numero casuale di carte (oggetti) da inserire nelle que
    let numberOfCards = Math.round(Math.random() * (max_cards - min_cards) + min_cards);

    // andiamo a inserire le carte (oggetti), all'interno della que
    for (let i = 0; i < numberOfCards; i++) {

        que.push(card);
    }

    return que;
}




/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function fillQueCards(que) {

    // dichiarazione variabili
    const max_points_stas = 40;
    const min_points_stats = 20;

    // array contenente i vari tipi di carte
    const types = ["character", "spell", "enemy"];

    // array contenente gli effetti degli incantesimi
    const effect = ["shield", "healing", "stun", "curse", "debuff"];



    // andiamo a riempire con delle caratteristiche tutte le carte della que
    for (let i = 0; i < que.length; i++) {

        // definiamo la tipologia di carta (characters, spells, enemies)
        que[i] = {
            type: types[Math.floor(Math.random() * types.length)],
        };



        // se la carta è di tipo "character"
        if (que[i].type === "character") {
            que[i].strength = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].speed = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].health = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].method1 = "attack-enemy";
            que[i].method2 = "duel-vs-character";




            // se la carta è di tipo "spell"
        } else if (que[i].type === "spell") {
            que[i].power = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].typeEffect = effect[Math.floor(Math.random() * effect.length)];

            // se la spell ha effetti positivi di buff
            if (que[i].typeEffect === "shield" || que[i].typeEffect === "healing") {
                que[i].method1 = "buff-character";

                // se la spell ha effetti negativi di attacco
            } else {
                que[i].method1 = "damage-character";

            }




            // se la carta è di tipo "enemy"
        } else {
            que[i].strength = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].speed = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].health = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].method1 = "attack-character";

        }

    }

}




/**
 * Nome della funzione
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
function letsPlay(que1, que2) {

    // tabellone che aggiorna il punteggio dei 2 players
    console.log(`
    +---------------------------------------------------------------+     
    |                      PLAYERS SCORE UPDATE                     |
    |---------------------------------------------------------------|              
    |                                                               |
               PLAYER 1 --> ${pointsPlayer1}            PLAYER 2 --> ${pointsPlayer2}              
    |                                                               |                                                             
    +---------------------------------------------------------------+     
    \n\n\n`);


    //  il gioco finisce  quando uno dei 2 mazzi si esaurisce
    if (que1.length === 0 || que2.length === 0) {

        // decretiamo il vincitore in base al punteggio accumalato dai giocatori
        if (pointsPlayer1 === pointsPlayer2) {
            console.log("draw!");

        } else if (pointsPlayer1 > pointsPlayer2) {
            console.log("player 1 win!");

        } else {
            console.log("player 2 win!");

        }

        // stoppiamo il gioco! game over
        clearInterval(timerId);

        return;
    }



    // se i mazzi sono ancora pieni, SI GIOCA!

    // andiamo a pescare le prima carta delle 2 que, e mostriamole stampandole
    let cardPlayer1 = que1.shift();
    let cardPlayer2 = que2.shift();

    console.log(cardPlayer1);
    console.log(cardPlayer2);



    // vari combattimenti in base alla tipologie di carte
    switch (true) {

        // ! character VS character (duel) !
        case cardPlayer1.type === "character" && cardPlayer2.type === "character":

            let totalStas1 = 0;
            let totalStas2 = 0;

            // calcoliamo le statistiche totali delle 2 carte chi ha il totale + alto vince
            totalStas1 = cardPlayer1.strength + cardPlayer1.speed + cardPlayer1.health;
            totalStas2 = cardPlayer2.strength + cardPlayer2.speed + cardPlayer2.health;

            console.log(`it's a DUEL!⚔️

- TOTAL STAS OF CARD PLAYER1: ${totalStas1}
- TOTAL STAS OF CARD PLAYER2: ${totalStas2}\n\n`);

            // decretiamo il vincitore del duello, e aggiungiamo come punti i suoi HP 
            if (totalStas1 === totalStas2) {
                console.log("DRAW!");

            } else if (totalStas1 > totalStas2) {
                pointsPlayer1 += cardPlayer1.health;
                console.log(`PLAYER1 WIN! + ${cardPlayer1.health} POINTS`);

            } else {
                pointsPlayer2 += cardPlayer2.health;
                console.log(`PLAYER2 WIN! + ${cardPlayer2.health} POINTS`);

            }

            break;






        //! character VS enemy || enemy VS character (attack) !
        case cardPlayer1.type === "character" && cardPlayer2.type === "enemy" || cardPlayer1.type === "enemy" && cardPlayer2.type === "character":


            // se le 2 carte hanno la stessa velocità, non si combatterà
            if (cardPlayer1.speed === cardPlayer2.speed) {
                console.log("FIGHT DRAW!");

                /* se la velocità della carta 1 è > della carta 2, allora carta 1 attaccherà per prima
                lo scontro termina nel momento in cui la vita di una delle 2 carte finisce */
            } else if (cardPlayer1.speed > cardPlayer2.speed) {

                do {
                    cardPlayer2.health -= cardPlayer1.strength;

                    console.log(`PLAYER1 ⚔️ATTACK PLAYER2⚔️ -${cardPlayer1.strength} HP!
CURRENT HP❤️ OF PLAYER 2: ${cardPlayer2.health}HP\n\n`);

                    if (cardPlayer2.health > 0) {
                        cardPlayer1.health -= cardPlayer2.strength;

                        console.log(`PLAYER2 ⚔️ATTACK PLAYER1⚔️ -${cardPlayer2.strength} HP!
CURRENT HP❤️ OF PLAYER 1: ${cardPlayer1.health}HP\n\n`);

                    }

                } while (cardPlayer1.health > 0 && cardPlayer2.health > 0);



                if (cardPlayer1.health > 0) {
                    pointsPlayer1 += cardPlayer1.health;
                    console.log(`PLAYER1 WIN! + ${cardPlayer1.health} POINTS`);

                } else {
                    pointsPlayer2 += cardPlayer2.health;
                    console.log(`PLAYER2 WIN! + ${cardPlayer2.health} POINTS`);

                }




                /* se la velocità della carta 2 è > della carta 1, allora carta 2 attaccherà per prima
                lo scontro termina nel momento in cui la vita di una delle 2 carte finisce */
            } else {

                do {
                    cardPlayer1.health -= cardPlayer2.strength;
                    console.log(`PLAYER2 ⚔️ATTACK PLAYER1⚔️ -${cardPlayer2.strength} HP!
CURRENT HP❤️ OF PLAYER 1: ${cardPlayer1.health}HP\n\n`);

                    if (cardPlayer1.health > 0) {
                        cardPlayer2.health -= cardPlayer1.strength;

                        console.log(`PLAYER1 ⚔️ATTACK PLAYER2⚔️ -${cardPlayer1.strength} HP!
CURRENT HP❤️ OF PLAYER 2: ${cardPlayer2.health}HP\n\n`);
                    }

                } while (cardPlayer1.health > 0 && cardPlayer2.health > 0);




                if (cardPlayer1.health > 0) {
                    pointsPlayer1 += cardPlayer1.health;
                    console.log(`PLAYER1 WIN! + ${cardPlayer1.health} POINTS`);

                } else {
                    pointsPlayer2 += cardPlayer2.health;
                    console.log(`PLAYER2 WIN! + ${cardPlayer2.health} POINTS`);

                }
            }

            break;



        //! character(player1) VS spell(player2) (buff character / damage character) !
        case cardPlayer1.type === "character" || cardPlayer1.type === "enemy" && cardPlayer2.type === "spell":

            do {

                // nel caso la spell ha effetto BUFF
                if (cardPlayer2.method1 === "buff-character") {
                    cardPlayer1.health += cardPlayer2.power;

                    console.log(`PLAYER2 USE ${cardPlayer2.typeEffect} ON PLAYER1 +${cardPlayer2.power} HP!
CURRENT HP❤️ OF PLAYER1: ${cardPlayer1.health}HP\n\n`);

                    // nel caso la spell ha effetto DAMAGE
                } else {
                    cardPlayer1.health -= cardPlayer2.power;
                    console.log(`PLAYER2 USE ${cardPlayer2.typeEffect} ON PLAYER1 -${cardPlayer2.power} HP!
CURRENT HP❤️ OF PLAYER1: ${cardPlayer1.health}HP\n\n`);

                    // se la spell fa abbastanza danno da uccidere il personaggio/nemico di PLAYER1
                    if (cardPlayer1.health <= 0) {
                        console.log(`card of PLAYER1 destroyed! no points!`);
                        break;
                    }

                }



            } while (cardPlayer2.type !== "spell");


            break;






        //! spell VS character (buff character / damage character) !
        // case cardPlayer1.type === "spell" && cardPlayer2.type === "character":

        //     break;


        default:
            console.log("NO EFFECTS!")
            break;
    }
    console.log("\n\n\n\n\n\n\n\n");
}




// iniziamo il combattimento! il turno si svolge ogni 5 secondi di intervallo di tempo
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
let timerId = setInterval(letsPlay, 2000, que1, que2);
