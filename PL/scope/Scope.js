let i = 100;
let iarr = [1, 2, 3];
let s2 = '';
let j = 99;
addj(iarr);
for (let j = 0; j < iarr.length; ++j) {
  let s1 = 'Hello';
  s2 = s1;
  i = j;
  console.log(iarr[j]);
}
s1 = 'World';
console.log(s1, s2);
console.log('i=', i);

j = 0;
function addj(arr) {
  console.log('j=', j);
  for (let i = 0; i < arr.length; ++i) {
    arr[i] += j;
  }
}
