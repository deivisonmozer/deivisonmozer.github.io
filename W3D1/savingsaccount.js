class SavingsAccount extends Account{
    constructor(interest, number){
        super(number);
        this._interest = interest;
        
    }
    interest(){
        return this._interest;
    }
    interest(interest){
        this._interest = interest;
    }   
    addInterest(interest){
        this._interest += getBalance()*(interest/100);
    }
    toString(){
        return "Savins Account " + this._number + ": balance " + this._balance + "Interest: " + this._interest;
    }
}

describe("Get interest", function(){
    let svAcc = new SavingsAccount(2.3, 1);
    let v = svAcc.interest();
    it("Get interest of the savings account",function(){
        assert.equal(v, 2.3);
    });
});


describe("Set interest", function(){
    let svAcc = new SavingsAccount(2.3, 2);
    svAcc.interest(4);
    it("Set interest to the savings account",function(){
        assert.equal(svAcc._interest, 4);
    });
});