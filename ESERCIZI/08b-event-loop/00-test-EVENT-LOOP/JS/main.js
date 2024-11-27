// function SINCRONA which intentionally wastes time
let f = () => {
    let count = 0;
    // waste time (ci metterà un po di tempo per completare questo ciclo)
    while (count < 1e10) {
        count++;
    }
    console.log('ho finito la funzione sincrona e il codice sincrono');
};

let h = () => console.log('hi');

let b = () => console.log('bye');



// schedule functions and invoke f
// I SETTIMEOUT SONO SINCRONI, E VENGONO MESSI SUBITO NELLA CALL STACK
setTimeout(h, 0);
setTimeout(b, 10000); // questa verrà completata nella task queue (il risultato è già stato elaborato) ma verà mostrato solo quando la CALL STACK è vuota
setTimeout(b, 12000);
f();