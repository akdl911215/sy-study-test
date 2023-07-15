function solution(my_string, overwrite_string, s) {
  let start = "";
  let end = "";
  for (let i = 0; i < my_string.length; ++i) {
    if (i < s) start += my_string[i];

    if (i > s && overwrite_string.length + s < i + 1) end += my_string[i];
  }

  return `${start}${overwrite_string}${end}`;
}

console.log(solution("He11oWor1d", "lloWorl", 2));

// https://school.programmers.co.kr/learn/courses/30/lessons/181943
