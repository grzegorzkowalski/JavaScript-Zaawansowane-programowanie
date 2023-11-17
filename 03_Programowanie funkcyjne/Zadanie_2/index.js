const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const getEvenNumbers = (numTab) => numTab.filter(el => el % 2 === 0); 
const getEvenSum = (evenTab) => evenTab.reduce((a,b) => a+b)/evenTab.length; 
const getScore = (sum) => {
    let multipyScore = Math.floor(Math.random() * (10 - 1) + 1) * sum;
    if (multipyScore > 60) {
        console.log(`${multipyScore} - to całkiem duża liczba.`);
    }
    else {
        console.log(`${multipyScore} - to mała liczba.`);
    }
}

getScore(getEvenSum(getEvenNumbers(numbers)));




