var arrayOfThings = ["Array", 1, "Of", 2, "Things", 0];

var isNotANumber = arrayOfThings.filter(function(x) {
	return ((typeof x) != 'number');
});

console.log(isNotANumber);

