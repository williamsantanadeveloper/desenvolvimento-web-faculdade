let array = [];
let sum = 0;
for (let i = 0; i <= 10; i++) {
    for (number in array) {
        array.push(i)
    }
    sum += i
};

console.log(sum)