// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12928

// 내 풀이
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= parseInt(Math.pow(n, 0.5)); i++) {
      if (!(n % i)) answer += i === n / i ? i : i + n / i;
  }
  return answer;
}

// 다른 사람의 풀이
function solution(n, a=0, b=0) {
  return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
}

// 피드백
// 코드는 짧으나 가독성 및 효율성이 떨어짐.
// 허나 알아두면 나쁠 건 없다.