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