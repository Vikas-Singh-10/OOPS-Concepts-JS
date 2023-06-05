class Employee{
    constructor(employeeName, credits = 0){
        this.employeeName = employeeName;
        this.employeeID = Date.now();
        this.credits = credits;
    }

    increaseCredit (credit) {
        this.credits += credit;
    }

    decreaseCredit (credit) {
        this.credits -= credit;
    }
    
}


const employees = [];

const createEmployee = document.querySelector("#createEmployee");
const employeeName = document.querySelector("#employeeName");
const employeeCredit = document.querySelector("#employeeCredit");

createEmployee.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new Employee(employeeName.value, +employeeCredit.value);
    employees.push(data);
    console.log(employees);
});

const increaseCredit = document.querySelector("#increaseCredit");
const employeeID = document.querySelector("#employeeID");
const credits = document.querySelector("#credits");

increaseCredit.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = employees.find((employee) => {
        return employee.employeeID === +employeeID.value;
    })
    if(data){
        data.increaseCredit(+credits.value);
        console.log(employees);
    }
    else{
        console.log("User doesn't exist");
    }
})


const deleteForm = document.querySelector("#deleteForm");
const employeeNameOrID = document.querySelector("#employeeNameOrID");

deleteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = employees.find((employee) => {
        return employee.employeeID === +employeeNameOrID.value || employee.employeeName === employeeNameOrID.value;
    })
    if(data){
        employees.pop(data);
        console.log(employees);
    }
    else{
        console.log("User doesn't Exist");
    }
})
