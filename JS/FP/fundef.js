function add(x, y) {
  return x + y;
}
console.log(add(1, 2));
console.log(add(1.5, 2.5));
console.log(add('Hello ', 'World'));
console.log(JSON.stringify(add([1, 2, 3], [4, 5, 6])));

const plus = (x, y) => x + y;
console.log(plus(1, 2));
console.log(plus(1.5, 2.5));
console.log(plus('Hello ', 'World'));
console.log(JSON.stringify(plus([1, 2, 3], [4, 5, 6])));

function fst(x, y) {
  return x;
}
function snd(x, y) {
  return y;
}
console.log(fst(1, 2));
console.log(fst(1.5, 2));
console.log(fst('Hello ', 2));
console.log(fst([1, 2, 3], 'World'));

console.log(snd([1, 2, 3], 2));
console.log(snd(1.5, 2.5));
console.log(snd(1, 'World'));
console.log(snd(1.5, [4, 5, 6]));

let d = 1;
function incd(x) {
  return x + d;
}
console.log(`incd(10)=${incd(10)}`);
d = 2;
// C, C++ 의 #define d 1 의 형태이면 d=1이 적용된다.(macro 확장)
// 여기서는 d=2가 적용됨
console.log(`incd(10)=${incd(10)}`);

const incx = (x) => x + d;
function fun(x, f) {
  console.log(`function fun this=${this}`);
  return f(x);
}
console.log(`fun(10, incx)=${fun(10, incx)}`);
d = 3;
console.log(`fun(10, incx)=${fun(10, incx)}`);
console.log(`fun(10, x => x+d)=${fun(10, (x) => x + d)}`);

const fa1 = (n) => {
  if (n <= 1) return 1;
  else return n * fa1(n - 1);
};
const fa2 = (n) => (n <= 1 ? 1 : n * fa2(n - 1));
console.log(`fa1(5)=${fa1(5)} fa2(5)=${fa2(5)}`);

const i = (x) => ({ v: x, w: x });
console.log(`i(5)=${JSON.stringify(i(5))}`);

function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}
console.log(`hypotenuse(5,10)=${hypotenuse(5, 10)}`);

function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return hypotenuse(dx, dy);
}
console.log(`distance(0, 0, 1, 1)=${distance(0, 0, 1, 1)}`);

function swap(obj) {
  const { x, y } = obj;
  console.log(`obj=${JSON.stringify(obj)} x=${x} y=${y}`);
  return { x: y, y: x };
}
console.log(`swap({ x: 100, y: 200 }) ${JSON.stringify(swap({ x: 100, y: 200 }))}`);
//let x = 50;
//let y = 70;
//{x,y} = swap({x,y})
let { x, y } = swap({ x: 50, y: 70 });
console.log(`x=${x} y=${y}`);

console.log(`swap({ x, y }) ${JSON.stringify(swap({ x, y }))}`);
console.log(`swap({ x: 100, y: 200, z: 0 }) ${JSON.stringify(swap({ x: 100, y: 200, z: 0 }))}`);

let a = [(x) => x * x, 20];
console.log(`a[0](a[1])=${a[0](a[1])}`);

(function () {
  let scope = 'global scope'; // A global variable
  function checkscope() {
    let scope = 'local scope'; // A local variable
    function f() {
      return scope;
    } // Return the value in scope here
    return f();
  }
  console.log(checkscope());
})();

(function () {
  let scope = 'global scope'; // A global variable
  function checkscope() {
    let scope = 'local scope'; // A local variable
    function f() {
      return scope;
    } // Return the value in scope here
    return f;
  }
  let s = checkscope()();
  console.log(s);
})();
