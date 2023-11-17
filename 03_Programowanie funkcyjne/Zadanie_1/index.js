const checkIsPrime = (isPrime) => {
    const tab = [];

    return {
        addPrime(num) {
                if (isPrime(num)) {
                    tab.push(num);
                }
                else {
                    console.log("To nie jest liczba pierwsza");
                }
        },
        returnTab() {
            return tab;
        }
    }
} 
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
  }

const primeAdding = checkIsPrime(isPrime);

primeAdding.addPrime(3);
primeAdding.addPrime(1);
primeAdding.addPrime(4);
console.log(primeAdding.returnTab());

