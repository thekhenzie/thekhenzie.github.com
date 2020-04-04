interface IShape {
    name: string;
    noOfSides: number;

    getName(): void;
    getPerimeter(): number;
    getArea(): number;
}

abstract class Shape implements IShape{
    color: string;
    name: string;
    noOfSides: number;

    abstract getName(): void
    abstract getPerimeter(): number;
    abstract getArea(): number;
}

class Square extends Shape {
    name: string = `Square`;
    private side: number = 0;
    noOfSides: number = 4;

    constructor(side: number) {
        super();
        this.side = side;
        console.log(`The number of sides is ${this.noOfSides}.`);
    }
    getName(): void {
        console.log(`This name is ${this.name}.`);
    }

    getPerimeter(): number {
        return this.side * 4;
    }

    getArea(): number {
        return this.side * 2;
    }
}

class Rectangle extends Shape {
    name: string = `Rectangle`;
    private length: number = 0;
    private width: number = 0;
    noOfSides: number = 4;

    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
        console.log(`The number of sides is ${this.noOfSides}.`);
    }
    getName(): void {
        console.log(`This name is ${this.name}.`);
    }

    getPerimeter(): number {
        return (this.length * this.width) * 2;
    }

    getArea(): number {
        return this.length * this.width;
    }
}

let square = new Square(8);
square.getName();
console.log(`The area of square is: ${square.getArea()}`);
console.log(`The perimeter of square is: ${square.getPerimeter()}`);

console.log(`\n`);

let rectangle = new Rectangle(10, 20);
rectangle.getName();
console.log(`The area of rectangle is: ${rectangle.getArea()}`);
console.log(`The perimeter of rectangle is: ${rectangle.getPerimeter()}`);