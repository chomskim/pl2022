// Fibonacci
function rfib(n) {
  // recursive, bad algorithm
  if (n === 0 || n === 1) return 1;
  else return rfib(n - 1) + rfib(n - 2);
}

function lfib(n) {
  // loop, good algorithm
  let fold1 = 1;
  let fold2 = 1;
  let fnew;
  for (let i = 2; i <= n; i += 1) {
    fnew = fold1 + fold2;
    fold2 = fold1;
    fold1 = fnew;
  }
  return fnew;
}

function tailfib(n, prev, curr) {
  // tail recursive, good algorithm
  if (n === 0 || n === 1) return curr;
  return tailfib(n - 1, curr, prev + curr);
}
function tfib(n) {
  return tailfib(n, 1, 1);
}

let memo = [];
function memofib(n) {
  if (!memo[n]) {
    if (n === 0 || n === 1) val = 1;
    else val = memofib(n - 1) + memofib(n - 2);
    memo[n] = val;
  }
  return memo[n];
}

const num = 24;

let start = Date.now();
for (count = 1; count <= 5000; count++) {
  fib = rfib(num);
}
console.log(`rfib(${num}) = ${fib}`);
console.log(`Duration ${Date.now() - start} ms`);

start = Date.now();
for (count = 1; count <= 5000; count++) {
  fib = lfib(num);
}
console.log(`lfib(${num}) = ${fib}`);
console.log(`Duration ${Date.now() - start} ms`);

start = Date.now();
for (count = 1; count <= 5000; count++) {
  fib = tfib(num);
}
console.log(`tfib(${num}) = ${fib}`);
console.log(`Duration ${Date.now() - start} ms`);

start = Date.now();
for (count = 1; count <= 5000; count++) {
  fib = memofib(num);
}
console.log(`memofib(${num}) = ${fib}`);
console.log(`Duration ${Date.now() - start} ms`);
