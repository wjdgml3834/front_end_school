// 과거 나의 풀이 : 반복문을 쓰지 않아, 비효율적
// let inpName = prompt().split(" ");
// let inpScore = prompt().split(" ");

// let firstPerson = inpName[0];
// const object = {};

// object[inpName[0]] = parseInt(inpScore[0]);
// object[inpName[1]] = parseInt(inpScore[1]);
// console.log(object);

const keys = prompt().split(" ");
const values = prompt().split(" ");
let obj = {};
for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = parseInt(values[i]);
}
console.log(obj);
