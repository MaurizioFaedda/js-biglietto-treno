// // chiedo all'utente quanti KM vuole percorrere
// var numeroChilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

// Chiedo all'utente la destinazione tra Oristano(90km), Sassari(200km) e Olbia(260)
var destinazione = prompt("La tua stazione di partenza è Cagliari. \nScrivi una destinazione tra Oristano, Sassari, Olbia:")

// calcolo i km usando la scelta della destinazione
if (destinazione === "Oristano") {
    numeroChilometri = (90);
} else if (destinazione === "oristano") {
    numeroChilometri = (90);
} else if (destinazione === "Sassari") {
    numeroChilometri = (200);
} else if (destinazione === "sassari") {
    numeroChilometri = (200);
} else if (destinazione === "Olbia") {
    numeroChilometri = (260);
} else if (destinazione === "olbia") {
    numeroChilometri = (260);
}

// Chiedo all'utente di inserire il suo anno di nascita
var annoNascitaUtente = parseInt(prompt("Inserisci il tuo anno di nascita:"));

// Calcolo l'età dell'utente calcolando l'anno corrente meno la data di nascita
var d = new Date();
var etàUtente = d.getFullYear() - annoNascitaUtente;

// prezzo biglietto
var prezzoBiglietto = numeroChilometri * 0.21;

// prezzo del biglietto in base alla età
if (etàUtente > 65) {
    console.log(prezzoBiglietto - prezzoBiglietto * 0.4);
} else if (etàUtente < 18) {
    console.log(prezzoBiglietto - prezzoBiglietto * 0.2);
} else {
    console.log(prezzoBiglietto);
}
