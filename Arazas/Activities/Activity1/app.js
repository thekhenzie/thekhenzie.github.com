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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this) || this;
        _this.name = "Square";
        _this.side = 0;
        _this.noOfSides = 4;
        _this.side = side;
        console.log("The number of sides is " + _this.noOfSides + ".");
        return _this;
    }
    Square.prototype.getName = function () {
        console.log("This name is " + this.name + ".");
    };
    Square.prototype.getPerimeter = function () {
        return this.side * 4;
    };
    Square.prototype.getArea = function () {
        return this.side * 2;
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width) {
        var _this = _super.call(this) || this;
        _this.name = "Rectangle";
        _this.length = 0;
        _this.width = 0;
        _this.noOfSides = 4;
        _this.length = length;
        _this.width = width;
        console.log("The number of sides is " + _this.noOfSides + ".");
        return _this;
    }
    Rectangle.prototype.getName = function () {
        console.log("This name is " + this.name + ".");
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this.length * this.width) * 2;
    };
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    return Rectangle;
}(Shape));
var square = new Square(8);
square.getName();
console.log("The area of square is: " + square.getArea());
console.log("The perimeter of square is: " + square.getPerimeter());
console.log("\n");
var rectangle = new Rectangle(10, 20);
rectangle.getName();
console.log("The area of rectangle is: " + rectangle.getArea());
console.log("The perimeter of rectangle is: " + rectangle.getPerimeter());
