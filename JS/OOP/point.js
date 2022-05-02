class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  toString() {
    return `Point(${this.x},${this.y})`;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  equal(point) {
    return this.x === point.x && this.y === point.y;
  }
  distance(point) {
    return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
  }
}
let p1 = new Point(0, 0);
let p2 = p1;
p1.move(1, 1);
console.log(p1.toString(), p2.toString());
console.log(p1, p2);
console.log(p1.equal(p2));
p2 = p1.clone();
console.log(p1.equal(p2));
p1.move(1, 0);
console.log(p1.toString(), p2.toString());
console.log(p1.equal(p2));
console.log(p1.distance(p2));
console.log(new Point());
