// Indirect Recursive
function even(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else return odd(n - 1);
}
function odd(n) {
  if (n == 0) return false;
  else if (n == 1) return true;
  else return even(n - 1);
}

for (let i = 0; i < 20; ++i) {
  if (even(i)) console.log(i, ' is even!');
  else console.log(i, ' is odd!');
}
