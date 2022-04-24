// 문제 풀이 : https://programmers.co.kr/learn/courses/30/lessons/12917

// 내 풀이
function solution(s) {
  const answer = [];
  for (let i = 0; i < s.length; i++) {
      answer.push(s.charCodeAt(i));
  }
  return answer.sort((a, b) => b - a).map(v => String.fromCharCode(v)).join("")
  
}

// 다른 사람의 풀이
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}

// 피드백
// 굳이 아스키코드로 변환하지 않아도 알아서 되는 것 확인..