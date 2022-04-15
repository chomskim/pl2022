let d = 1;
function incd(p) {
  console.log('In incd', d, p + d);
  return p + d;
}
function incdx(p, x) {
  d += x;
  console.log('In incdx', d, p + d);
  return p + d;
}
console.log(d + incd(1) + incdx(1, 100));
d = 1;
console.log(incdx(1, 100) + d + incd(1));
d = 1;
console.log(incd(1) + incdx(1, 100) + d);
