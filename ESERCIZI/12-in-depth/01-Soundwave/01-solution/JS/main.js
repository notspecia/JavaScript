    /**
     * @file        main.js
     * @author      Gabriele Speciale
     * @date        2024-08-05
     * @description 
     * 
     * 
     * Given the following array
     let noisesArray = ['quack', 'sneeze', 'boom'];

    Produce the following array, then print it to the console
    ['Quack!','qUack!!','quAck!!!','quaCk!!!!','quacK!!!!!','Sneeze!','sNeeze!!','snEeze!!!','sneEze!!!!
    ','sneeZe!!!!!','sneezE!!!!!!','Boom!','bOom!!','boOm!!!','booM!!!!']
    */


    // array of initial noises 
    let noisesArray = ['quack', 'sneeze', 'boom'];

    // new array which will be filled whit the required sounds
    let noisesArrayNew = [];


    // nested for loops applied for each sound
    for (let noise of noisesArray) {

        for (let i = 0; i < noise.length; i++) {

            // capitalize the letter based on the index (i) of the sound
            let noiseModified = noise.slice(0, i) + noise[i].toUpperCase() + noise.slice(i + 1);

            // add '!' based on how many times the word has been modified (based on the index --> i)
            let exclamations = ""; // string that will contain all the "!"
            let j = 0;

            do {
                exclamations += "!";
                j++;
            } while (j <= i);

            noiseModified += exclamations; // add the "!" to the sound string

            // add the newly modified sound to the previously created array
            noisesArrayNew.push(noiseModified);
        }
    }

    console.log(noisesArrayNew);