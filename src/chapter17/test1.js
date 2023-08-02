function factorial2(n) {
  return n <= 1 ? 1 : n * factorial2(n - 1);
}

console.log(factorial2(5));
