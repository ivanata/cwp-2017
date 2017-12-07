var names = ["pero", "petko", "kristina", "kristijan", "dimitar", "andreja", "aleksandar", "angelina", "mario","dejan", "goran"];

for( var i=0; i< names.length; i++){
	if (names[i].length==5){
		console.log(names[i]);
	}

}

countletters("ERMJHFBBBBBBEJKRBSEJGFBKN,EJNFVB","C");


function countletters(letters, char){
	var count=0;
	for(var i=0; i<letters.length; i++){
		if(letters.charAt(i)==char){
			count++;
		}
	}
}

// for(i=0; i<10; i++){
// 	console.log(i)
// }

for (i=5; i<=50; i=i+5){
 console.log(i)
}

for(i=100; i>=0; i--){
	console.log(i)
}

for(i=0; i<=10; i++){
	console.log(i*9)
}




var c=0;
for(i=0; i<niza.length; i++){
	if (niza[i]%2==0){
		c++;
	if(c==3)
	}
}