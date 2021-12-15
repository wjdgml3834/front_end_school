const arr = prompt().split("");

for (let i = 1; i < arr.length; i++) {
  console.log(arr[i - 1] + arr[i]);
}
