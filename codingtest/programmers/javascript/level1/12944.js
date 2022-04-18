// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12944

// 내 풀이
function solution(arr) {
  return arr.reduce((v,i) => v + i) / arr.length
}

// 다른 사람의 풀이
function average(array){
  return array.reduce((a, b) => a + b) / array.length;
  // 일치!
}