// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12911

// 내 풀이
function solution(n) {
  const count1OfN = n.toString(2).split("").filter(v => +v);
  while (true) {
      n++;
      if (n.toString(2).split("").filter(v => +v).length === count1OfN.length) break;
  }
  return n;
}

// 다른 사람의 풀이
function nextBigNumber(n) {
  var i, j;
  for (i = 0; !(n & 1); i++) {n = n >> 1; } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
  for (j = 0; n & 1; i++, j++) {n = n >> 1; } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
  for (j--, n++; i !== j; i--) {n = n << 1; } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
  for (i; i; i--, n++) {n = n << 1; } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
  return n;
}

// 피드백
// 배워놔야겠다.