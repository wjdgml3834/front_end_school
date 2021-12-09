//문제가 너무 쉬워서 Set에 대해서 정리해보려고 한다.
/*
Set:중복되지 않는 데이터를 저장하는 데이터구조. 수학적 집합을 구현하기위한 자료구조임.
특장: 1. 중복 x
     2. 요소의 순서 x
     3. 인덱스로 접근 x

Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체 생성
*/

const list = [1, 2, 2, 3, 4, 5, 5, 5, 6];

let setVal = new Set(list);
console.log(setVal);
// {1,2,3,4,5,6}
setVal.add(10).add(8);
// {1,2,3,4,5,6,10,8} add()는 값을 반환하기 때문에, 메서드 체이닝 가능

setVal.delete(10);
// 성공여부를 Boolean으로 반환

console.log(setVal.has(10));
//  값이 있는지를 확인

console.log(setVal.size);
// 개수 출력

for (var variable of setVal) {
  console.log(variable);
}
// 1 2 3 4 5 ... 이런식으로 순회 가능
