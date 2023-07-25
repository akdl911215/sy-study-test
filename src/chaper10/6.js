// function sub(x, y) {
//   return x - y;
// }
//
// console.log(sub(2, 1));
function repeat(n, f) {
  for (let i = 0; i < n; ++i) {
    f(i);
  }
}

// const logAll = (i) => console.log(i);
// repeat(5, logAll);

repeat(5, (i) => {
  console.log("i : ", i);
  if (i % 2) console.log(i);
});
