var firstArray = [1,2,3,4];
var secondArray = [4,3,2,1];

var addArrays = function(firstArray, secondArray){
	firstArray.reduce(
		function(secondArray, total){
			return secondArray + total;
		}
	);
}

console.log(addArrays(firstArray, secondArray));