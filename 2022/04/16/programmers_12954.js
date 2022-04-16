// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12954

// 내 풀이
function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) answer.push(x * i);
  return answer
}

// 다른 사람의 풀이
function solution (x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
  // v: value, i: index
  // n개의 원소를 갖는 배열을 만들고, 각각 x라는 값을 넣어준 후, map으로 적절한 값을 곱한다.
}