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


/*
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

kasia.wyswietlInfo();*/

function Auto(marka) {
	this.marka = marka;
	this.pojemnosc;
	this.moc;
	this.wyswietlInfo = function() {
		console.log("Marka: " + this.marka + "\n"
				   + "Pojemność: " + this.pojemnosc + "\n"
				   + "Moc: " + this.moc + "\n");
	}
}

var auta = [];

var renault = new Auto('Renault');

renault.pojemnosc = "1600cm3";
renault.moc = "120KM";
auta.push(renault);

var bmw = new Auto('BMW');

bmw.pojemnosc = "2000cm3";
bmw.moc = "150KM";
auta.push(bmw);

var fiat = new Auto('Fiat 126p')

fiat.pojemnosc = "800cm3";
fiat.moc = "30KM";
auta.push(fiat);

var dacia = new Auto('Dacia')

dacia.pojemnosc = "1200cm3";
dacia.moc = "70KM";
auta.push(dacia);


auta.forEach(function(auto, i){
	auto.wyswietlInfo();
	console.log("Auto numer: " + (i+1));
});

/*renault.wyswietlInfo();

bmw.wyswietlInfo();

fiat.wyswietlInfo();

dacia.wyswietlInfo();*/