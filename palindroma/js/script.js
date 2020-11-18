// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

var parola = prompt("Inserisci una parola palindroma");
console.log("Parola di partenza", parola);
var confronto = checkPalindromo(parola);

console.log(confronto);
// Restituisce true se palindroma, false altrimenti
function checkPalindromo(parola) {
  var contrario = "";
  // Cambia la stringa in minuscolo
  var parolaMinuscola = parola.toLowerCase();

  // Devo creare parola al contrario
  for (var i = parola.length - 1; i >= 0; i--) {
    contrario += parola[i];
  }
  console.log("Parola al contrario", contrario);
  var messaggio = "";
  // Confronto parola e contrario per vedere se sono uguali
  if (contrario.toLowerCase() == parolaMinuscola) {
    messaggio = "La tua parola è un palindromo";
    return messaggio;
  } else {
    messaggio = "La tua parola non è un palindromo";
    return messaggio;
  }
}
