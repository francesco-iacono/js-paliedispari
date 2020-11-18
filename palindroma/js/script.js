// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

var palindrom = prompt("Inserisci una parola palindroma");
// palindrom.checkPalindrom();

var fruits = "Banana";
console.log(fruits);
fruits.reverse();
console.log(fruits);


function checkPalindrom(palindrom)
{

    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
            document.write('the word is palindrome.');
        }else{
            document.write('the word is not palindrome!');
        }
    }
}
;
