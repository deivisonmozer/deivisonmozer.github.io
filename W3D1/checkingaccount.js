class CheckingAccount extends Account
{
    constructor(overDraftLimit, number){
        super(number);
        this._overDraftLimit = overDraftLimit;
    }
    get overDraftLimit(){
        return this._overDraftLimit;
    }
    set overDraftLimit(overDraftLimit){
        this._overDraftLimit = overDraftLimit;
    }
    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this.getBalance() + this.overDraftLimit) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString(){
        return "Account " + this._number + ": balance " + this._balance + " overDraftLimit: " + this.overDraftLimit;
    }
}

describe("get overDraftLimit", function(){
    let ckAccount = new CheckingAccount(200, 1);
    ckAccount.deposit(100);

    it("get overDraftLimit", function(){
        assert.equal(ckAccount.overDraftLimit, 200);
    });
});

describe("withdraw", function(){
    let ckAccount = new CheckingAccount(200, 1);
    ckAccount.deposit(100);
    ckAccount.withdraw(200);
    let bal = ckAccount.getBalance();

    it("Balance 100 withdraw 200", function(){
        assert.equal(bal, -100);
    });
});

describe("withdraw2", function(){
    let ckAccount = new CheckingAccount(200, 1);
    ckAccount.deposit(100);
    ckAccount.withdraw(300);

    it("Balance 100 withdraw 300", function(){
        assert.equal(ckAccount.getBalance(), -200);
    });
});

describe("toString", function(){
    let acc = new CheckingAccount(500, 2);
    acc.deposit(100);

    it("Print values", function(){
        assert.equal(acc.toString(), "Account 2: balance 100 overDraftLimit: 500");
    });
});