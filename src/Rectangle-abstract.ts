abstract class Shape {
  width: number;
  height: number;

  constructor(width: number, height: number){
    this.width = width;
    this.height = height;
  }
  abstract getArea(): number;
}

class RectangleDos extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {


  constructor(width: number, height: number) {
    super(width,height);
  }

  getArea() {
    return this.width * this.height;
  }
}

const rectangle = new RectangleDos(10, 20);
console.log(rectangle.getArea());
