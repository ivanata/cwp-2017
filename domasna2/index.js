var niza = [2, 5, 3, 2, 3, 3, 5, 1, 1, 4, 4, 2, 4, 2, 2, 4];

function sekojTretParenBroj(n){
	var a = 0;
 	for(var i = 0; i< n.length; i++){
 		n = n[i];
 		if (n % 2 == 0) {
			a = a + 1;
			if (a == 3){ 
				console.log(n[i]);
				a = 0;
			}
 		}
 	}
 }
 	
 function zbirNaNeparniBroevi(niza){
 	sum=0;
  	for(var i=0; i< niza.length; i++){
 		m = niza[i];
 		if (m % 2 == 1) {
 			if (niza[i] % 2 == 1) {
  				sum = sum + niza[i];
  			}
  		}
  	}

	return sum;
 }

 // var p=0;

 function prosek (niza){
 	var p = 0;
  	for(var i=0; i<niza.length; i++){
 		l = niza[i];
 		p = p + l;
 		p = p + niza[i];
  	};
 	p = p / niza.length;
  	return p;
  }

