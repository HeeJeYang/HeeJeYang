// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42586

// 내 풀이
function solution(progresses, speeds) {
  let idx = 0;
  const answer = [];
  while (idx < progresses.length) {
      let completedProgress = 0;
      progresses = progresses.map((v, i) => v + speeds[i])
      for (; idx < progresses.length; idx++) {
          if (progresses[idx] >= 100) completedProgress++;
          else break;
      }
      if (completedProgress) answer.push(completedProgress)
  }
  return answer;
}

// 다른 사람의 풀이
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for(let i = 0, j = 0; i< days.length; i++){
      if(days[i] <= maxDay) {
          answer[j] += 1;
      } else {
          maxDay = days[i];
          answer[++j] = 1;
      }
  }

  return answer;
}

// 피드백
// 내 방법은 O(n^2)인 반면 저 분의 풀이는 O(2n)이다. 잘배우자!!