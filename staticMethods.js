class Employee{
    static id = 1;
    constructor(name,credits,income){
        this.name = name;
        this.credits = credits;
        this.income = income;
        this.id = Employee.id++;
    }
    static compareByCredit(employee1, employee2){
        return employee1.credits- employee2.credits;
    }
    static compareByIncome(employee1,employee2){
        return employee1.income - employee2.income;
    }
}

const employees = [];

const employee1 = new Employee("Vikas Singh",3,70000);
const employee2 = new Employee("Boi",4,40000);
const employee3 = new Employee("Gul",6,90000);

employees.push(employee1,employee2,employee3);

employees.sort(Employee.compareByCredit);
console.log(employees)
employees.sort(Employee.compareByIncome);
console.log(employees);