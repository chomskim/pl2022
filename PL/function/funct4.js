function hello() {
  console.log('Hello');
}
function bye() {
  console.log('Bye Bye');
}
function say(a, f) {
  console.log(`${a} says`);
  f();
}
say('kim', hello);
say('lee', bye);
