// chiedo all'utente quanti KM vuole percorrere
var numeroChilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

// Chiedo all'utente di inserire il suo anno di nascita
var annoNascitaUtente = parseInt(prompt("Inserisci il tuo anno di nascita"));

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
