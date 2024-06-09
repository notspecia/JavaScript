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
 * will generate one queue (array), which will contain initially empty cards (oggetti), Each queue can
* contain from 10 to 30 cards, The number of cards will be random using Math.round(Math.random()*...)
 * @returns {object} - an array (queue), containing cards (objects)
 */
function createQueCards() {

    // Variable declaration
    const max_cards = 30;
    const min_cards = 10;
    let queue = []; // queue containing cards
    let card = {};

    // Let's create a random number of cards (objects) to be included in the player's queue
    let numberOfCards = Math.round(Math.random() * (max_cards - min_cards) + min_cards);

    // Let's go to insert through the method .push the cards (objects), at the bottom of the queue
    for (let i = 0; i < numberOfCards; i++) {
        queue.push(card);
    }

    return queue;
}




/**
 * function fillQueCards
 * receives the player who contains cards (objects) as a parameter this function 
 * will take care of the characteristics to the cards (type, strenght, speed, healt ...), These statistics
* will have a minimum score of 20 and a maximum of 40 (chosen randomly)
 * - CHARACTER --> can face another one in duel CHARACTER / fight with a ENEMY
 * - SPELL --> It can have a positive magical effect on ENEMY or CHARACTER (buff) or a negative magical effect (nerf)
 * - ENEMY --> can face only a fight in a fight CHARACTER
 * @param {object} queue - player array containing the cards updated
 */
function fillQueCards(que) {

    // Minimum and maximum statistics score (dynamic)
    const max_points_stas = 40;
    const min_points_stats = 20;

    // Array containing the various types of cards
    const types = ["character", "spell", "enemy"];

    // Array containing the effects of the spells (some are of buff others of nerf)
    const effect = ["shield", "healing", "stun", "curse", "debuff"];


    // --------Let's fill all the player's cards with characteristics--------
    for (let i = 0; i < que.length; i++) {

        // We define the type of paper (characters, spells, enemies)
        que[i] = {
            type: types[Math.floor(Math.random() * types.length)],
        };

        // If the paper is of the type "character":
        if (que[i].type === "character") {
            que[i].strength = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].speed = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].health = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].method1 = "attack-enemy";
            que[i].method2 = "duel-vs-character";


            // If the paper is of the type "spell" + Let's apply to the spell a certain effect:
        } else if (que[i].type === "spell") {
            que[i].power = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].typeEffect = effect[Math.floor(Math.random() * effect.length)];

            // If the spell has positive effects of buffs:
            if (que[i].typeEffect === "shield" || que[i].typeEffect === "healing") {
                que[i].method1 = "buff-character";

                // If the spell has effects of nerf:
            } else {
                que[i].method1 = "damage-character";
            }


            // If the paper is of the type "enemy"
        } else {
            que[i].strength = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].speed = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].health = Math.round(Math.random() * (max_points_stas - min_points_stats) + min_points_stats);
            que[i].method1 = "attack-character";
        }
    }
}



/**
 * function charVSchar
 * clash between 2 CHARACTER, to decree the winner of the shift, we go to compare
 * the total statistics of the 2 cards, who has a total > wins the points
 * @param {object} cardPlayer1 - card (oggetto) of PLAYER1
 * @param {object} cardPlayer2 - card (oggetto) of PLAYER2
 */
function charVSchar(cardPlayer1, cardPlayer2) {

    // Total statistical points of the 2 cards CHARACTER
    let totalStas1 = 0;
    let totalStas2 = 0;

    // We calculate the total statistics of the 2 cards, who has the total + high wins
    totalStas1 = cardPlayer1.strength + cardPlayer1.speed + cardPlayer1.health;
    totalStas2 = cardPlayer2.strength + cardPlayer2.speed + cardPlayer2.health;
    console.log(`it's a DUEL!⚔️\n- TOTAL STAS OF CARD PLAYER1: ${totalStas1}\n- TOTAL STAS OF CARD PLAYER2: ${totalStas2}\n\n`);

    // We decree the winner of the duel, and add his HP as points
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



/**
 * function charVSenemy
 * clash between CHARACTER vs ENEMY, initialy we will confrontate the speed of the 2 cards
 * The card that has + speed, then attacks first, the battle will continue until
 * one of the 2 cards will not lose all HP
 * If the speed is == then no fight will take place
 *  @param {object} cardPlayer1 - card (oggetto) of PLAYER1
 *  @param {object} cardPlayer2 - card (oggetto) of PLAYER2
 */
function charVSenemy(cardPlayer1, cardPlayer2) {

    // If the 2 cards have the same speed, it won't fight and end the round
    if (cardPlayer1.speed === cardPlayer2.speed) {
        console.log("FIGHT DRAW!");
        return;
    }

    /* If the paper speed 1 is > of paper 2, then paper 1 will attack first
    The battle ends when the life of one of the 2 cards ends */
    if (cardPlayer1.speed > cardPlayer2.speed) {

        // The clash will end when one of the 2 cards will end its HP
        do {
            cardPlayer2.health -= cardPlayer1.strength;
            console.log(`PLAYER1 ATTACK⚔️ -> PLAYER2🛡️ -${cardPlayer1.strength} HP!\nHP❤️ OF PLAYER 2: ${cardPlayer2.health}HP\n\n`);

            if (cardPlayer2.health > 0) {
                cardPlayer1.health -= cardPlayer2.strength;
                console.log(`PLAYER2 ATTACK⚔️ -> PLAYER1🛡️ -${cardPlayer2.strength} HP!\nHP❤️ OF PLAYER 1: ${cardPlayer1.health}HP\n\n`);
            }

        } while (cardPlayer1.health > 0 && cardPlayer2.health > 0);


        /* If the paper 2 speed is > of paper 1, then paper 2 will attack first
        The battle ends when the life of one of the 2 cards ends */
    } else {

        do {
            cardPlayer1.health -= cardPlayer2.strength;
            console.log(`PLAYER2 ATTACK⚔️ -> PLAYER1🛡️ -${cardPlayer2.strength} HP!\nHP❤️ OF PLAYER 1: ${cardPlayer1.health}HP\n\n`);

            if (cardPlayer1.health > 0) {
                cardPlayer2.health -= cardPlayer1.strength;
                console.log(`PLAYER1 ATTACK⚔️ -> PLAYER2🛡️ -${cardPlayer1.strength} HP!\nHP❤️ OF PLAYER 2: ${cardPlayer2.health}HP\n\n`);
            }

        } while (cardPlayer1.health > 0 && cardPlayer2.health > 0);
    }

    // We decree the winner of the battle
    if (cardPlayer1.health > 0) {
        pointsPlayer1 += cardPlayer1.health;
        console.log(`PLAYER1 WIN! + ${cardPlayer1.health} POINTS`);

    } else {
        pointsPlayer2 += cardPlayer2.health;
        console.log(`PLAYER2 WIN! + ${cardPlayer2.health} POINTS`);
    }
}



/**
 * function charOrEnemyVSspell
 * clash between CHARACTER/ENEMY vs SPELL, the spell if it will have an effect of buff, will heal and adding HP
 * to the card of the other player, if the spell has an effect of nerf, will reduce the HP to the card of
 * the other enemy.
 * If the enemy paper was not destroyed immediately with the Spell, then the player with the paper CHARACTER/ENEMY
 * He will remain on the field with the HP modified previously, while the other will have to fish a new card from his queue
 * After that the turn will always continue on the basis of the parameters of the clashes between the various types of cards
 * @param {object} cardPlayer1 - card (oggetto) of PLAYER1
 * @param {object} cardPlayer2 - card (oggetto) of PLAYER2
 */
function charOrEnemyVSspell(cardPlayer1, cardPlayer2) {

    //--------------- In case the spell has effect BUFF ----------
    if (cardPlayer1.method1 === "buff-character" || cardPlayer2.method1 === "buff-character") {

        // if the spell of buff is of the PLAYER1
        if (cardPlayer1.method1 === "buff-character") {
            cardPlayer2.health += cardPlayer1.power;
            console.log(`PLAYER1 USE ${cardPlayer1.typeEffect} SPELL✨ -> PLAYER2🛡️ +${cardPlayer1.power} HP!\nHP❤️ OF PLAYER2: ${cardPlayer2.health}HP\n\n`);

            // if the spell of buff is of the PLAYER2
        } else {
            cardPlayer1.health += cardPlayer2.power;
            console.log(`PLAYER2 USE ${cardPlayer2.typeEffect} SPELL✨ -> PLAYER1🛡️ +${cardPlayer2.power} HP!\nHP❤️ OF PLAYER1: ${cardPlayer1.health}HP\n\n`);
        }


        //------------ In case the spell has effect DAMAGE ------------
    } else {

        // if the spell of nerf is of the PLAYER1
        if (cardPlayer1.method1 === "damage-character") {
            cardPlayer2.health -= cardPlayer1.power;
            console.log(`PLAYER1 USE ${cardPlayer1.typeEffect} SPELL✨ -> PLAYER2🛡️ -${cardPlayer1.power} HP!\nHP❤️ OF PLAYER2: ${cardPlayer2.health}HP\n\n`);

            // if the spell of nerf is of the PLAYER1
        } else {
            cardPlayer1.health -= cardPlayer2.power;
            console.log(`PLAYER2 USE ${cardPlayer2.typeEffect} SPELL✨ -> PLAYER1🛡️ -${cardPlayer2.power} HP!\nHP❤️ OF PLAYER1: ${cardPlayer1.health}HP\n\n`);
        }
    }


    /*After pulling the magic (buff or debuff), the battle continues if the magic
    Playerx damage, did not kill Playerx card on the shot */

    // !!!!!!!!!!!!!!!!!!!la carta del PLAYERx rimane in campo con la vita buffata / nerfata e il PLAYERx che aveva la spell pescherà un altra carta
    if (cardPlayer1.health > 0 || cardPlayer2.health > 0) {

        // se la carta di PLAYER1 è un CHARACTER/ENEMY (true), allora PLAYER2 aveva la spell e deve pescare una carta
        if (cardPlayer1.health) {

            // la coda di carte del PLAYER 2 deve essere > 0 per pescare!
            if (que2.length !== 0) {
                cardPlayer2 = que2.shift();
                console.log(cardPlayer1);
                console.log(`PLAYER2 draw a new card:`, cardPlayer2);

                // giochiamo con la NUOVA CARTA DI PLAYER2 e la VECCHIA CARTA DI PLAYER1
                letsPlay(cardPlayer1, cardPlayer2);

            } else {
                // se PLAYER2 non ha più carte nella sua que, termina il turno e il game
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
    }
}


/**
 * function whoWins
 * funzione che andrà a decretare il vincitore della partita, andando a confrontare
 * il punteggio tra PLAYER1 e PLAYER2, successivamente per terminare il gioco definitivamente
 * andiamo a fermare il setInterval()
 * @param {number} pointsPlayer1 - punteggio totale del PLAYER1
 * @param {number} pointsPlayer2 - punteggio totale del PLAYER2
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

/**
 * function letsPlay
 * in base alla tipologie delle carte dei 2 players, andremo ad invocare differenti
 * funzioni che simulano un combattimento tra di esse
 * ci possono essere 2 casi in cui non avvenga nessuna battaglia e il turno terminerà:
 * 1. ENEMY VS ENEMY
 * 2. SPELL VS SPELL
 * @param {object} cardPlayer1 - carta (oggetto) del PLAYER1
 * @param {object} cardPlayer2 - carta (oggetto) del PLAYER2
 */
function letsPlay(cardPlayer1, cardPlayer2) {

    switch (true) {

        // ! character VS character (DUEL) !
        case cardPlayer1.type === "character" && cardPlayer2.type === "character":

            charVSchar(cardPlayer1, cardPlayer2);
            break;


        //! character VS enemy || enemy VS character (BATTLE) !
        case cardPlayer1.type === "character" && cardPlayer2.type === "enemy" || cardPlayer1.type === "enemy" && cardPlayer2.type === "character":

            charVSenemy(cardPlayer1, cardPlayer2);
            break;


        //! character/enemy (player1)  VS spell (player2) (buff character / damage character) !
        //! character/enemy (player2)  VS spell (player1) (buff character / damage character) !
        case (cardPlayer1.type === "character" || cardPlayer1.type === "enemy" && cardPlayer2.type === "spell") || (cardPlayer2.type === "character" || cardPlayer2.type === "enemy" && cardPlayer1.type === "spell"):

            charOrEnemyVSspell(cardPlayer1, cardPlayer2);
            break;


        default:
            console.log("NO EFFECTS!");
            break;
    }
    console.log("\n\n\n\n\n\n\n\n");
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