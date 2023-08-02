// console.log(this);
//
// function a(x, y) {
//   const c = 1;
//   console.log(this);
//   return this.c + x + y;
// }
// console.log(a(1, 2));

function Circle(radius) {
  console.log("up this : ", this);

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  console.log("down this : ", this);
}
const a = new Circle(5);
a.getDiameter();
const b = new Circle(10);
b.getDiameter();
const c = new Circle(20);
c.getDiameter();

// 함수 && 일반함수로 호출이 가능하면 non-constructor
Circle();

// 위에 조건을 제외한 나머지는 다~~~ constructor
