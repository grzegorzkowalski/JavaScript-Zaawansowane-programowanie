const generateRandom = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
} 

let counter  = 0;
const limit = 10;
const numbers = [];
function rekurencja() {
if (counter < limit) {
    numbers.push(generateRandom(0,20));
    counter++;
}
else {
    return numbers;
}
rekurencja();
}

rekurencja();
console.log(numbers);

