const sum = (x, y) => x + y
const square = (x) => x * x
const mean = (data) => data.reduce(sum) / data.length
const stddev = (d) => {
  let m = mean(d)
  return Math.sqrt(
    d
      .map((x) => x - m)
      .map(square)
      .reduce(sum) /
      (d.length - 1)
  )
}
// Now export only the public ones
module.exports = { sum, square, mean, stddev }

console.log(module.exports)
