function plus(p, q) {
  return p + q;
}
let a = 2;
let b = 0.1;
console.log(plus(a, b));

let s1 = 'hello';
let s2 = 'world';
let s3 = '100';
console.log(plus(s1, s2));
console.log(plus(s1, a));
console.log(plus(a, s1));
console.log(plus(s3, a));
console.log(plus(plus(s3, a), b));
console.log(plus(parseInt(plus(s3, a)), b));
console.log(plus(s3 * a, b));
