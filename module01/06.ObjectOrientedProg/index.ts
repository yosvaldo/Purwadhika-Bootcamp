//Class declaration
class User {
    private name: string = "";

    constructor(name) {
        this.name = name;
    }

    public greeting() {
        console.log(`Hello ${this.name}`);
    }
}

const user = new User("John");
user.greeting();

//Encapsulation
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());