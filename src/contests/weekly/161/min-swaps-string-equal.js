

let str1 = "xyy";
let str2 = "xxx";
let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;
for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) continue;
    if (str1[i] === 'x') x1++;
    if (str1[i] === 'y') y1++;
}

for (let i = 0; i < str2.length; i++) {
    if (str2[i] === 'x') x2++;
    if (str2[i] === 'y') y2++;
}

console.log('x1', x1);
console.log('x2', x2);

console.log('y1', y1);
console.log('y2', y2);

// int swaps = x1 / 2 + y1 / 2 + (x1 % 2) * 2;

console.log('minimum number of swaps required ', parseInt(x1/2) + parseInt(y1/2) + (x1 % 2) * 2)