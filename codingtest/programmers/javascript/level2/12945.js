// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12945

// 내 풀이
function solution(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
      const fib = arr[arr.length - 2] + arr[arr.length - 1];
      arr.push(fib >= 1234567 ? fib % 1234567 : fib)
  }
  return arr[arr.length - 1]
}

// 다른 사람의 풀이
function fibonacci(n) {
  var a = 0, b = 1, f = 1;
  for (var i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}