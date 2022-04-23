// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12935

// 내 풀이
function solution(arr) {
  const smallestNum = {idx: 0, val: arr[0]};
  if (arr.length === 1) return [-1];
  for (let i = 1; i < arr.length; i++) {
      if (smallestNum.val > arr[i]) {
          smallestNum.idx = i;
          smallestNum.val = arr[i];
      } 
  }
  return [...arr.slice(0, smallestNum.idx), ...arr.slice(smallestNum.idx + 1)];
}

// 다른 사람의 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  if(arr.length<1)return[-1];
  return arr;
}

// splice에 대해 알고 넘어가자.
// 블로그 링크 : https://velog.io/@heejeyang/%EB%B0%B0%EC%97%B4%EC%9D%98-%EB%82%B4%EC%9A%A9%EC%9D%84-%EB%B3%80%EA%B2%BD%ED%95%B4%EC%A3%BC%EB%8A%94-%EB%A9%94%EC%86%8C%EB%93%9Csplice