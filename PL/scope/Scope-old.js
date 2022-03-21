i = 100;
iarr = [1, 2, 3];
s2 = '';
j = 99;
addj(iarr);
for (var j = 0; j < iarr.length; ++j) {
  var s1 = 'Hello';
  s2 = s1;
  i = j;
  console.log(iarr[j]);
}
console.log(s1);
s1 = 'World';
console.log(s1, s2);
console.log('i=', i);
console.log('j=', j);
j = 0;
function addj(arr) {
  console.log('j=', j);
  for (let i = 0; i < arr.length; ++i) {
    arr[i] += j;
  }
}
