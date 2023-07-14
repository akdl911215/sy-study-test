// console.log("Cat" || "Dog"); // Cat !== falsy > Cat
// console.log("Cat" || null);
// console.log(null || "Cat"); // null === falsy > Cat === truthy

// or > 0 0 > 다 1
// 인터프리터 언어가
// 위 > 아래
// 좌 > 우

console.log(null && "Cat"); // null
console.log("Cat" && null); // null
console.log("Cat" && "Dog"); // Dog
