// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12930

// 내 풀이
function solution(s) {
  return s.split(" ").map((v, i) => v.split("").map((m, n) => n % 2 ? m.toLowerCase() : m.toUpperCase()).join("")).join(" ")
}

// 다른 사람의 풀이
function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

}

// 피드백
// 정규식은 앞으로의 코딩생활을 위해 필수로 알아야하지만,
// 짧은 코딩이 무조건 속도가 빠르진 않다.
// 위에 적은 "다른 사람의 풀이"는 메서드를 많이 사용하기 때문에 비교적 느리다.