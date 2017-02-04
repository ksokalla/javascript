'use strict';

var imiona = ['Monika', 'Krystian', 'Lukasz'];

imiona[3] = 'Tania';
imiona[4] = 'Ela';

imiona.push('Geralt');

imiona.pop();
imiona.pop();


console.log(imiona.unshift('Robert'));

console.log(imiona);

imiona.shift();

console.log(imiona.shift());

console.log(imiona);

for (var i=0; i<3; i++) {
	console.log(imiona[i]);
}

for (var i = imiona.length-1; i>=0; i--) {
	console.log(imiona[i])
}

imiona.forEach(function (element, i) {
console.log('Element nr.' + i + ' = ' + element);
	
});

console.log(imiona.join(' & '));

imiona.sort();

console.log(imiona);

imiona.reverse();

console.log(imiona);

var imionaMeskie = ['Robert', 'Janusz', 'Andrzej'];

var zbiorImion = imiona.concat(imionaMeskie);

console.log(zbiorImion);

console.log(zbiorImion.indexOf("Janusz"));

console.log(Array.isArray(zbiorImion));

console.log(zbiorImion.slice(2, 4));

zbiorImion.splice(1,2 , 'Julia', 'Zofia')

console.log(zbiorImion);

console.log(zbiorImion.toString());