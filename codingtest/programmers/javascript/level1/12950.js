// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12950

// 내 풀이
function solution(arr1, arr2) {
  return arr1.map((v1, i1) => v1.map((v2, i2) => v2 + arr2[i1][i2]))
}

// 다른 사람의 풀이
function solution(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]))
  // 코드를 간결하게 쓰는 것이 개발자들의 로망(?) 같은 느낌이 든다.
  // 이를 본받되 가독성을 해치진 않게 노력하자.
}