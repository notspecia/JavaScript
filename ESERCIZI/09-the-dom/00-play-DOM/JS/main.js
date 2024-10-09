//! RITORNA DA 0 A 1 ELEMENTI
// document.getElementById(id);


/*
 ! RITORNA DA 0 A N ELEMENTI, ha una proprietà .length, ma non possiede i metodi degli array,
 ! se vogliamo usare i metodi degli array
 ! allora trasformiamo questa HTMLcollecton in un array tramite Array.from() */
// let element = document.getElementsByTagName(tagName);
// Array.from(element);


/*
! RITORNA DA 0 A N ELEMENTI, UN ARRAY LIKE (HTMLCollection), va a prendere
! tutti gli elementi che possiedono quella .classe */
// let alsoHobbies = document.getElementsByClassName('hobby');


/*
! RITORNA DA 0 A 1 ELEMENTI, scriviamo nella stringa dei selettori CSS (selettori relazionali, pseudoclassi...)
! solo il prima che trovo */
//let firstHobby = document.querySelector('ul li.hobby');


/*
! RITORNA DA 0 A N ELEMENTI, UN ARRAY LIKE (Nodelist), scriviamo nella stringa dei selettori CSS (selettori relazionali, pseudoclassi...)
! seleziona tutti quelli che hanno tutti quella selezione di query */
//let allItems = document.querySelectorAll('ul li.hobby');

/*
! gli HTMLCollection è un array live, si aggiorna in base a quello che si modifica nella pagina
! la NODElist è statico, (il contrario)*/

/*
! istanceof -> è un operatore BINARIO che operano su uno o + operandi,
! verifica che il valore dentro una variabile sia di quel tipo */



/*
? MANIPOLAZIONE DEL DOM
! lo style è un OGGETTO, posso tramite esso prendre le proprietà di questo oggetto
! LA DOTNOTATION SI PUO USARE SOLO PER GLI OGGETTI, per questo viene detto oggetto
! le proprietà in questo caso vanno scritte in KAMELCASE (background-color NO X) (backgroundColor SI!), perchè JS non accetta i - per le variabili
! lo stile viene applicato INLINE, quindi cercare di NON scrivere mai codice così */


// ! a collection of nodes
// let hobbies = document.getElementsByTagName('li'); // an HTMLCollection
// let alsoHobbies = document.getElementsByClassName('hobby'); // an HTMLCollection
// let allItems = document.querySelectorAll('ul li.hobby'); // a NodeList

//! stampiamo i vari array likes
// console.log(hobbies);
// console.log(alsoHobbies);
// console.log(allItems);

//! andiamo ad assegnare ad una variabile un array like convertito in un array vero e proprio
// let arrayTrasformazione = Array.from(alsoHobbies);
// console.log(arrayTrasformazione);

//! proviamo alcuni metodi su un array like (NON FUNZIONERA) e un array vero e proprio
// console.log(hobbies.shift); // undefind
// console.log(arrayTrasformazione.shift);



//! andiamo a stampare con un ciclo for tutti gli elementi presenti nell'array
// arrayTrasformazione.forEach(hobby => console.log(hobby.textContent));

//! andiamo a stampare con un ciclo tutti gli elementi presenti nell'array like (NodeList)
// allItems.forEach(item => console.log(item.textContent));



//? MANIPOLAZIONE DELLO STYLE
//! MODO BRUTTO
// let pageNodeBad = document.body;
// pageNodeBad.style.backgroundColor = "red";
// pageNodeBad.style.color = "aqua";

//! MODO CORRETTO
// let pageNodeGood = document.body;
//! andiamo ad aggiungere alla variabile che contiene il nodo del body (pageNodeGood), delle proprietà di stile appartenenti ad una classe
// pageNodeGood.classList.add("modificaStyle");