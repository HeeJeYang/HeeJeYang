// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12901#

// 내 풀이
function solution(a, b) {
  const dayOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let dateCount = 4;  
  for (let month = 1; month < a; month++) {
      if (month === 2) dateCount += 29
      else if ((month < 8 && month % 2) || (month >= 8 && !(month % 2))) dateCount += 31
      else dateCount += 30
  }
  return dayOfTheWeek[(dateCount + b) % 7];
}

// 다른 사람의 풀이
function getDayName(a,b){
  var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  var date = new Date(`2016-${a}-${b}`);
var day = date.getDay()
  return arr[day];
}

// 피드백
// date를 쓰면 가독성은 좋지만 속도가 조금 떨어진다!