// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/68935

// 내 풀이
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3)
}