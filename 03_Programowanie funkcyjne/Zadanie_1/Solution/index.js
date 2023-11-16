const primeOnly = function(isPrime) {
    const tab = [];

    return {
        addPrimeNumber: function(number) {
            if (isPrime(number)) {
                tab.push(number);
            }
        },
        getPrimeNumberTab: function () {
            return tab;
        }
    }
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
}
const primeObj = new primeOnly(isPrime);
primeObj.addPrimeNumber(1);
primeObj.addPrimeNumber(3);
primeObj.addPrimeNumber(3);
primeObj.addPrimeNumber(5);
console.log(primeObj.getPrimeNumberTab());
