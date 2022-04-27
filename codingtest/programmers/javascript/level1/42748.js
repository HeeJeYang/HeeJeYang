// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42748

// 내 풀이
function solution(array, commands) {
  const answer = [];
  for (let command of commands) {
      answer.push(array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1])
  }
  return answer;
}

// 다른 사람의 풀이
function solution(array, commands) {
  return commands.map(command => {
      const [sPosition, ePosition, position] = command
      const newArray = array
          .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
          .sort((a,b) => a - b)    

      return newArray[position - 1]
  })
}

// 피드백
// 구조분해 할당을 이용한 것이 인상깊었다.