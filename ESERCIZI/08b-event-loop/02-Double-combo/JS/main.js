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




/**
 * function createQueCards
 * andrà a generare una queue (array), che conterrà delle carte inizialmente vuote (oggetti), ogni queue potrà
 * contenere dalle 10 alle 30 carte, il numero di carte sarà randomico utilizzando Math.round(Math.random()*...)
 * @returns {object} - an array (queue), contenente delel carte (oggetti)
 */
function createQueCards() {

    // dichiarazione variabili
    const max_cards = 30;
    const min_cards = 10;
    let queue = []; // queue containing cards
    let card = {};

    // andiamo a creare un numero casuale di carte (oggetti) da inserire nelle queue del giocatore
    let numberOfCards = Math.round(Math.random() * (max_cards - min_cards) + min_cards);

    // andiamo a inserire tramite il metodo .push le carte (oggetti), al fondo della queue
    for (let i = 0; i < numberOfCards; i++) {
        queue.push(card);
    }

    return queue;
}




/**
 * function fillQueCards
 * riceve come parametro la que del giocatore che contiene delle carte (oggetti), questa funzione
 * si occuperà a dare delle caratteristiche alle carte (type, strenght, speed, healt ...), queste statistiche
 * avranno un punteggio minimo di 20 e massimo di 40 (scelto randomicamente)
 * - CHARACTER --> può affrontare a duello un altro CHARACTER / combattere con un ENEMY
 * - SPELL --> può avere un effeto magico positivo sul ENEMY o CHARACTER (buff)
 * @param {object} que - array del giocatore contenente le carte
 * @returns {TipoOutput} - DescrizioneOutput
 */
function fillQueCards(que) {

    // punteggio minimo e massimo delle statistiche (dinamico)
    const max_points_stas = 40;
    const min_points_stats = 20;

    // array contenente i vari tipi di carte
    const types = ["character", "spell", "enemy"];

    // array contenente gli effetti degli incantesimi (alcuni sono di buff altri di nerf)
    const effect = ["shield", "healing", "stun", "curse", "debuff"];


    // --------andiamo a riempire con delle caratteristiche tutte le carte della que del giocatore--------
    for (let i = 0; i < que.length; i++) {

        // definiamo la tipologia di carta (characters, spells, enemies)
        que[i] = {
            type: types[Math.floor(Math.random() * types.length)],
        };

        // se la carta è di tipo "character":
        if (que[i].type === "character") {
            que[i].strength = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].speed = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].health = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].method1 = "attack-enemy";
            que[i].method2 = "duel-vs-character";


            // se la carta è di tipo "spell" + andiamo ad applicare alla spell un determinato effetto:
        } else if (que[i].type === "spell") {
            que[i].power = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].typeEffect = effect[Math.floor(Math.random() * effect.length)];

            // se la spell ha effetti positivi di buff:
            if (que[i].typeEffect === "shield" || que[i].typeEffect === "healing") {
                que[i].method1 = "buff-character";

                // se la spell ha effetti di nerf:
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
function whoWins(pointsPlayer1, pointsPlayer2) {

    // decretiamo il vincitore in base al punteggio accumalato dai giocatori
    if (pointsPlayer1 === pointsPlayer2) {
        console.log("draw! GAME OVER");

    } else if (pointsPlayer1 > pointsPlayer2) {
        console.log("player 1 win! GAME OVER");

    } else {
        console.log("player 2 win! GAME OVER");
    }

    // stoppiamo il gioco! game over
    clearInterval(timerId);

}



// ---------------- vari combattimenti in base alla tipologie di carte -------------------

function letsPlay(cardPlayer1, cardPlayer2) {

    switch (true) {

        // ! character VS character (duel) !
        case cardPlayer1.type === "character" && cardPlayer2.type === "character":

            charVSchar(cardPlayer1, cardPlayer2);
            break;



        //! character VS enemy || enemy VS character (attack) !
        case cardPlayer1.type === "character" && cardPlayer2.type === "enemy" || cardPlayer1.type === "enemy" && cardPlayer2.type === "character":

            charVSenemy(cardPlayer1, cardPlayer2);
            break;



        //! character / enemy (player1) VS spell(player2) (buff character / damage character) !
        //! character / enemy (player2) VS spell(player1) (buff character / damage character) !
        case (cardPlayer1.type === "character" || cardPlayer1.type === "enemy" && cardPlayer2.type === "spell") || (cardPlayer2.type === "character" || cardPlayer2.type === "enemy" && cardPlayer1.type === "spell"):

            charOrEnemyVSspell(cardPlayer1, cardPlayer2);
            break;


        default:
            console.log("NO EFFECTS!");
            break;
    }

    console.log("\n\n\n\n\n\n\n\n");
}















// CREATE FUNCTION CHAR VS CHAR
function charVSchar(cardPlayer1, cardPlayer2) {

    let totalStas1 = 0;
    let totalStas2 = 0;

    // calcoliamo le statistiche totali delle 2 carte chi ha il totale + alto vince
    totalStas1 = cardPlayer1.strength + cardPlayer1.speed + cardPlayer1.health;
    totalStas2 = cardPlayer2.strength + cardPlayer2.speed + cardPlayer2.health;

    console.log(`it's a DUEL!⚔️\n- TOTAL STAS OF CARD PLAYER1: ${totalStas1}\n- TOTAL STAS OF CARD PLAYER2: ${totalStas2}\n\n`);

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
}







// CREATE FUNCTION ENEMY VS CHAR && contrario
function charVSenemy(cardPlayer1, cardPlayer2) {

    // se le 2 carte hanno la stessa velocità, non si combatterà
    if (cardPlayer1.speed === cardPlayer2.speed) {
        console.log("FIGHT DRAW!");

        /* se la velocità della carta 1 è > della carta 2, allora carta 1 attaccherà per prima
        lo scontro termina nel momento in cui la vita di una delle 2 carte finisce */
    } else if (cardPlayer1.speed > cardPlayer2.speed) {

        do {
            cardPlayer2.health -= cardPlayer1.strength;

            console.log(`PLAYER1 ATTACK⚔️ -> PLAYER2🛡️ -${cardPlayer1.strength} HP!\nHP❤️ OF PLAYER 2: ${cardPlayer2.health}HP\n\n`);

            if (cardPlayer2.health > 0) {
                cardPlayer1.health -= cardPlayer2.strength;

                console.log(`PLAYER2 ATTACK⚔️ -> PLAYER1🛡️ -${cardPlayer2.strength} HP!\nHP❤️ OF PLAYER 1: ${cardPlayer1.health}HP\n\n`);

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
            console.log(`PLAYER2 ATTACK⚔️ -> PLAYER1🛡️ -${cardPlayer2.strength} HP!\nHP❤️ OF PLAYER 1: ${cardPlayer1.health}HP\n\n`);

            if (cardPlayer1.health > 0) {
                cardPlayer2.health -= cardPlayer1.strength;

                console.log(`PLAYER1 ATTACK⚔️ -> PLAYER2🛡️ -${cardPlayer1.strength} HP!\nHP❤️ OF PLAYER 2: ${cardPlayer2.health}HP\n\n`);
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
}












// ---------------------- CREATE FUN CHAR/ENEMY VS SPELL && contrario --------------------------------------------------------------

function charOrEnemyVSspell(cardPlayer1, cardPlayer2) {


    //--------------- nel caso la spell ha effetto BUFF ----------
    if (cardPlayer1.method1 === "buff-character" || cardPlayer2.method1 === "buff-character") {

        // se la spell di buff è di PLAYER1
        if (cardPlayer1.method1 === "buff-character") {
            cardPlayer2.health += cardPlayer1.power;
            console.log(`PLAYER1 USE ${cardPlayer1.typeEffect} SPELL✨ -> PLAYER2🛡️ +${cardPlayer1.power} HP!\nHP❤️ OF PLAYER2: ${cardPlayer2.health}HP\n\n`);

            // se la spell di nerf è di PLAYER1
        } else {
            cardPlayer1.health += cardPlayer2.power;
            console.log(`PLAYER2 USE ${cardPlayer2.typeEffect} SPELL✨ -> PLAYER1🛡️ +${cardPlayer2.power} HP!\nHP❤️ OF PLAYER1: ${cardPlayer1.health}HP\n\n`);
        }


        //------------ nel caso la spell ha effetto DAMAGE ------------
    } else {

        // se la spell di buff è di PLAYER2
        if (cardPlayer1.method1 === "damage-character") {
            cardPlayer2.health -= cardPlayer1.power;
            console.log(`PLAYER1 USE ${cardPlayer1.typeEffect} SPELL✨ -> PLAYER2🛡️ -${cardPlayer1.power} HP!\nHP❤️ OF PLAYER2: ${cardPlayer2.health}HP\n\n`);

            // se la spell di nerf è di PLAYER2
        } else {
            cardPlayer1.health -= cardPlayer2.power;
            console.log(`PLAYER2 USE ${cardPlayer2.typeEffect} SPELL✨ -> PLAYER1🛡️ -${cardPlayer2.power} HP!\nHP❤️ OF PLAYER1: ${cardPlayer1.health}HP\n\n`);

        }

    }





    /*dopo aver tirato la magia (buff o debuff), la battaglia continua se la magia
    di danno del PLAYERx non ha ucciso la carta di PLAYERx sul colpo*/








    // la carta del PLAYERx rimane in campo con la vita buffata / nerfata e il PLAYERx che aveva la spell pescherà un altra carta
    if (cardPlayer1.health > 0 || cardPlayer2.health > 0) {




        // se la carta di PLAYER1 è un char/enemy, allora PLAYER2 aveva la spell e deve pescare una carta
        if (cardPlayer1.health) {

            // la coda di carte del PLAYER 2 deve essere > 0 per pescare!
            if (que2.length !== 0) {

                cardPlayer2 = que2.shift();
                console.log(cardPlayer1);
                console.log(`PLAYER2 draw a new card:`, cardPlayer2);

                // giochiamo con la NUOVA CARTA DI PLAYER2 e la VECCHIA CARTA DI PLAYER1
                letsPlay(cardPlayer1, cardPlayer2);

                // se PLAYER2 non ha più carte nella sua que, termina il turno e il game
            } else {
                console.log(`PLAYER2 has no cards remain!\n\n`);
                return;
            }


        } else {


            // la coda di carte del PLAYER 1 deve essere > 0 per pescare!
            if (que1.length !== 0) {

                cardPlayer1 = que1.shift();
                console.log(`PLAYER1 draw a new card:`, cardPlayer1);
                console.log(cardPlayer2);

                // giochiamo con la NUOVA CARTA DI PLAYER1 e la VECCHIA CARTA DI PLAYER2
                letsPlay(cardPlayer1, cardPlayer2);

                // se PLAYER1 non ha più carte nella sua que, termina il turno e il game
            } else {
                console.log(`PLAYER1 has no cards remain!\n\n`);
                return;
            }
        }


        // se la spell fa abbastanza danno da uccidere il personaggio/nemico di PLAYER1,termina il turno
    } else {
        console.log(`card of PLAYER1 destroyed! no points!`);
        flag = true;

    }
}









/*
 * function drawCard
 * funzione che serve per decretare il vincitore basandosi sui punti accumulati dai 2 giocatori in caso
 * uno dei 2 giocatori finisce le carte all'interno della sua queue.
 * altrimenti, in caso entrambi hanno ancora delle carte, andranno a pescare la PRIMA carta della loro queue
 * di cui verrà mostrata su console, e successivamente si andra a giocare il turno
 * @param {object} que1 - queue (array) del PLAYER1
 * @param {object} que2 - queue (array) del PLAYER2
 */
function drawCard(que1, que2) {

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


    //  il gioco finisce quando uno delle 2 queue dei giocatori si esaurisce
    if (que1.length === 0 || que2.length === 0) {

        whoWins(pointsPlayer1, pointsPlayer2);
        return;
    }


    // andiamo a pescare le prima carta delle 2 que di ogni giocatore, e mostriamole stampandole
    let cardPlayer1 = que1.shift();
    console.log(cardPlayer1);

    let cardPlayer2 = que2.shift();
    console.log(cardPlayer2);

    // passiamo le carte e iniziamo il gioco
    letsPlay(cardPlayer1, cardPlayer2);
}







// andiamo a creare e riempire le queue di 2 giocatori, con delle carte vuote
let que1 = createQueCards();
let que2 = createQueCards();

// modifichiamo le carte delle 2 queue, dandogli delle caratteristiche e successivamente verranno mostrare sulla console
fillQueCards(que1);
fillQueCards(que2);
console.log(que1, que2);



/* il turno si svolge ogni 3 secondi di intervallo di tempo, e viene pescata una carta dai 2 PLAYER!
alla fine di ogni turno se ci sarà un vincitore senza pareggi o senza scontri, il PLAYER con la carta che ha vinto
accumelare un tot di punti = alla salute totale rimasta della sua carta */
let pointsPlayer1 = 0; // punteggio del PLAYER1
let pointsPlayer2 = 0; // punteggio del PLAYER2
let timerId = setInterval(drawCard, 3000, que1, que2);