"use strict";
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class RectangleDos extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new RectangleDos(10, 20);
console.log(rectangle.getArea());
