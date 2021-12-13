const n = prompt("반지름의 길이를 입력해주세요");
calc(n);

function calc(n) {
  const radius = parseInt(Math.floor(n));
  console.log(radius * radius * 3.14);
}
