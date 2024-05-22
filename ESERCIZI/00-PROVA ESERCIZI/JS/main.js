
// creazioni funzioni
let f = () => console.log('first');
let h = () => console.log('hi');
let b = () => console.log('bye');

// FUNZIONI ASINCRONE (schedulazione)
setTimeout(h, 0);
setTimeout(b, 4000);
setTimeout(b, 10000);

// LA FUNZIONE F è SINCRONA
f();

// LA FUNZIONE A è SINCRONA ma resterà bloccato qua
// f h b non verranno eseguite!
let a = () => {
    while (true)
        a;
}
a();

