// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/68644

// 내 풀이
function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
           answer.push(numbers[i] + numbers[j])   
      }
  }
  return answer.filter((v, i) => answer.indexOf(v) === i).sort((a, b) => a - b);
}

// 다른 사람의 풀이