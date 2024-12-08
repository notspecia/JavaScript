// prendiamo dal DOM i vari bottoni e contenuti di testo
let trackBTN = document.getElementById('track');
let visuaBTN = document.getElementById('percorso');
let stopBTN = document.getElementById('stop');
let spostamenti = document.querySelector('div#spostamenti');
let message = document.getElementById('message');


/**
 * function trackPositio
   funzione handler che viene attiva dal event listener presente nel bottone di avvio quando cliccato
   ci sono due funzioni callback principali che gestiscono il comportamento di navigator.geolocation.getCurrentPosition: 
   una per il caso di successo e una per il caso di errore.
 */
function trackPosition() {

    // se la localizzazione esiste ed è concessa dall'utente, allora inizia il tracking
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            // andremo a scrivere le cordinate dentro un paragrafo di testo
            position => {
                let p = document.createElement('p');
                p.textContent += `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
                spostamenti.appendChild(p);
            },

            // in casi di errore mostreremo un messaggio di errore
            error => {
                let p = document.createElement('p');
                p.textContent = "tracking is not working now! :(";
            }
        );

    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}



// evento che scatta nel momento in cui si clicca il bottone per iniziare il tracking dell'utente
trackBTN.addEventListener('click', () => {

    // intervallo che segna le coordinate dell'utente ogni 2 secondi
    let tracking = setInterval(trackPosition, 2000);

    // aggiungiamo il messaggio da mostrare all'utente che il tracking è iniziato
    message.textContent = 'hai avviato il tracking';
    document.body.appendChild(message);

    // togliamo / mostriamo gli altri pulsanti per farli usare all'utente
    stopBTN.classList.remove('hidden');
    trackBTN.classList.add('hidden');

    // evento aggiunto al bottone per stoppare il tracking
    stopBTN.addEventListener('click', () => {
        message.textContent = 'hai stoppato il tracking';
        trackBTN.classList.remove('hidden');
        stopBTN.classList.add('hidden');
        clearInterval(tracking);    // fermiamo il tracciamento!
    });

});


// bottone per mostrare o non mostrare più la lista con le varie coordinate trakkate
visuaBTN.addEventListener('click', () => {
    spostamenti.classList.toggle('hidden');

    if (visuaBTN.textContent === 'Visualizza spostamenti') {
        visuaBTN.textContent = 'Nascondi spostamenti';
    } else {
        visuaBTN.textContent = 'Visualizza spostamenti';
    }
});