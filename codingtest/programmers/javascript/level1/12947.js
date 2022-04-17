// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12947

// 내 풀이
function solution(x) {
  const a = String(x)
  let b = 0;
  for (let i = 0; i < a.length; i++) {
      b += Number(a[i])
  }
  return !(x % b) 
}

// 다른 사람의 풀이
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
  // (n + ""), +a, +b에 대해 블로깅 예정
  // 블로그 링크 : https://velog.io/@heejeyang/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%9E%90%EB%8F%99%ED%98%95%EB%B3%80%ED%99%98
}