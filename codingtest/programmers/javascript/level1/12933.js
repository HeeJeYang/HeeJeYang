// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12933

// 내 풀이
function solution(n) {
  return (n + "").split("").sort((a, b) => +b - +a).join("") - 0
}

// 다른 사람의 풀이
function solution(n) {
  //숫자가 분명히 더 빠름
  var nums =[];
  do{
      nums.push(n%10);
      n=Math.floor(n/10);
  } while(n>0)

  return nums.sort((a,b)=>b-a).join('')*1;
  //문자는 느림
  // return (n+"").split('').sort((a,b)=>b-a).join('')*1;
}

// 피드백
// 숫자풀이를 짧게 생각했을 때 생각나는 게 없어서 문자풀이로 진행했었는데,
// 다른 개발자 분의 풀이를 보며 배워야겠다.