// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/62048

// 내 풀이 (미해결)
function solution(w, h) {
  let answer = w * h;

  for (let x = 1; x <= w; x++) {
      answer -= Math.ceil(h * x / w) - Math.floor(h * (x - 1) / w);
  }
  return answer;
}

// 지원 님의 풀이
function gcd(w, h) {    
  const tmp = w % h;
  if (tmp === 0) {
      return h;
  }
  return gcd(h, tmp);
}

function solution(w, h) {
  const newGcd = gcd(w, h);
  return w * h - (w + h - newGcd);
}

// 피드백
// 나는 일차함수로 사용하였는데, 최대공약수에 대한 풀이를 보고 굉장히 흥미로웠다.
// 내것으로 만들자.