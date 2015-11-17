'use strict'

var numbers = [1,2,3,4,5]

var listMonad = [for (i of numbers) i+1]

console.log(listMonad)
