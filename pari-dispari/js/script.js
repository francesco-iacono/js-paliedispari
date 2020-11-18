// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariODispari = prompt("Pari o Dispari?");
console.log(pariODispari);
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUtente);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroPc = numeriRandom(1, 6);
console.log(numeroPc);
// Sommiamo i due numeri.
var somma = fxSomma(numeroUtente, numeroPc);
console.log(somma);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

if (pariODispari == "Pari" || pariODispari == "Dispari") {
    var risultato = fxControlloSomma(somma);
    // Dichiariamo chi ha vinto.
  if (pariODispari == risultato) {
      console.log("Hai vinto");
  } else {
      console.log("Hai Perso");
  }
} else {
      alert("Scrivi bene Pari o Dispari");
}

//---------------------------------------------------------------------
// funzione numero random
function numeriRandom(min, max) {
    var numero = Math.floor(Math.random() *(max - min)) + min;
    return numero;
}
// funzione somma
function fxSomma(a, b) {
  var sommaNumeri = a + b;
  console.log(sommaNumeri);
  return sommaNumeri;
}
// funzione pari e dispari
function fxControlloSomma(somma) {
    var confronto = "";
    if (somma % 2 == 0) {
        confronto = "Pari";
        console.log("Pari");
    } else {
        confronto = "Dispari";
        console.log("Dispari");
    }
    return confronto;
}
