// funzione SINCRONA che spreca intenzionalmente tempo
let f = () => {
    let count = 0;
    // ciclo che blocca il thread principale per un lungo periodo (es. alcuni secondi o più, a seconda della CPU)
    while (count < 1e10) {
        count++;
    }
    console.log('ho finito la funzione sincrona e il codice sincrono');
};

let h = () => console.log('hi');
let b = () => console.log('bye');



// schedula le funzioni e invoca f()

// I setTimeout SONO ASINCRONI, vengono gestiti dalla Web API e il callback finisce nella task queue dopo il tempo stabilito
setTimeout(h, 0); // il callback viene registrato nella Web API e, dopo 0 ms, inserito nella task queue
setTimeout(b, 10000); // dopo 10 secondi il callback sarà pronto nella task queue ma eseguito solo quando la call stack sarà vuota
setTimeout(b, 12000); // stesso discorso, eseguito solo quando la call stack sarà libera

f(); // la call stack è occupata finché f() non termina, quindi i callback in attesa non possono essere eseguiti (ma sono si sono risolti intanto )