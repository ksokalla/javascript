'use strict';
//
//var liczba1 = 8;
//var liczba2 = 10;
//var wynik;
//
//
//function dodajLiczby(skladowa1, skladowa2) {
//	wynik = liczba1 + liczba2;
//}
//
//dodajLiczby();
//
//console.log(wynik);

var a= 3;
var b= 4;
var c= 5;


function multiply(skladowa1, skladowa2, skladowa3) {
	var wynikMnozenia;
	
	wynikMnozenia = skladowa1*skladowa2*skladowa3;
	
	return wynikMnozenia;
}



var skladowaWynik = multiply(a, b, c);

var nowa = -5;

var nowa1 = 0;

function warunek(liczba) { // parametr 'liczba' powinien być unikalny
						  // parametr 'liczba' obowiązuje tylko    //wewnątrz funkcji. można definiować jego wartość - 'skladowaWynik', 'nowa' 'nowa1' i inne //
	if (liczba >= 0) {
	
		console.log("wieksze")
	
	} else {
	
		document.write("mniejsze")
	}
	
}

warunek(skladowaWynik); // wywołanie funckcji
warunek(nowa);
warunek(nowa1);	
