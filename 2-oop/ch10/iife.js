console.log(
  (function (x, y) {
    return x + y
  })(1, 3)
)
const iifeSum = (function () {
  const sum = (x, y) => x + y
  return sum
})()
console.log(iifeSum(1, 3))
const funcs = (function () {
  const sum = (x, y) => x + y
  const square = (x) => x * x
  return { sum, square }
})()
console.log(funcs)
console.log(funcs.sum(1, 4))
console.log(funcs.square(3))
