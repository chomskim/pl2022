const func = require('./func-exports')

console.log(func)
console.log(func.mean([1, 3, 5, 7, 9])) // => 5
console.log(func.stddev([1, 3, 5, 7, 9])) // => Math.sqrt(10)
