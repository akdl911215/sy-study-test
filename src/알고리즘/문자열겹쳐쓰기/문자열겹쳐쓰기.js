function solution(my_string, overwrite_string, s) {
  let start = "";
  let end = "";

  // length === 10
  // 10번돌껀데 > i 0 부터시작
  for (let i = 0; i < my_string.length; ++i) {
    // He > 첫번째 if 문
    if (i < s) {
      start += my_string[i];
    }

    // 11oWor1

    // d > 두번째 if 문
    if (i > s && overwrite_string.length + s < i + 1) {
      console.log("overwrite_string.length : ", overwrite_string.length);
      console.log("s : ", s);
      console.log("i : ", i);
      end += my_string[i];
    }
  }

  return `${start}${overwrite_string}${end}`;
}

console.log(solution("He11oWor1d", "lloWorl", 2));

// https://school.programmers.co.kr/learn/courses/30/lessons/181943
