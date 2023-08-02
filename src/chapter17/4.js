function foo() {
  console.log("global function foo");
}

function bar() {
  function foo() {
    // 중첩 함수
    console.log("롤스로이드 추울바알!");
  }
  foo(); // local function foo
}

bar();
