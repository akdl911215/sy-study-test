const circle = {
  radius: 5, // 프로퍼티 > 프로퍼티 키 : 프로퍼티 값

  // 원의 지름
  getDiameter: function () {
    return 2 * this.radius; // this 는 circle 을 가리킨다.
  },
};

console.log(circle.getDiameter()); // 10
