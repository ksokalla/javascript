'use strict';

var wzrostMateusza = 190;
var wzrostKaji = 190;


/*

warunek if

*/
if (wzrostKaji < wzrostMateusza) {
	console.log("Kaja jest niższa :)");
}

/*

warunek if else

*/

if (wzrostKaji > wzrostMateusza) {
	console.log("Kaja jest wyższa :)");
}
else {
	console.log("Kaja jest niższa");
}


/*


warunek if else if


*/


if (wzrostKaji > wzrostMateusza) {
	
	console.log("Kaja jest wyższa :)");
	
} else if (wzrostKaji == wzrostMateusza) {
	
	console.log("Kaja jest wzrostu Mateusza");
	
} else {
	
	console.log("Kaja jest niższa");
}



/*


warunek switch


*/

var kolor = 'niebieski';


switch (kolor) {
		
	case 'czerwony':
		console.log ('Kolor czerwony')
		break;
		
	case 'zielony':
		console.log ('Kolor zielony')
		break;

	case 'niebieski':
		console.log ('Kolor niebieski')
		break;
	default: 
			console.log ('Inny kolor')

}