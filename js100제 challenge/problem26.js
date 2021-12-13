// 1. 배열로 풀기
const planetKr = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];
const planetEn = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const userInp = prompt();

let idx = planetKr.indexOf(userInp);
console.log(planetEn[idx]);

// 2. 객체로 풀기

const planets = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};
const inp = prompt();
console.log(planets[inp]);
