"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, birthDate, gender, hoursOfWork) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.hoursOfWork = hoursOfWork;
    }
    return Employee;
}());
exports.Employee = Employee;
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName, birthDate, gender, hoursOfWork) {
        var _this = _super.call(this, firstName, lastName, birthDate, gender, hoursOfWork) || this;
        _this.rate = 10;
        return _this;
    }
    Programmer.prototype.PrintDetails = function () {
        console.log("\n        First Name: " + this.firstName + "\n        Last Name: " + this.lastName + "\n        Birth Date: " + this.birthDate + "\n        Gender: " + this.gender + "\n        Hours of Work: " + this.hoursOfWork + "\n        ");
    };
    Programmer.prototype.ComputeSalary = function () {
        return this.hoursOfWork * this.rate;
    };
    Programmer.prototype.ShowJobDescription = function () {
        console.log('Programmer: Code, debug, test and develop an application.');
    };
    return Programmer;
}(Employee));
exports.Programmer = Programmer;
var Tester = /** @class */ (function (_super) {
    __extends(Tester, _super);
    function Tester(firstName, lastName, birthDate, gender, hoursOfWork) {
        var _this = _super.call(this, firstName, lastName, birthDate, gender, hoursOfWork) || this;
        _this.rate = 12;
        return _this;
    }
    Tester.prototype.PrintDetails = function () {
        console.log("\n        First Name: " + this.firstName + "\n        Last Name: " + this.lastName + "\n        Birth Date: " + this.birthDate + "\n        Gender: " + this.gender + "\n        Hours of Work: " + this.hoursOfWork + "\n        ");
    };
    Tester.prototype.ComputeSalary = function () {
        return this.hoursOfWork * this.rate;
    };
    Tester.prototype.ShowJobDescription = function () {
        console.log('Tester: Test, debug and ensure quality of application that developed by the programmers.');
    };
    return Tester;
}(Employee));
exports.Tester = Tester;
var ScrumMaster = /** @class */ (function (_super) {
    __extends(ScrumMaster, _super);
    function ScrumMaster(firstName, lastName, birthDate, gender, hoursOfWork) {
        var _this = _super.call(this, firstName, lastName, birthDate, gender, hoursOfWork) || this;
        _this.rate = 10;
        return _this;
    }
    ScrumMaster.prototype.PrintDetails = function () {
        console.log("\n        First Name: " + this.firstName + "\n        Last Name: " + this.lastName + "\n        Birth Date: " + this.birthDate + "\n        Gender: " + this.gender + "\n        Hours of Work: " + this.hoursOfWork + "\n        ");
    };
    ScrumMaster.prototype.ComputeSalary = function () {
        return this.hoursOfWork * this.rate;
    };
    ScrumMaster.prototype.ShowJobDescription = function () {
        console.log('Scrum Master: Implement the scrum and lead the team of programmer and tester that build an application.');
    };
    return ScrumMaster;
}(Employee));
exports.ScrumMaster = ScrumMaster;
