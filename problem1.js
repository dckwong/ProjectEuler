function getMultiples(x){
    var sum = 0;
    for(var i=0; i<1000;i+=x){
	sum+=i;
    }
    return sum;

}
function getMultiples2(x,y){
    var sum = 0;
    for( var i=0;i<1000;i+=x){
	if(i%y != 0){
	    sum+=i;
	}
    }
    return sum;
}

var x = getMultiples(3);
var y = getMultiples2(5,3);
console.log(x+y);
