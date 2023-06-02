function BankAccount(AccountHolderName,Balance=0){   
    this.AccountHolderName = AccountHolderName;
    this.AccountNumber = Date.now();
    this.Balance = Balance;
    this.deposit = function (depositAmount) {
        this.Balance += depositAmount;
    }
    this.withdrawal = function(withdrawalAmount) {
        this.Balance -= withdrawalAmount;
    }
};


const Username = document.querySelector("#name");
const Balance = document.querySelector("#balance");
const form = document.querySelector("#createAccount");
const accounts = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(Username.value,+Balance.value);
    accounts.push(account);
    console.log(accounts);
});


const depositForm = document.querySelector("#deposit");
const accountNumber= document.querySelector("#accountNumber"); 
const depositAmount = document.querySelector("#depositAmount")

depositForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const data = accounts.find((acc) => {
       return acc.AccountNumber === +accountNumber.value;
    })
    if(data){
        data.deposit(+depositAmount.value);
        console.log(accounts);
    }
    else{
        console.log("User Doesn't Exist");
    }
    

});

const withdrawalForm = document.querySelector("#withdrawal");
const account = document.querySelector("#Account");
const amount = document.querySelector("#withdrawalAmount");


withdrawalForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const data = accounts.find((acc) => {
        return acc.AccountNumber === +account.value;
    })
    if(data){
        if(data.Balance >= amount.value){
            data.withdrawal(+amount.value);
            console.log(accounts);
        }
        else{
            console.log("Insufficient Balance");
        }   
    }
    else{
        console.log("user doesn't exist");
    }
})

