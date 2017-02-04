'use strict';
var wyplata = 5000;
var premia = 2000;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);


/*

Typ - łańcuch znaków - string

*/

var wyplata = "5000";
var premia = "2000";
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/*

Typ - typ logiczny - boolean

*/

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
		console.log("jest SMOG");
} else {
		console.log("Nie ma SMOGa");
	}

/* 

Typ specjalny - undefined / null
*/


var niezdefiniowanaZmienna;
var nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);


/*

operacje na stringach

*/

var imieStudenta = "Michał";
console.log(imieStudenta.indexOf('c'));


