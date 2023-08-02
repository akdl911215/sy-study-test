var x = "global";

export function foo123456789() {
  console.log("함수 내부 : ", x);
  // expect: local
  var x = "local";
  console.log("함수 내부2 : ", x);
}

foo();
console.log("함수 외부 : ", x);
// expect: global
