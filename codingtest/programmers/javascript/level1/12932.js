// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12932

// 내 풀이
function solution(n) {
  return (n+"").split("").reverse().map(v => +v)
}

// 다른 사람의 풀이
function solution(n) {
  // 문자풀이
  // return (n+"").split("").reverse().map(v => parseInt(v));

  // 숫자풀이
  var arr = [];

  do {
      arr.push(n%10);
      n = Math.floor(n/10);
  } while (n>0);

  return arr;
}

// 피드백
// 숫자풀이 쪽은 생각하지 못했는데 심지어 문자풀이보다 계산이 빠르다고 한다.
// 내 것으로 만들자!