'use strict';



/* 


pętla for


*/

for (var i=0; i<10; i++) {
	console.log(i);
}


/* 

pętla while

*/
var it = 0;
while ( it<10 ) {
	console.log (it);
	it++;
}



/*

pętla do while

*/

var iter= 20;

do {
	console.log(iter);
	iter++
} while ( iter < 10)

	
	
	
/*

postinkrementacja vs preinkrementacja

*/

	for (var i=1; i<10;) {
	console.log(++i);
}

for (var i=1; i<10;) {
	console.log(i++);
}



/*

przerywanie pętli - break


*/

var a= 0;

while (a<10) {
	console.log(++a);
	if (a == 5) {
		break;
	}
} 


/*

przeskakiwanie do kolejnej iteracji - continue


*/

var b= 0;

for (var b = 0; b<10; ++b) {
	
	if (b == 5) {
		continue;
	} else { 
	console.log (b)
	}
} 
	