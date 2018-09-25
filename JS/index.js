/* 4 pillars of Object Oriented Programming  */

var pillars = {
    Encapsulation: "Putting everything one place, mainly utilizing properties and methods that define the object",
    Abstraction: " Hiding all complexity within the object properties and methods, object is easier to handle and interface with",
    Inheritance: "Provides a way to follow DRY, allows for less repeating of code",
    Polymorphism: "object with the same properties and methods that do different things based on the object"
};

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

//circle.draw();

/* Two ways to make objects*/

//Factory Function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw from factory');
        }
    };
}

const circle1 = createCircle(10);

//constructor Function 
function Circle(radius, diameter, pie = 3.14) {
    this.radius = radius;
    this.diamter = diameter;
    this.pie = pie;
    this.draw = function() {
        console.log("draw from constructor");
    }
}


const circle2 = new Circle(20, 20);

for (let key in circle2) {
    console.log(key + " : " + circle2[key]);
}
