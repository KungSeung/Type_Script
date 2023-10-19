var user = {
    name: "xx",
    age: 30,
    birthYear: 2000,
    1: "A",
    2: "B",
};
user.age = 10;
user.gender = "man";
var add = function (x, y) {
    return x + y;
};
add(10, 20);
var a5 = function (age) {
    return age > 19;
};
a5(33);
var benz = {
    color: "black",
    wheels: 4,
    start: function () {
        console.log("go...");
    },
    door: 5,
    stop: function () {
        console.log("stop..");
    },
};
var BMW = /** @class */ (function () {
    function BMW(c) {
        this.color = c;
    }
    BMW.prototype.start = function () {
        console.log("go...");
    };
    return BMW;
}());
var B = new BMW("green");
console.log(B);
B.start();
