var words = ["Functional", "javascript", "rules!"].reduce(
	function(words, combination){
		return words + " " + combination;
	}
);

console.log(words);


