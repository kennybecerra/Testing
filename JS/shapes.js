function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {

    this.color = color;
    this.draw2 = function() {
        console.log("draw");
    }
}

Shape.prototype.draw = function() {
    console.log("draw shape")
};

function Circle(radius, color = "orange") {
    //Shape.call(this, color);
    this.radius = radius;
}

Circle.prototype.Myfunct = function() {
    console.log("my function");
};
Circle.prototype = Shape.call({}, "red");
//Circle.prototype.constructor = Circle;
//extend(Circle, Shape);


function Square(x, y, color = "green") {
    Shape.call(this, color);
    this.x = x;
    this.y = y;
}
extend(Square, Shape);

function Triangle(base, height, color = "pink") {
    Shape.call(this, color);
    this.base = base;
    this.height = height;
}
extend(Triangle, Shape);

let p = new Shape("red");
let c = new Circle(5, "blue");
let s = new Square(3,3);
let t = new Triangle(3,6);
