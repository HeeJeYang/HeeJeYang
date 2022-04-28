// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12939

// 내 풀이
function solution(s) {
  const arr = s.split(" ");
  return arr.reduce((acc, cur) => {
      if (+cur < acc[0]) return [+cur, acc[1]]
      if (+cur > acc[1]) return [acc[0], +cur]
      return acc
  }, [+arr[0], +arr[0]]).join(" ")
}

// 다른 사람의 풀이
function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr)+' '+Math.max(...arr);
}

// 피드백
// 비록 코드는 길지만 속도로 봤을 땐 내가 더 빠를 것으로 예상된다.