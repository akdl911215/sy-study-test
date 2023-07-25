let var1 = 1;
if (true) {
  let var2 = 2;
  if (true) {
    let var3 = 3;
  }
}
function foo() {
  let var4 = 4;

  function bar() {
    let var5 = 5;
  }
}
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
