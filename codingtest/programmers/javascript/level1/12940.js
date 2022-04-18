// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12940

// 내 풀이
function solution(n, m) {
  const GCD = (n, m) => {
    if (n % m) return GCD(m, n % m);
    else return m
    }
  
  return [GCD(n, m), n * m / GCD(n, m)]
}

// 다른 사람의 풀이
function gcdlcm(a, b) {
  var r;
  for(var ab= a*b;r = a % b;a = b, b = r){}
  return [b, ab/b];
}

// 피드백
// 16번 줄은 내가 그토록 많이 사용하였던 for문에 대해서도 모르는게 많구나를 느끼게 해준 코드였다.
// 블로그 링크 : https://velog.io/@heejeyang/%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98GCD-LCM