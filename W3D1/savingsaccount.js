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
        this._interest += getBalance()*(interest/100);
    }
    toString(){
        return "Savins Account " + this._number + ": balance " + this._balance + "Interest: " + this._interest;
    }
}

describe("interest", function(){
    let svAcc = new SavingsAccount(2.3);
    it("add interest to the savings account",function(){
        assert.equal(svAcc.interest(), svAcc._interest);
    });
});