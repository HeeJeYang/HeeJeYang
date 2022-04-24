// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12906

// 내 풀이
function solution(arr)
{
    const answer = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === answer[answer.length - 1]) continue;
        else answer.push(arr[i])
    }
    return answer;
}

// 다른 사람의 풀이
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

// 피드백
// filter 함수라는 좋은 기능을 사용하지 못했다..(박은지는 귀엽다..)