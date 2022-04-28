// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12941

// 내 풀이
function solution(A,B){
  B.sort((a, b) => b - a);
  return A.sort((a, b) => a - b).reduce((acc, cur, idx) => {
      return acc + cur * B[idx]
  }, 0)
}

// 다른 사람의 풀이
function solution(A,B){
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)
  return A.reduce((total, val, idx) => total + val * B[idx], 0)
}