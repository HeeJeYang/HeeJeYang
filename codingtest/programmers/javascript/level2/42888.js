// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42888

// 내 풀이
function solution(record) {
  const user = {};
  const result = [];
  for (let message of record) {
    const content = message.split(" ");
    if (content[0] === "Enter") {
      user[content[1]] = content[2]
      result.push([content[1], "님이 들어왔습니다."])
    } else if (content[0] ==="Leave") {
      result.push([content[1], "님이 나갔습니다."]);
    } else {
      user[content[1]] = content[2];
    }
  }  
  return result.map(v => user[v[0]] + v[1]);
}

// 시행착오
// function solution(record) {
//   const userIdArr = [];
//   const nicknameArr = [];
//   const result = [];
//   for (let message of record) {
//     const content = message.split(" ");
//     const index = userIdArr.indexOf(content[1]);
//     switch (content[0]) {
//       case "Enter":
//         if (index === -1) {
//           userIdArr.push(content[1]);
//           nicknameArr.push(content[2]);
//         } else {
//           nicknameArr[index] = content[2];
//         }
//         result.push([index === -1 ? userIdArr.length - 1 : index, "님이 들어왔습니다."])
//         break;
//       case "Leave":
//         result.push([index, "님이 나갔습니다."]);
//         break;
//       case "Change":
//         nicknameArr[index] = content[2];
//         break;
//     }  
//   }
//     return result.map(v => nicknameArr[v[0]] + v[1]);
// }

// 다른 사람의 풀이
function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
      'Enter': '님이 들어왔습니다.',
      'Leave': '님이 나갔습니다.'
  }

  record.forEach((v) => {
      const [state, id, nick] = v.split(' ');

      if(state !== "Change") {
          action.push([state, id]);
      }

      if(nick) {
          userInfo[id] = nick;
      }
  })

  return action.map(([state, uid]) => {
      return `${userInfo[uid]}${stateMapping[state]}`;    
  })
}

// 피드백
// for문 안에서 indexOf 함수를 사용하였더니 시간복잡도가 O(n^2)이 되어 테스트케이스 중 하나가 통과되지 못하는 상황이 발생하였다.
// 문제의 의도를 잘 파악하여 웬만하면 시간복잡도를 O(log n) 이하로 맞추는 연습을 해야겠다.