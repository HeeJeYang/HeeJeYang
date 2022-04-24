// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12903

// 내 풀이
function solution(s) {
  const mid = (s.length - 1) / 2
  return mid === parseInt(mid) ? s[mid] : s[mid - 0.5] + s[mid + 0.5]
}

// 다른 사람의 풀이
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// 피드백
// 이 개발자 분의 풀이에서 사용된 substr의 경우 나중에 제거될 가능성이 있어 substring을 대신 사용하라고 한다.