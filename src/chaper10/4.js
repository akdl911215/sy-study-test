// console.log(function add(x, y) {
//   return x + y;
// });

function add(x, y) {
  return x + y;
}
console.log(add());

const a = 1 + add(1, 2);
console.log(a);

function foo() {
  console.log("foo");
}
foo();

// (function bar() {
//   console.log("bar");
// });
// bar(); // ReferenceError: bar is not defined

const foo2 = function foo2() {
  console.log("foo2");
};
foo2();

const foo3 = function () {
  console.log("foo3");
};
foo3();
