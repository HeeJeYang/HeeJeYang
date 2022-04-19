// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12934

// 내 풀이
function solution(n) {
  return Math.sqrt(n) - parseInt(Math.sqrt(n)) ? -1 : Math.pow(Math.sqrt(n) + 1, 2)
}

// 다른 사람의 풀이
function nextSqaure(n){
  var result = 0;
  var x = 0;
  while (x*x < n){
    x++;
  }
  if (x*x == n){
    x++;
    result = x*x; 
  }else{
    result = -1;
  }

  return result;
}

// 피드백
// 다양한 방법에 대해 이해하고 넘어가자.