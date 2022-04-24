// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12910

// 내 풀이
function solution(arr, divisor) {
  const result = arr.filter(v => !(v % divisor)).sort((a, b) => a - b)
  return result.length ? result : [-1]
}