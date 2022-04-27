// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12949

// 내 풀이
function solution(arr1, arr2) {
  const answer = [];
  let value = 0;
  let valueArr = [];
  for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2[0].length; j++) {
          for (let k = 0; k < arr2.length; k++) {
              value += arr1[i][k] * arr2[k][j]
          }
          valueArr.push(value)
          value = 0;
      }
      answer.push(valueArr)
      valueArr = [];
  }
  return answer;
}

// 다른 사람의 풀이
function solution(arr1, arr2) {
  return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}

// 피드백
// 시간복잡도 N(O^3)이 아닌게 있을까 했지만 없는 것 같다.