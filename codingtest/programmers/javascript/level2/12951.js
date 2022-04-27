// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12951

// 내 풀이
function solution(s) {
  const numbers = "1234567890"
  const lowerCaseArr = s.toLowerCase().split(" ");
  for (let i = 0; i < lowerCaseArr.length; i++) {
      if (lowerCaseArr[i] !== "" && !(numbers.includes(lowerCaseArr[i][0]))) {
          lowerCaseArr[i] = lowerCaseArr[i][0].toUpperCase() + lowerCaseArr[i].slice(1)
      }
  }
  return lowerCaseArr.join(" ");
}

// 다른 사람의 풀이
function solution(s) {
  return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

// 피드백
// charAt이란, 