const arr = [1, 2, 3, 4, 5];

// compute sum of arr
let sum = 0;
for (let i = 0; i < arr.length; i += 1) {
  sum += arr[i];
}
console.log(`sum = ${sum}`);

// 10 을 넘지 않는 최대값
sum = 0;
let i = 0;
while (true) {
  console.log(`arr[${i}] = ${arr[i]}`);
  if (sum + arr[i] >= 10) break;
  sum += arr[i];
  i += 1;
}
console.log(`sum = ${sum}`);

// 첫번째 값은 더하지 않음
sum = 0;
for (let i = 0; i < arr.length; i += 1) {
  if (i === 0) continue;
  sum += arr[i];
}
console.log(`sum = ${sum}`);

// Dangling Else Ambiguity
i = 1;
let j = 1;
let k = 2;
if (i === j)
  if (j === k) console.log('i equals k');
  else console.log("j doesn't equal k");

if (i === j) {
  if (j === k) console.log('i equals k');
} else console.log("i doesn't equal j");

// Switch Statement
const CREATE = 'CREATE';
const READ = 'READ';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const LIST = 'LIST';

let action = 'Hello';

switch (action) {
  case CREATE:
    console.log(`Do Action ${CREATE}`);
    break;
  case READ:
    console.log(`Do Action ${READ}`);
    break;
  case UPDATE:
    console.log(`Do Action ${UPDATE}`);
    break;
  case DELETE:
    console.log(`Do Action ${DELETE}`);
    break;
  case LIST:
    console.log(`Do Action ${LIST}`);
    break;
  default:
    console.log(`Undefined Action`);
}
console.log(`Switch Action End`);
