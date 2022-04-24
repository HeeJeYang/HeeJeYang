// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12921#

// 내 풀이1 (효율성 테스트에서 실패)
function solution(n) {
  const answer = [2];
  let isNotPrime = false
  for (let i = 3; i <= n; i += 2) {
      for (let j = 0; j < answer.length; j++) {
          if (!(i % answer[j]) || answer[j] > Math.pow(i)) {
              isNotPrime = true;
              break;
          }
      }
      if (!isNotPrime) {
          answer.push(i)
      }
      isNotPrime = false
  }
  console.log(answer)
  return answer.length
}

// 내 풀이2
function solution(n) {
  if (n === 2) return 1
  else if (n <= 4) return 2
  const answer = [2, 3];
  let isNotPrime = false
  for (let i = 5; i <= n; i += 2) {
      for (let j = 0; j < answer.length; j++) {
          if (Math.pow(i, 0.5) < answer[j]) break;
          if (!(i % answer[j])) {
              isNotPrime = true;
              break;
          }
       }
      if (!isNotPrime) {
          answer.push(i)
      }
      isNotPrime = false
  }
  console.log(answer)
  return answer.length
}

// 다른 사람의 풀이
function solution(n) {
  const s = new Set();
  for(let i=1; i<=n; i+=2){
      s.add(i);
  }
  s.delete(1);
  s.add(2);
  for(let j=3; j<Math.sqrt(n); j++){
      if(s.has(j)){
           for(let k=j*2; k<=n; k+=j){    
              s.delete(k);
           }
      }
  }
  return s.size;
}

// 피드백
// set을 이용한 풀이는 처음 본 것 같다. 나중에 따로 정리해보자.
// 블로그 링크 : 