var employees = [];

function Employee(name, title, salary, status = "full time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status; //  || "fill time"
    
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + ", Job Title: " + this.title + ", Salary: " + salary + ", Status: " + status);
    }
}

function addToEmployees(employee) {
    employees.push(employee);
}

var jack = new Employee("jack", "worker", "1 meelion dollars");

var jill = new Employee("jill", "worker", "1 meelion dollars");

var jannie = new Employee("jannie", "worker", "1 meelion dollars", "contract");

jack.printEmployeeForm();
jill.printEmployeeForm();
jannie.printEmployeeForm();
addToEmployees(jack);
addToEmployees(jill);
addToEmployees(jannie);
console.log(employees);