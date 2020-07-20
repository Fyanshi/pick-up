const s = new Set();

// [2, 3, 4, 5, 6, 7, 8].forEach(x => s.add(x));

// for (let i of s) {
//     console.log(i);
// }


s.add('a').add('b').add('c').add('d').add('e').add('a');
// console.log(s.size);

// s.has(1);
console.log('keys', s.keys());
console.log('values', s.values());
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 50];
let unique = [...new Set(arr)];
console.log(unique);
console.log(...arr);

let map = new Map([
    [unique, 1]
]);
console.log('map', map);

const myMap = new Map().set(true, 1).set('a', 3);
const temp = [...myMap];
console.log('temp', temp);