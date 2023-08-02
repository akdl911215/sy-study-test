function Circle(radius) {
  this.radius2 = radius;
  this.getDiameter = function () {
    return 2 * this.radius2;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

Circle(5);
