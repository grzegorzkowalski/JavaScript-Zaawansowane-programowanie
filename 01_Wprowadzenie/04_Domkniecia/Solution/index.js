function createCounter() {
    let count = 0;
    let operations = 0;

    return {
        add: function(number) {
            count += number;
            operations++;
        },
        subtract: function(number) {
            count -= number;
            operations++;
        },
        getOperationsCount: function() {
            return operations;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.add(5);
counter.add(3);
counter.subtract(2);

console.log(counter.getCount()); // Powinno wyświetlić 6
console.log(counter.getOperationsCount()); // Powinno wyświetlić 3