// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12931

// 내 풀이
function solution(n)
{
   // return (n+"").split("").reduce((v,i) => +v + +i)
    let answer = 0;
    const N = String(n).split("");
    for (let i = 0; i < N.length; i++) {
        answer += Number(N[i])
    }
    return answer
}

// 다른 사람의 풀이
function solution(n){
  // 쉬운방법
  return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

// 피드백
// 처음에 6번 줄 코드를 이용하여 테스트했더니 마지막 테스트케이스 하나만 통과하지 못했다.
// 코드에서 문제점을 찾으려 했으나 찾지 못해 풀어쓰는 방법을 구현하여 해결 후 다른 개발자 분들의 QnA를 보았더니 같은 현상을 겪은 분들이 많은 것 같았다.
// 테스트 코드의 오류인 것 같다.