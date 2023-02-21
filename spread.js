const max = Math.max(2,3,4,99);
// console.log(max);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const largest = Math.max(numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);