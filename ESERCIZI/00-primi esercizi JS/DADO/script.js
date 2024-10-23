// class Dado{
//     facce;
//     colore;
//     valore;

//     //costruttore contiene le istruzioni per l'istanziazione degli oggetti
//     constructor(_colore){
//         console.log("oggetto dado creato");
//         this.facce = 6;
//         this.colore = _colore;
//         this.valore = this.lancia();
//     }

//     lancia(){
//         this.valore = Math.ceil(Math.random() * this.facce);
//         return this.valore;
//     }
// }

// const dado1 = new Dado("rosso");
//       const dado2 = new Dado("bianco");
//       let NUM_LANCI = 0;
//       let vittorie = 0;


//       const IMG1 = document.getElementById("dado1")
//                 const IMG2 = document.getElementById("dado2")
//       const BTN_PLAY = document.getElementById('btnPlay')
//       const RESULT = document.getElementById('result')

//       BTN_PLAY.addEventListener('click', function() {
//           dado1.lancia()
//           dado2.lancia()
//           NUM_LANCI++;

//           IMG1.src = https://raw.githubusercontent.com/maboglia/ProgrammingResources/master/images/dadi/f${dado1.valore}.jpg
//           IMG2.src = https://raw.githubusercontent.com/maboglia/ProgrammingResources/master/images/dadi/f${dado2.valore}.jpg



//           if (dado1.valore == dado2.valore){
//               vittorie++;
//               RESULT.textContent = Vittoria nr. ${vittorie} su ${NUM_LANCI} ${vittorie/NUM_LANCI}
//           }
//       } )

//       console.log(IMG1);
//       console.log(IMG2);

//       // for (let i = 0; i < NUM_LANCI; i++) {
//       //     dado1.lancia();
//       //     dado2.lancia();
//       //     if (dado1.valore == dado2.valore) {
//       //         console.log("hai vinto");
//       //         vittorie++;
//       //     }
//       // }
//       // console.log("hai lanciato " + NUM_LANCI);
//       // console.log("hai vinto " + vittorie);