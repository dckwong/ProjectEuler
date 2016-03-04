function isDivisible(num,div){
    return (num%div === 0);
}
function primes(n){
    var factors=[]
    for(var i=2; i<=n;i++){
	while(isDivisible(n,i)){
	    factors.push(i);
	    n = n/i;
	}
    }
    return factors;
}

var n = 600851475143;
factors = primes(n);
console.log(factors[factors.length - 1]);
