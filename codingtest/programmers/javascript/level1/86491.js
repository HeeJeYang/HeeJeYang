// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/86491

// 내 풀이
function solution(sizes) {
  const bigger = [];
  const smaller = [];
  sizes.map(v => {
      if (v[0] <= v[1]) {
          smaller.push(v[0]);
          bigger.push(v[1]);
      } else {
          smaller.push(v[1]);
          bigger.push(v[0]);
      }
      return v
  })
  return Math.max(...bigger) * Math.max(...smaller)
}

// 다른 사람의 풀이
function solution(sizes) {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
  return hor * ver;
}

// 피드백
// 두줄짜리 코드로 좋아보이지만 속도 면에선 내가 더 괜찮아보인다.