// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/77884

// 내 풀이
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
      Math.sqrt(i) === parseInt(Math.sqrt(i)) ? answer -= i : answer += i;
  }
  return answer;
}

// 다른 사람의 풀이
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
          answer -= i;
      } else {
          answer += i;
      }
  }
  return answer;
}

// 피드백
// 같은 풀이이다!