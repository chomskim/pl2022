function plusNumber(p:number, q:number) {
  return p + q;
}
function plusString(p:string, q:string) {
  return p + q;
}
function plus(p:any, q:any){
  return p + q;
}
let a = 2;
let b = 0.1;
console.log(plusNumber(a, b));

let s1 = 'hello';
let s2 = 'world';
let s3 = '100';
console.log(plusString(s1, s2));
console.log(plus(s1, a));
console.log(plus(a, s1));
console.log(plus(s3, a));
console.log(plus(plus(s3, a), b));
console.log(plusNumber(parseInt(plus(s3, a)), b));
console.log(plusNumber(parseInt(s3) * a, b));

let obj1 = {x:1,y:100}
obj1 = {x:0,y:0}
