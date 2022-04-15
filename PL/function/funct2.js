let P = [3, 2, 0, 1];
let Q = [];

function reverseBad(A, B) {
  for (let i = 0; i < A.length; ++i) {
    B[i] = A[A.length - i - 1];
  }
}
function reverseGood(A, B) {
  let copyA = A.slice();
  for (let i = 0; i < A.length; ++i) {
    B[i] = copyA[A.length - i - 1];
  }
}
reverseBad(P, Q);
console.log(Q);

reverseBad(P, P);
console.log(P);

P = [3, 2, 0, 1];
reverseGood(P, P);
console.log(P);
