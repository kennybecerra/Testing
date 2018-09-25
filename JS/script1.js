
var name = "john";

function first() {
    console.log("starting first");
    var a = "Hello";
    second();
    var x = a + name;

    function MyTest() {
        var ja = "lol";
    }
}

function second() {
    var b = "Hi!";
    third();
    var z = b + name;
}

function third() {
    console.log(a);
    var c = "Hey!";
    var z = c + name;
}

console.log("starting now");
first();
console.log("Ending Now");
/*
console.log("Hello")

var name = "John";
var age = 26;

console.log(name + age);
*/