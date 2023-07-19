// function add(x, y) {
//   return x + y;
// }
//
// function add({ x, y }) {
//   return x + y;
// }

function stringAdd(x, y) {
  return x + y;
}
console.log(stringAdd("안", "뇽"));
console.log(stringAdd("뇽", "안"));
// 안뇽
// 뇽안

function stringAdd2({ x, y }) {
  return x + y;
}
console.log(stringAdd2({ x: "안", y: "뇽" }));
console.log(stringAdd2({ y: "뇽", x: "안" }));

const hello = {
  x: "헬",
  y: "로",
};
console.log(stringAdd2(hello));
// 안뇽
// 안뇽
