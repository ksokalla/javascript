'use strict';
/*
var krzysztof = {
	imie: "Krzysztof",
	wzrost: 180,
	przedstawOsobe: function() {console.log(this.imie)} 
}

var kasia = {
	imie: "Kasia",
	wzrost: 168,
	przedstawOsobe: function() {console.log(this.imie)}
}

krzysztof.przedstawOsobe();
kasia.przedstawOsobe();

console.log(krzysztof.wzrost);
console.log(kasia.wzrost);*/



function Osoba(imie, nazwisko) {
	
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.wzrost;
	this.oczy;
	this.wyswietlInfo = function() {
		console.log( "Imię: " + this.imie + "\n"
					+ "Nazwisko: " + this.nazwisko + "\n"
					+ "Wzrost: " + this.wzrost + "\n"
					+ "Oczy: " + this.oczy);
	}
}

var krzysiek = new Osoba('Krzysiek', 'Sokalla');

krzysiek.wzrost = 180;
krzysiek.oczy = "niebieskie";

krzysiek.wyswietlInfo();

var kasia = new Osoba('Katarzyna', 'Pruszkowska');

kasia.wyswietlInfo();