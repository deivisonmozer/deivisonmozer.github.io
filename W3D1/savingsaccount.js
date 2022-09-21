class SavingsAccount extends Account{
    constructor(interest, number){
        super(number);
        this._interest = interest;
        
    }
    get interest(){
        return this._interest;
    }
    set interest(interest){
        this._interest = interest;
    }   
    addInterest(interest){
        this.interest += this.interest * (interest/100);
    }
    toString(){
        return "Savins Account " + this._number + ": balance " + this.getBalance() + " Interest: " + this._interest;
    }
}

describe("Get interest", function(){
    let svAcc = new SavingsAccount(2.3, 1);
    let v = svAcc.interest;
    it("Get interest of the savings account",function(){
        assert.equal(v, 2.3);
    });
});

describe("Set interest", function(){
    let svAcc = new SavingsAccount(2.3, 2);
    svAcc.interest = 4;
    it("Set interest to the savings account",function(){
        assert.equal(svAcc._interest, 4);
    });
});

describe("To String", function(){
    let svAcc = new SavingsAccount(4, 2);
    it("To string",function(){
        assert.equal(svAcc.toString(), "Savins Account 2: balance 0 Interest: 4");
    });
});

describe("Add interest", function(){
    let svAcc = new SavingsAccount(4, 2);
    svAcc.deposit(100);
    svAcc.addInterest(2);

    it("Add interest", function(){
        assert.equal(svAcc.interest, 4.08);
    });
});