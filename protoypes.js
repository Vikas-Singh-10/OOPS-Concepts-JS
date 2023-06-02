function Employees(Name,Credit=0){
    this.Name = Name;
    this.EmployeeID = Date.now();
    this.Credit = Credit;
}

Employees.prototype.increase = function
(credits){
    this.Credit += credits;
}

Employees.prototype.decrease = function(credits){
    this.Credit -= credits;
}

const employees = [];

const createForm = document.querySelector("#createEmployee");
const employeeName = document.querySelector("#employeeName");
const employeeCredit = document.querySelector("#employeeCredit");

createForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user = new Employees(employeeName.value,+employeeCredit.value);
    employees.push(user);
    console.log(employees)
});

const increaseForm = document.querySelector("#increaseCredit");
const employeeID = document.querySelector("#employeeID");
const credits = document.querySelector("#credits");

increaseForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const data = employees.find((employee) => {
        return employee.EmployeeID === +employeeID.value;
    })
    if(data){
        data.increase(+credits.value);
        console.log(employees);
    }
    else{
        console.log("Employee doesn't");
    };
});

const deleteForm = document.querySelector("#deleteForm");
const employeeNameOrID = document.querySelector("#employeeNameOrID");

deleteForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const data = employees.find((employee) => {
        return employee.EmployeeID === +employeeNameOrID.value || employee.Name === employeeNameOrID.value;
    })
    if(data){
        employees.pop(data);
        console.log(employees);
    }
})




