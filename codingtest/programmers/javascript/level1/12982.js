// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12982

// 내 풀이
function solution(d, budget) {
  let result = 0;
  d.sort((a, b) => a - b).reduce((acc, cur) => {
      if (acc + cur <= budget) result++;
          return acc + cur;
  }, 0)
  return result
}

// 다른 사람의 풀이
function solution(d, budget) {
  return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}

// 피드백
// ~란, 비트를 뒤집는 것이라고 한다.