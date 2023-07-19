// ES5
const obj = {
  name: "Lee",
  sayHi: function () {
    console.log(`Hi! + ${this.name} 1`);
  },
};
console.log(obj.sayHi());

// ES6
const obj2 = {
  name: "Lee",
  // 메서드 축약 표현
  sayHi() {
    console.log(`Hi! ${this.name} 2`);
  },
};
console.log(obj2.sayHi());
