const sum = 100;

const str = "안녕하세요. " + sum + "고객님 커피 받아가세용";
console.log(str);
const str2 = `안녕하세요. ${sum}고객님 커피 받아가세용`;
console.log(str2);

if (!!0 === false) {
  console.log("falsy 값이지만 flase 처럼 사용중!");
}

// 컴퓨터 공학에서 : ! > not
