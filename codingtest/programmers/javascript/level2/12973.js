// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12973

// 내 풀이
function solution(s) {
  const duplicateCheckArr = [];
  for (let i = 0; i < s.length; i++) {
      if (duplicateCheckArr[duplicateCheckArr.length - 1] === s[i]) duplicateCheckArr.pop()
      else duplicateCheckArr.push(s[i])
  }
  return duplicateCheckArr.length ? 0 : 1
}

// 다른 사람의 풀이
function solution(s)
{
    var stringToArray = s.split('');
    var res = [];

    for (var val of stringToArray){
        if( val === res[res.length -1]){
            res.pop() 
        } else { res.push(val)}
    } 
    return res.length === 0 ? 1 : 0 ;
}