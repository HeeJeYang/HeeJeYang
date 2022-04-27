// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/86051

// 내 풀이
function solution(numbers) {
  const number = Array(10).fill(true);
  for (let i = 0; i < numbers.length; i++) {
      number[numbers[i]] = false;
  }
  return number.reduce((acc, cur, idx) => {
      return cur ? acc + idx : acc
  }, 0)
}

// 다른 사람의 풀이
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 피드백
// 너무 어렵게 생각했다 ㅠㅠ