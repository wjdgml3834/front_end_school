const num = prompt().split(/\s/g);

const divide = Math.floor(parseInt(num[0]) / parseInt(num[1]));

const remainder = Math.floor(parseInt(num[0]) % parseInt(num[1]));

console.log(divide, remainder);
