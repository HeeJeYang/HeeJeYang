// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/1845

// 내 풀이
function solution(nums) {
  const mySet = new Set(nums)
  return nums.length / 2 >= [...mySet].length ? [...mySet].length : nums.length / 2
}

// 다른 사람의 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}

// 피드백
// Set에 대해서 배울 수 있는 좋은 기회였다.