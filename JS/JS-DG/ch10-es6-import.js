import { mean, stddev } from './ch10-es6-export';
import stat from './ch10-es6-export-default';
let mea = mean([1, 3, 5, 7, 9]); // => 5
let std = stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
console.log(mea);
console.log(std);

console.log(stat);
mea = stat.mean([1, 3, 5, 7, 9]); // => 5
std = stat.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
console.log(mea);
console.log(std);
