console.log(true && "완료");

const done = true;
console.log(done && "호호");

const elem = null;
const value = elem && elem.value;
console.log(value);

function getStringLength(str) {
  str = str || "";
  console.log("str", str);
  return str.length;
}

console.log(getStringLength());
console.log(getStringLength("hi"));

const foo = null ?? "default string";
console.log("foo : ", foo);
const foo2 = "string" ?? "default";
console.log("foo2 : ", foo2);
const foo3 = "" ?? "feat";
console.log("foo3 : ", foo3);
