'use strict'

var z = require('z');

// reverse using pattern matching

var reverse = (list) => {

	return list.$match(
		()	=> [],
		(head, tail) => reverse(tail).concat(head)
	)
}

console.log(reverse(1,2,3,4,5));
