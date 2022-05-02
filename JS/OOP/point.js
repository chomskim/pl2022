class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  clone() {
    return new Point(this.x, this.y)
  }
  toString() {
    return `Point(${this.x},${this.y})`
  }
  move(dx, dy) {
    this.x += dx
    this.y += dy
  }
}
let p1 = new Point(0, 0)
let p2 = p1
p1.move(1, 1)
console.log(p1.toString(), p2.toString())
console.log(p1, p2)

function reverse(list) {
  list.forEach((x, i) => {
    list[list.length - i - 1] = x
  })
}
let list = [1, 2, 3, 4]
reverse(list)
console.log(list)
