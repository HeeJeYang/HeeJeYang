// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12969

// 내 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let answer = "";

for (let j = 0; j < a; j++) {
    answer += "*"
}

for (let i = 0; i < b; i++) {
    console.log(answer)
}
});

// 다른 사람의 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

    // repeat: 문자열을 주어진 횟수만큼 반복하여 붙인 새로운 문자열을 반환하는 함수
});