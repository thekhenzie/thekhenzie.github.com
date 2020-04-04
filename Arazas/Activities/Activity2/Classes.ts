abstract class Employee {
    protected firstName: string;
    protected lastName: string;
    protected gender: string;
    protected birthDate: Date;
    protected hoursOfWork: number;

    constructor(firstName: string, lastName: string, birthDate: Date, gender: string, hoursOfWork: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.hoursOfWork = hoursOfWork;
    }
    abstract PrintDetails(): void;

    abstract ComputeSalary(): number;
}

class Programmer extends Employee {
    private rate: number = 10;

    constructor(firstName: string, lastName: string, birthDate: Date, gender: string, hoursOfWork: number) {
        super(firstName, lastName, birthDate, gender,hoursOfWork);
    }

    PrintDetails(): void {
        console.log(`
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Birth Date: ${this.birthDate}
        Gender: ${this.gender}
        Hours of Work: ${this.hoursOfWork}
        `);
    }

    ComputeSalary(): number {
        return this.hoursOfWork * this.rate;
    }

    ShowJobDescription(): void {
        console.log('Programmer: Code, debug, test and develop an application.');
    }
}

class Tester extends Employee {
    private rate: number = 12;

    constructor(firstName: string, lastName: string, birthDate: Date, gender: string, hoursOfWork: number) {
        super(firstName, lastName, birthDate, gender,hoursOfWork);
    }

    PrintDetails(): void {
        console.log(`
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Birth Date: ${this.birthDate}
        Gender: ${this.gender}
        Hours of Work: ${this.hoursOfWork}
        `);
    }

    ComputeSalary(): number {
        return this.hoursOfWork * this.rate;
    }

    ShowJobDescription(): void {
        console.log('Tester: Test, debug and ensure quality of application that developed by the programmers.');
    }
}

class ScrumMaster extends Employee {
    private rate: number = 10;

    constructor(firstName: string, lastName: string, birthDate: Date, gender: string, hoursOfWork: number) {
        super(firstName, lastName, birthDate, gender,hoursOfWork);
    }

    PrintDetails(): void {
        console.log(`
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Birth Date: ${this.birthDate}
        Gender: ${this.gender}
        Hours of Work: ${this.hoursOfWork}
        `);
    }

    ComputeSalary(): number {
        return this.hoursOfWork * this.rate;
    }

    ShowJobDescription(): void {
        console.log('Scrum Master: Implement the scrum and lead the team of programmer and tester that build an application.');
    }
}

export { Employee, Programmer, Tester, ScrumMaster };