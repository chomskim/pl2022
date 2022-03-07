const func = require('./func-module')

console.log(func)
console.log(func.sum(1, 4))
console.log(func.square(3))
console.log(func.mean([1, 3, 5, 7, 9])) // => 5
console.log(func.stddev([1, 3, 5, 7, 9])) // => Math.sqrt(10)
