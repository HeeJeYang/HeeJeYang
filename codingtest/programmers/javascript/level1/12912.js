// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12912

// 내 풀이
function solution(a, b) {
  let answer = 0;
  if (b < a) {
      const temp = a;
      a = b;
      b = temp
  }
  for (let i = a; i <= b; i++) {
      answer += i
  }
  return answer;
}

// 다른 사람의 풀이
function adder(a, b){
  var result = 0
  //함수를 완성하세요


  return (a+b)*(Math.abs(b-a)+1)/2;
}

// 피드백
// 1부터 100까지의 합이 (1 + 100) * 100 / 2 = 5050인 것을 이용..?!