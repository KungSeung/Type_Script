// 함수
function add2(num1, num2) {
    console.log(num1 + num2);
}
// ? -> 옵셔널 파라미터 : 있어도 되고 없어도 됨
// 옵셔널한 값은 앞에 올 수 없다 -> 쓰고 싶으면 undefined 써야함
function hello2(name) {
    return "Hello, ".concat(name || "world");
}
var result = hello2();
function hello(age, name) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You are ").concat(age, ".");
    }
    else {
        return "Hello, ".concat(name, ".");
    }
}
console.log(hello(30, "Sam"));
console.log(hello(undefined, "Sam"));
// ... 파라미터 -> 배열로 만듬
function sumAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (result, num) { return result + num; }, 0);
}
sumAll(1, 2, 3);
var Sam2 = { name: "Sam" };
// this.name 쓰려면 this:User를 맨 앞에 선언해줘야함
function showName(age, gender) {
    console.log(this.name, age, gender);
}
var a10 = showName.bind(Sam2);
a10(30, "m");
function join(name, age) {
    if (typeof age === "number") {
        return {
            name: name,
            age: age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요";
    }
}
var sam5 = join("Sam", 30);
var jane = join("Jane", "30");
