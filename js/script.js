// // SNACK - 1
// let zucchine = [
// 	{ peso: 10, lunghezza: 5 },
// 	{ peso: 7, lunghezza: 5 },
// 	{ peso: 8, lunghezza: 5 },
// 	{ peso: 3, lunghezza: 5 },
// 	{ peso: 1, lunghezza: 5 },
// 	{ peso: 9, lunghezza: 5 },
// 	{ peso: 15, lunghezza: 5 },
// 	{ peso: 11, lunghezza: 5 },
// 	{ peso: 17, lunghezza: 5 },
// 	{ peso: 21, lunghezza: 5 },
// ];

// for (const element of zucchine) {
// 	pesoTotale += element.peso;
// }
// console.log(`IL PESO TOTALE È ${pesoTotale}`);

// // SNACK - 2
// function numbMagMin(array, i, chiave) {
// 	let elementiMinori = [];
// 	let elementiMaggiori = [];
// 	let sommaTotaleMinori = 0;
// 	let sommaTotaleMaggiori = 0;
// 	for (const element of array) {
// 		let valoreElemento = element[chiave];
// 		if (valoreElemento < i) {
// 			elementiMinori.push(valoreElemento);
// 			sommaTotaleMinori += valoreElemento;
// 		} else {
// 			elementiMaggiori.push(valoreElemento);
// 			sommaTotaleMaggiori += valoreElemento;
// 		}
// 	}
// 	console.log(`Array minori di ${i}: ${elementiMinori}`);
// 	console.log(`Somma minori: ${sommaTotaleMinori}`);
// 	console.log(`Array maggiori di ${i}: ${elementiMaggiori}`);
// 	console.log(`Somma maggiori: ${sommaTotaleMaggiori}`);
// }
// numbMagMin(zucchine, 15, `peso`);

// SNACK - 3
let a = `ciao`;

// // SNACK - 3.1 WITHOUT ITERATION
// function reverseString(stringa) {
// 	let array1 = Array.from(stringa);
// 	let array2 = [];
// 	array1.reverse();
// 	array2 = array1.join("");
// 	console.log(array2);
// }
// reverseString(a);

// // SNACK - 3.2 WITH ITERATION
// function reverseString(stringa) {
// 	let array1 = Array.from(stringa);
// 	let stringReversed = ``;
// 	for (let i = array1.length - 1; i >= 0; i--) {
// 		const element = array1[i];
// 		stringReversed += element;
// 	}
// 	console.log(stringReversed);
// }
// reverseString(a);

// SNACK - 4
const array1 = [`a`, `b`, `c`];
const array2 = [1, 2, 3, 4, 5];

function arrayFusion(x, y) {
	let arrayFused = [];
	let n = array1.length;
	if (array1.length < array2.length) {
		n = array2.length;
	}
	for (let i = 0; i < n; i++) {
		if (x[i] != undefined) {
			arrayFused.push(x[i]);
		}
		if (y[i] != undefined) {
			arrayFused.push(y[i]);
		}
	}
	console.log(arrayFused);
}
arrayFusion(array1, array2);

// // SNACK - 5
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function numbBetween(array, n1, n2) {
// 	let arrayBetween = [];

// 	if (n1 < n2 && n2 < array[array.length - 1]) {
// 		for (let i = 0; i < n2 - 1; i++) {
// 			if (array[i] > n1) {
// 				arrayBetween.push(array[i]);
// 			}
// 		}
// 	}
// 	return arrayBetween;
// }

// let arrayBetween = numbBetween(list, 3, 7);
// console.log(arrayBetween);
