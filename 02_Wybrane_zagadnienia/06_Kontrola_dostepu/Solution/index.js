class BankAccount {
    #accountNumber;
    #balance;

    constructor(accountNumber, balance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    // set balance(newBalance) {
    //     if (newBalance >= 0) {
    //         this.#balance = newBalance;
    //     } else {
    //         console.log("Saldo nie może być ujemne.");
    //     }
    // }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("Kwota wpłaty musi być dodatnia.");
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Niewystarczające środki na koncie.");
        }
    }

    displayAccountInfo() {
        console.log(`Numer konta: ${this.#accountNumber}, Saldo: ${this.#balance}`);
    }
}

const myAccount = new BankAccount("123456789");
myAccount.deposit(100);
myAccount.withdraw(50);
myAccount.balance = -20; // powinno wyświetlić błąd
myAccount.displayAccountInfo();