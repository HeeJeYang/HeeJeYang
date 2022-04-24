// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12916

// 내 풀이
function solution(s){
  let countp = 0;
  let county = 0;
  s.split("").map(v => {
      if (v === "p" || v === "P") countp++
      if (v === "y" || v === "Y") county++
      return v
  })
  return countp === county
}

// 다른 사람의 풀이
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// 피드백
// 대문자로 통일 후 특정 문자를 기준으로 split한다는 생각 자체가 대단하다..