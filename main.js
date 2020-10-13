// chiedo all'utente quanti KM vuole percorrere
var numeroChilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

// chiedo all'utente la sua ETA'
var etàUtente = parseInt(prompt("Quanti anni hai?"));

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
