// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12899

// 내 풀이
function solution(n) {
  let answer = "";
  while (n > 0) {
      const rest = n % 3;
      n = parseInt(n / 3);
      if (rest) answer = rest + answer;
      else {
          answer = 4 + answer;
          n--;
      }
  };
  return answer;
}

// 다른 사람의 풀이
function change124(n) {
  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

// 피드백
// 깔끔하다.. 이런 식으로 해결할 수 있구나 라는 생각이 들었다.