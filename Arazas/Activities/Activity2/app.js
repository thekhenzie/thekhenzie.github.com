"use strict";
exports.__esModule = true;
var Classes_1 = require("./Classes");
var Enum_1 = require("./Enum");
function GetEmployees() {
    var employees = [
        { id: 1, firstName: 'Jeno', lastName: 'Labilles', gender: 'Male', birthDate: new Date(1, 27, 1994), status: Enum_1.MaritalStatus.Single, hoursOfWork: 40 },
        { id: 2, firstName: 'Dianne', lastName: 'Gimena', gender: 'Female', birthDate: new Date(11, 11, 1995), status: Enum_1.MaritalStatus.Married, hoursOfWork: 50 },
        { id: 3, firstName: 'Fritz Brian', lastName: 'Tuna', gender: 'Male', birthDate: new Date(3, 11, 1994), status: Enum_1.MaritalStatus.Single, hoursOfWork: 45 }
    ];
    return employees;
}
function GetFirstMarried(employees) {
    if (employees === void 0) { employees = GetEmployees(); }
    var totalEmployees = employees.length;
    var firstEmployee = '';
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        if (employee.status === Enum_1.MaritalStatus.Married) {
            firstEmployee = employee.firstName + " " + employee.lastName;
            break;
        }
    }
    console.log("Total employees: " + totalEmployees);
    console.log("First married employee: " + firstEmployee);
}
function GetEmployeesByMaritalStatus(status) {
    if (status === void 0) { status = Enum_1.MaritalStatus.Single; }
    console.log('Getting employees in marital status: ' + Enum_1.MaritalStatus[status]);
    var employees = GetEmployees();
    var filteredEmployees = [];
    var employeeName = '';
    for (var _i = 0, employees_2 = employees; _i < employees_2.length; _i++) {
        var employee = employees_2[_i];
        if (employee.status === status) {
            employeeName = employee.firstName + " " + employee.lastName;
            filteredEmployees.push(employeeName);
        }
    }
    return filteredEmployees;
}
console.log(GetEmployees());
console.log(GetFirstMarried());
console.log(GetEmployeesByMaritalStatus());
/** Using class */
var emp1 = new Classes_1.Programmer('John', 'Doe', new Date(1, 11, 2000), 'Male', 50);
// Initialized
emp1.PrintDetails();
emp1.ComputeSalary();
emp1.ShowJobDescription();
var employeeGeneric;
