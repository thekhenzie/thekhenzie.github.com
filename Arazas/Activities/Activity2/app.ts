import { Employee, Programmer, Tester, ScrumMaster } from './Classes';
import { IEmployee } from './Interfaces';
import { MaritalStatus } from './Enum';
import { Generic } from './Generic';
 
function GetEmployees(): IEmployee[] {
    let employees = [
        { id: 1, firstName: 'Jeno', lastName: 'Labilles', gender: 'Male', birthDate: new Date(1,27,1994), status: MaritalStatus.Single, hoursOfWork: 40 },
        { id: 2, firstName: 'Dianne', lastName: 'Gimena', gender: 'Female', birthDate: new Date(11,11,1995), status: MaritalStatus.Married, hoursOfWork: 50 },
        { id: 3, firstName: 'Fritz Brian', lastName: 'Tuna', gender: 'Male', birthDate: new Date(3,11,1994), status: MaritalStatus.Single, hoursOfWork: 45 }
    ];

    return employees;
}

function GetFirstMarried(employees = GetEmployees()): void {
    let totalEmployees: number = employees.length;
    let firstEmployee: string = '';
    
    for(let employee of employees) {
        if(employee.status === MaritalStatus.Married) {
            firstEmployee = `${employee.firstName} ${employee.lastName}`;
            break;
        }
    }

    console.log(`Total employees: ${totalEmployees}`);
    console.log(`First married employee: ${firstEmployee}`);
}

function GetEmployeesByMaritalStatus(status: MaritalStatus = MaritalStatus.Single): Array<string> {
    console.log('Getting employees in marital status: ' + MaritalStatus[status]);
    
    let employees = GetEmployees();
    let filteredEmployees: Array<string> = [];
    let employeeName: string = '';

    for(let employee of employees) {
        if(employee.status === status) {
            employeeName = `${employee.firstName} ${employee.lastName}`;
            filteredEmployees.push(employeeName);
        }
    }

    return filteredEmployees;
}

console.log(GetEmployees());

console.log(GetFirstMarried());

console.log(GetEmployeesByMaritalStatus());

/** Using class */
let emp1 = new Programmer('John', 'Doe', new Date(1, 11, 2000), 'Male', 50);

// Initialized
emp1.PrintDetails();
emp1.ComputeSalary();
emp1.ShowJobDescription();
 