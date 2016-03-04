var n1=1;
var n2=1;
var n3=0;
var sum = 0;
for(var i=0; n1<4000000 && n2<4000000;i++){
    n3 = n1+n2;
    if(n3 % 2 === 0){
	sum+=n3;
    }
    if(i%2 === 0){
	n1 = n3;
    }
    else{
	n2 = n3;
    }
}
console.log(sum);
