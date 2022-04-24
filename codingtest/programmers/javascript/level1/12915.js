// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12915

// 내 풀이
function solution(strings, n) {
  return strings.sort((a, b) => {
      if (a[n] < b[n]) return -1;
      else if (a[n] > b[n]) return 1;
      else {
          if (a < b) return -1;
          else if (a[n] > b[n]) return 1;
          else return 0;
      }
  })
}

// 다른 사람의 풀이
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

// 피드백
// sort과 localeCompare에 대해 블로깅하자.
// 블로그 링크 : 