// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Numero di Km che il passeggero vuole percorrere
var Km = prompt("How many km does the passenger want to travel for?");
console.log(Km);
// Età del passeggero
var Age = prompt("How old the passenger is?");
console.log(Age);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var ticketPrice = parseFloat("0.21");
console.log(ticketPrice);

var Price = ticketPrice*Km;
console.log(Price);
// va applicato uno sconto del 20% per i minorenni
if (Age<18){
    Price = Price - (Price*(20/100));
    console.log(Price);
} if else (Age>=65) {
    Price = Price
}
// va applicato uno sconto del 40% per gli over 65.