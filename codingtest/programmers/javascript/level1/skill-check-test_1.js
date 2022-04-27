// 문제 1
function solution(n) {
  if (n <= 1) return n;

  let divisor = n + 1;
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
      if (!(n % i)) {
          divisor += i === n / i ? i : i + (n / i)   
      }
  }
  return divisor
}

// 문제 2
function solution(n) {
  return (n + "").split("").reverse().map(v => +v)
}