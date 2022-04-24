// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12922

// 내 풀이
function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
      i % 2 ? answer += "수" : answer += "박"
  }
  return answer;
}

// 다른 사람의 풀이
const waterMelon = n => "수박".repeat(n).slice(0,n);

// 피드백
// repeat(n)을 repeat(n / 2 + 1)로 해도 좋을 것 같다!