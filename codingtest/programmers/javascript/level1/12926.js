// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12926

// 내 풀이
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
      if (s[i] === " ") {
          answer += " "
          continue;
      };
      const asciiChar = s.charCodeAt(i);
      if ((asciiChar <= 90 && asciiChar + n > 90) || (asciiChar >= 97 && asciiChar + n > 122)) answer += String.fromCharCode(asciiChar + n - 26)
      else answer += String.fromCharCode(s.charCodeAt(i) + n)
  }
  return answer;
}

// 다른 사람의 풀이
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer= '';

  for(var i =0; i <s.length; i++){
      var text = s[i];
      if(text == ' ') {
          answer += ' '; 
          continue;
      }
      var textArr = upper.includes(text) ? upper : lower;
      var index = textArr.indexOf(text)+n;
      if(index >= textArr.length) index -= textArr.length;
      answer += textArr[index];
  }
  return answer;
}

// 피드백
// 아스키코드를 사용하지 않고 할 수 있는 방법이다 습득하자!