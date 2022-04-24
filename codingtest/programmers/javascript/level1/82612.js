// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/82612

// 내 풀이
function solution(price, money, count) {
  const answer = (1 + count) * count / 2 * price - money;
  return answer > 0 ? answer : 0;
}

// 다른 사람의 풀이
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

// :)