// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/60057

// 내 풀이
function solution(S) {
  if (S.length === 1) return 1;
const halfOfS = Math.floor(S.length / 2);

let answer = 1001;
for (let i = 1; i <= halfOfS; i++) {
  let index = 0;
  let result = 0;
  let duplicateCount = 1;
      const cutArr = [];
  do {
    cutArr.push(S.substr(index, i));
    index += i;
  } while (index + i <= S.length)
  result += S.length - index
  cutArr.reduce((acc, cur, idx, src) => {
    if (acc === cur) {
      duplicateCount++  
    } else {
      if (duplicateCount >= 2) {
          result += (duplicateCount + "").length;
          duplicateCount = 1
      }
      result += i
    }
      if (idx === src.length - 1) {
        duplicateCount >= 2 ? result += i + (duplicateCount + "").length : result += i;
      }
    return cur;
  })
  answer = Math.min(answer, result)
}
return answer;
}

// 다른 사람의 풀이
const solution = s => {
  const range = [...Array(s.length)].map((_, i) => i + 1);
  return Math.min(...range.map(i => compress(s, i).length));
};

const compress = (s, n) => {
  const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
  return make(
    chunk(s, n).reduce(
      ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
      ['', '', 0]
    )
  );
};

const chunk = (s, n) =>
  s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];

// 피드백
