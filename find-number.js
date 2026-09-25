// find the largest number in an array and its index
let numbers = [30,48,13,47];
let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === largest) {
        console.log(`The largest number is ${largest} and its index is ${i}`);
    }
    if(numbers[i] === smallest) {
        console.log(`The smallest number is ${smallest} and its index is ${i}`);
    }
}
