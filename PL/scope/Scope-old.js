var i = 100;
var iarr = [1, 2, 3];
var s2 = '';
var j = 99;
addj(iarr);
for (var j = 0; j < iarr.length; ++j) {
  var s1 = 'Hello';
  s2 = s1;
  i = j;
  console.log(iarr[j]);
}
console.log(s1);
var s1 = 'World';
console.log(s1, s2);
console.log('i=', i);
console.log('j=', j);
j = 0;
function addj(arr) {
  console.log('j=', j);
  for (var k = 0; k < arr.length; ++k) {
    arr[k] += j;
  }
  console.log('k=', k);
}
