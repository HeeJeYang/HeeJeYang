// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12924

// 내 풀이
function solution(n) {
  let answer = 1;
  for (let i = 1; i < n / 2; i++) {
      let sum = 0;
      for (let j = i; j < n; j++) {
          sum += j;
          if (n === sum) {
              answer++;
              break;
          }
          if (sum > n) break;
      }
  }
  return answer;
}

// 다른 사람의 풀이
function expressions(num) {
  var answer = 0;

for(var i=1; i<=num; i++) {
  if (num%i == 0 && i%2 == 1)
    answer++
}
  return answer;
}

// 피드백
// 홀수인 약수의 개수와 답이 같다고 한다.. 충격!