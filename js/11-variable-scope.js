'use strict';

/*
jak nie robić w JavaScript - zmienne powinny mieć inne nazwy niż parametry - zawsze używajmy zmiennych lokalnych w funkcji
*/


	
var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var iloscOsoba4 = 2500;

var sumaKasy;

sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;

function policzSumeKasy (iloscOsoba1, iloscOsoba2, iloscOsoba3, wiek) {
	
	var sumaKasy;
	
	sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3 + iloscOsoba4;
	
	var osoba = [sumaKasy, wiek]
	
	return osoba;
}



console.log (policzSumeKasy( iloscOsoba3, iloscOsoba2, sumaKasy, 25));