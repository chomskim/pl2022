// Factorial

function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}
const rfact = (n) => (n === 0 ? 1 : n * rfact(n - 1));

function afact(a, n) {
  // Tail Recursion --> 자동으로 Loop으로 변형됨
  if (n === 0) return a;
  else return afact(a * n, n - 1); // recursive call은 return에만 온다
}
function fact(n) {
  return afact(1, n);
}
for (let i = 1; i <= 10; ++i) {
  console.log(`${i}!=${factorial(i)}`);
  console.log(`${i}!=${rfact(i)}`);
  console.log(`${i}!=${fact(i)}`);
}
