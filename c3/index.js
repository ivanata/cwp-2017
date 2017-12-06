// function name(ime){
// 	switch (ime.length % 2){
// 		case 0:
// 		console.log("ubavo ime");
// 		break;
// 		  case 1:
// 		    console.log("neubavo ime");
		      
// 	}
// }
// name("bojan");

var niza=['a','b','c','d'];

console.log (niza);

console.log(niza[2]);

// niza[20]="z";
niza.push('z');

console.log(niza[20]);

console.log(niza.length);
var niza2=['bojan', 223305, true,'test'];
console.log(niza2);

var niza3 = [
	[1,2,3,4,5],
	[6,7,8,9,0],
	[
		'a',
		'b',
		'c',
		'd',
		'e',
		[10,20,30,40,]
	]
];
console.log(niza3);
console.log(niza3[1][2],niza3[2][0]); //8,a
console.log(niza3[2][5][2]); //30

var o1={
	ime:'Ivana',
	prezime:'Martinoska',
	oceni:[6,7,6,5,7,6],
	profesori:[
		{
			ime:'pero',
			prezime:'Petrovski'
		},
		{
			ime:'janko',
			prezime:'jankovski'
		}



	]
};
console.log(o1);
console.log(o1['ime']);
console.log(o1['prezime']);


console.log(o1.ime);
console.log(o1.prezime);
console.log(o1.oceni[3]);

for (var i=0; i<10; i=i+1){
	console.log('hello!');
	console.log(i);
}
// console.log(niza4[0]);
// console.log(niza4[1]);
// console.log(niza4[2]);
// console.log(niza4[3]);
// console.log(niza4[4]);


var niza4 = [20,30,40,50,60,70];
for (var i=0; i<5; i++) {
	console.log(niza4[i]);
}
var niza4 = [20,30,40,50,60,70];
for (var i=0; i<niza4.length; i++) {
	console.log(niza4[i]);
}



var niza6=[2,2,3,5,4,5,4,6,7,8,9];
for(var i=0, i<niza6.length, i++)
 if (niza6[i] % 2 == 0){
	console.log(parni broevi);
}

