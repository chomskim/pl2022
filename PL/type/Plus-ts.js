"use strict";
function plusNumber(p, q) {
    return p + q;
}
function plusString(p, q) {
    return p + q;
}
function plus(p, q) {
    return p + q;
}
let a = 1;
let b = 0.1;
console.log(plusNumber(a, b));
let s1 = 'hello';
let s2 = 'world';
let s3 = '100';
console.log(plusString(s1, s2));
console.log(plusString(s1, a.toString()));
console.log(plusString(a.toString(), s1));
console.log(plusString(s3, a.toString()));
console.log(plusString(plusString(s3, a.toString()), b.toString()));
console.log(plusNumber(parseInt(plusString(s3, a.toString())), b));
console.log(plus(s1, s2));
console.log(plus(s1, a));
console.log(plus(a, s1));
console.log(plus(s3, a));
console.log(plus(plus(s3, a), b));
console.log(plus(parseInt(plus(s3, a)), b));
