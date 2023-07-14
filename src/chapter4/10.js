// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy);
console.log(obj === copy);
console.log(obj == copy);

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);
console.log("merge1 : ", merge1);
console.log("o1 : ", o1);
console.log("o2 : ", o2);
