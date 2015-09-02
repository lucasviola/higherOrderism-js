var str = 'Functional Javascript';

var reverse = [].map.call(str, function(x){
		return x;
	}).reverse().join('');

console.log(reverse);