
function FizzBuzz (n){
   var output=[];
  

   for(var i=0; i<n.lenght; i++){
   	var member='';
   	if(n[i] % 3 == 0){
   		member+='fizz'
   	}
   	if(n[i] % 5 == 0){
   		member+='buzz'
   	}
   	if(member.lenght==0){
   		member= n[i];
   	}

   	output.push(member);
   	member='';

   }
   return output;
}

var niza=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var novaNiza = fizzBuzz(niza);
console.log(novaNiza);
console.log(niza);



