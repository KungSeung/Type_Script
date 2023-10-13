// 코딩앙마 : 타입스크립트 강의
// https://www.youtube.com/watch?v=OIMPLNICzoc&list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0&index=3

// 기본타입
let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ["nan"];
let week2: Array<string> = ["true"];

// 튜플
let b: [string, number];
b = ["z", 1];

b[0].toLowerCase();
// b[1].toLowerCase(); -> 오류가 생김

// void, never
function sayHello(): void {
  console.log("hello");
}

// never
// 1. 항상 오류를 출력
// 2. 리턴 값을 절대로 내보내지 않음
// 완전히 와닿진 않는다
function showError(): never {
  throw new Error();
}

// enum
// 특정값만 입력하도록 강제하고 싶을때 or 공통점이 있을 경우
// Window = 'win' 처럼 문자열도 가능
enum Os {
  window = 3,
  Ios = 10,
  Android,
}

let myOs: Os;
myOs = Os.window;

// null, undefined
let a3: null = null;
let a4: undefined = undefined;
