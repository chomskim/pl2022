console.log(`typeof [1, 2, 3] ${typeof [1, 2, 3]}`);
console.log(`typeof { x: 1 } ${typeof { x: 1 }}`);

let a; // a is undefined
console.log(`typeof a == ${typeof a}`);
console.log(`a == ${a}`);
console.log(`a ?? 1 == ${a ?? 1}`);
a = 100;
console.log(`typeof a == ${typeof a}`);
console.log(`a == ${a}`);
console.log(`a ?? 1 == ${a ?? 1}`);
console.log(`a ? a : 1 == ${a ? a : 1}`);
a = null;
console.log(`typeof a == ${typeof a}`);
console.log(`a == ${a}`);
console.log(`a ?? 1 == ${a ?? 1}`); // JS 의 elvis operator
console.log(`a ? a : 1 == ${a ? a : 1}`); // ?: -- elvis operator

if (a === 1) console.log((a += 1));
else console.log((a = 1));
