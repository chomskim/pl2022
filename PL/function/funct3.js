function ifthen(c, e1, e2) {
  if (c) return e1;
  else return e2;
}
let A = [1, 2, 3];
let c = true;
let e1 = 1;
let e2 = 100;
console.log(c ? A[e1] : A[e2]);
console.log(ifthen(c, A[e1], A[e2]));

c = false;
console.log(c ? A[e1] : A[e2]);
console.log(ifthen(c, A[e1], A[e2]));
