// 문제 풀이 : https://programmers.co.kr/learn/courses/30/lessons/12918

// 내 풀이
function solution(s) {
  const numbers = "1234567890"
  return (s.length === 4 || s.length === 6) && s.split("").filter(v => numbers.includes(v)).length === s.length
}

// 다른 사람의 풀이
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

// 피드백
// 매력 넘치는 정규식.. 내 것으로 만들고 말겠다.