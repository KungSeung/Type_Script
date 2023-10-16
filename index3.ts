// 함수

function add2(num1: number, num2: number): void {
  console.log(num1 + num2);
}

// ? -> 옵셔널 파라미터 : 있어도 되고 없어도 됨
// 옵셔널한 값은 앞에 올 수 없다 -> 쓰고 싶으면 undefined 써야함
function hello2(name?: string) {
  return `Hello, ${name || "world"}`;
}

const result = hello2();

function hello(age: number | undefined, name: string): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}.`;
  }
}

console.log(hello(30, "Sam"));
console.log(hello(undefined, "Sam"));

// ... 파라미터 -> 배열로 만듬
function sumAll(...nums: number[]): number {
  return nums.reduce((result, num) => result + num, 0);
}

sumAll(1, 2, 3);

// this
interface User2 {
  name: string;
}

const Sam2: User2 = { name: "Sam" };

// this.name 쓰려면 this:User를 맨 앞에 선언해줘야함
function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a10 = showName.bind(Sam2);
a10(30, "m");
