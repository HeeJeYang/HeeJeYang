// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12943

// 내 풀이
function solution(num) {
  let count = 0;
  while (num !== 1 && count <= 500) {
    count++;
    if (!(num % 2)) num = num / 2
    else num = num * 3 + 1
  };
  if (count > 500) return -1
  else return count
};

// 다른 사람의 풀이
function collatz(num) {
  var answer = 0;
  while(num !=1 && answer !=500){ // 옛날 문제라 !=가 사용되고 있는 것 같다. 이 부분에 대해서도 블로깅하자.
    // 블로그 링크 : https://velog.io/@heejeyang/%EA%B3%BC-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%9E%80
      num%2==0 ? num = num/2 : num = num*3 +1;
      answer++;
    }
    return num == 1 ? answer : -1;
    // 삼단 연산자 활용!
}