'use strict';

var jsonAuta = {
	"auta": [
		{marka: "Renault", moc: "120KM", pojemnosc: "1600cm3"},
		{marka: "BMW", moc: "160KM", pojemnosc: "2000cm3"},
		{marka: "Fiat 126p", moc: "70KM", pojemnosc: "900cm3"}
	]
}

console.log(jsonAuta);

jsonAuta.auta.forEach(function(auto, i){

	console.log("Auto: " + auto.marka + " " + auto.moc + " " + auto.pojemnosc + (i+1));
});

jsonAuta.auta.forEach(function(samochody/* ta zmienna jest tymczasowa tylko na potrzeby tej funkcji*/, i) {
	console.log("Marka " + samochody.marka);
	console.log("Moc " + samochody.moc);
})

var jsonAuta2 = {
	"auta1": [
		{marka: "Renault", moc: "120KM", pojemnosc: "1600cm3"},
		{marka: "BMW", moc: "160KM", pojemnosc: "2000cm3"},
		{marka: "Fiat 126p", moc: "70KM", pojemnosc: "900cm3"}
	],
	"auta2" : [
		{marka: "Wołga", moc: "120KM", pojemnosc: "1600cm3"},
		{marka: "Mercedes", moc: "130KM", pojemnosc: "1600cm3"},
		{marka: "Audi", moc: "150KM", pojemnosc: "1600cm3"}
	]
}

jsonAuta2.auta2.forEach(function(autaauta, i){
	console.log(autaauta.moc);
})