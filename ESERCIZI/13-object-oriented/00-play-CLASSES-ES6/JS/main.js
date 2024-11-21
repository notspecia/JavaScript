// *-----------------------------------------------------------------------------------------------------------
//*  ----------------------------- using CLASSES (dopo di JS ES6) struttura base ------------------------------

/* Le classi in ES6 (ECMAScript 2015) forniscono una sintassi più chiara e leggibile per definire 
e lavorare con oggetti e costruttori rispetto al tradizionale approccio, e NON + basato su prototipi 

- CONSTRUCTOR -> è un metodo usato per inizializzare un'istanza della classe, passiamo ad essa i PARAMETRI 
                 per inizializzare l'oggetto di quella istanza 

- METHODS -> sono delle funzioni che definiamo all'interno della classe, esse saranno utilizzabili dalle istanze di quella classe
        
01. utilizzo anche di un operatore ternario all`interno del metodo -> TEMPLATE LITTERALS ${} creando una frase da loggare.
02. metodo sempre invocato tramite un istanza della classe ma che accetta un parametro passato al di fuori


passeremo solamente parametri normali senza un oggetto contenente tutte le proprietà da usare nel constructor()
*/

class Prodotto {

    constructor(nome, prezzo, codiceBarre, ecologico) {
        this.nome = nome;
        this.prezzo = prezzo;
        this.codiceBarre = codiceBarre;
        this.ecologico = ecologico;
    }


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





// *-----------------------------------------------------------------------------------------------------------
//*  ----------------------------- using CLASSES (dopo di JS ES6) struttura base ------------------------------