// *-----------------------------------------------------------------------------------------------------------
//*  ----------------------------- using CLASSES (dopo di JS ES6) struttura base ------------------------------

/* Le classi in ES6 (ECMAScript 2015) forniscono una sintassi più chiara e leggibile per definire 
e lavorare con oggetti e costruttori rispetto al tradizionale approccio, e NON + basato su prototipi 

- CONSTRUCTOR -> è un metodo usato per inizializzare un'istanza della classe, passiamo ad essa i PARAMETRI 
                 per inizializzare l'oggetto di quella istanza 

- METHODS -> sono delle funzioni che definiamo all'interno della classe, esse saranno utilizzabili dalle istanze di quella classe
        
01. utilizzo anche di un operatore ternario all`interno del metodo -> TEMPLATE LITTERALS ${} creando una frase da loggare.
02. metodo sempre invocato tramite un istanza della classe ma che accetta un parametro passato al di fuori

passeremo solamente parametri normali senza un oggetto contenente tutte le proprietà da usare nel constructor() */


class Prodotto {

    // costruttore dell'istanza della classe Prodotto
    constructor(nome, prezzo, codiceBarre, ecologico) {
        this.nome = nome;
        this.prezzo = prezzo;
        this.codiceBarre = codiceBarre;
        this.ecologico = ecologico;
    }


    // methods della classe Prodotto sono utilizzabili dalle istanze di questa classe
    displayProduct() {
        console.log(`il nome del prodotto è ${this.nome} e il prezzo è di ${this.prezzo}€`);
    }

    displayMoreInfo() {
        console.log(
            `${this.ecologico ? `il prodotto è ecologico` : `il prodotto non è ecologico`} e il suo codice a barre di id è ${this.codiceBarre}`
        );
    }

    productWhitTax(tax) {
        return this.prezzo + (this.prezzo * tax);
    }

}



// creiamo delle istanze della classe Prodotto
const prodotto1 = new Prodotto("giacca", 30, "SDTLJ6438", true);
const prodotto2 = new Prodotto("lampada", 10, "AFJVIE234", false);


// usiamo i metodi della classe sulle istanze create
prodotto1.displayProduct();
prodotto1.displayMoreInfo();
prodotto2.displayProduct();
prodotto2.displayMoreInfo();

/* invochiamo il metodo prodottoConTasse() che accetta come parametro un valore esterno, 
e ritorniamo un valore a una varabile staccata dalla classe */
const prezzoTotale = prodotto1.productWhitTax(30);
console.log(`il prezzo totale (con tasse) è di: ${prezzoTotale}€`);
console.log("\n\n\n--------------------------------------------------------------------------------------\n\n\n");





//*  ----------------------------------------------------------------------------------------------------------------------------------------
//*  ----------------------------- EXTENDING Classes  +  SUPER  +  #propietà #methods() PRIVATI --------------------------------------------------

/* In JavaScript (ES6+) e TypeScript, l'uso di `extends` consente a una classe di EREDITARE DA UN'ALTRA CLASSE! 
Ciò significa che una classe può riutilizzare le proprietà e i metodi di un'altra classe (detta classe base o superclasse) 
e aggiungere le proprie funzionalità o modificarne alcune.

DA TENERE IN CONTO QUANDO SI ESTENDE UNA CLASSE:

!01. Eredità delle Proprietà e Metodi:
- la classe derivata (Immateriale) eredita automaticamente tutte le proprietà e i metodi pubblici della classe base (Prodotto).

!02. Parola Chiave super:
- `super` -> usato nel costruttore per chiamare il costruttore della classe base (Prodotto) e inizializzare le proprietà ereditate.
- `super` -> va ad ereditare anche i metodi dalla classe base (Prodotto)

!03. Sovrascrittura di Metodi:
- La classe derivata (Immateriale) può sovrascrivere i metodi della classe base per modificarne il comportamento


In JavaScript e TypeScript, proprietà e metodi privati possono essere dichiarati in diversi modi:

In JavaScript (ES2022+), si usano i prefissi con il simbolo # per indicare proprietà e metodi privati.
- Questi membri privati NON POSSONO essere accessibili direttamente al di fuori della classe in cui sono definiti. */


class Immateriale extends Prodotto {

    // definiamo sopra il costruttore le proprietà #private
    #scadenza;

    // construttore che riprende il costruttore della Classe padre (Prodotto) con `super` + nuova proprietà (sia pubblica che privata)
    constructor(nome, prezzo, codiceBarre, ecologico, licenza, scadenza) {
        super(nome, prezzo, codiceBarre, ecologico)
        this.licenza = licenza;     // nuova proprietà solo nella Classe estesa!
        this.#scadenza = scadenza;  // proprietà #privata!
    }


    #tryToTouch() {
        console.log(`non riesco a toccare il prodotto N ${this.codiceBarre}!`);
    }

    // sovrascrive il metodo displayMoreInfo() per le istanze create con la Classe Immateriale
    displayMoreInfo() {
        console.log(`questo è un prodotto IMMATERIALE e ha come licenza: ${this.licenza} e scadrà nel ${this.#scadenza}`);
        this.#tryToTouch();
    }

}



// creiamo delle istanze della classe Immateriale, attenzione al -> extend / super / #private
const prodotto3 = new Immateriale("OS", 40, "JDFNAO384", false, "qqqqqq", 2026);
const prodotto4 = new Immateriale("Sistemi", 540, "2IKD923DC", true, "ffffvvv", 2040);


// usiamo i metodi e proviamo ad accedere alla propeità della Classe "Immateriale" sulle istanze createprodotto3.displayProduct
prodotto3.displayProduct();
prodotto4.displayMoreInfo();

/* invochiamo il metodo prodottoConTasse() che accetta come parametro un valore esterno, 
e ritorniamo un valore a una varabile staccata dalla classe */
const immaterialeTotale = prodotto1.productWhitTax(30);
console.log(`il prezzo totale (con tasse) è di: ${prezzoTotale}€`);


/*
! ERRORI
- ora proviamo ad accedere a prop e methods PRIVATI (ERRORE!!) 
- ma anche a proprietà presenti solo in "Immateriali" con i prodotti di prima! */
console.log(prodotto1.licenza);
console.log(prodotto3.scadenza);
console.log(prodotto4.tryToTouch());