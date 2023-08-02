const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((el) => el * 2);
console.log(arr2);

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(function (obj) {
  const rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformattedArray);

const arr3 = [1, 2, 3, 4, 5];
const arr4 = arr3.map((el) => {
  if (el % 2 === 0) {
    let mapVariable = 0;
    console.log("el : ", el);
    mapVariable = el;
    return mapVariable;
  }
});
console.log("arr4 : ", arr4);
