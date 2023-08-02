const let1 = 1; // 코드 가장 바깥 영역에서 선언한 변수

if (true) {
  const let2 = 2; // 코드 블록 내에서 선언한 변수
  if (true) {
    const let3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}

function foo() {
  const let4 = 4; // 함수 내에서 선언한 변수

  function bar() {
    const let5 = 5; // 중첩된 함수 내에서 선언한 변수
  }
}

console.log(let1); //
console.log(let2); //
console.log(let3); //
console.log(let4); //
console.log(let5); //
