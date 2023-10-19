// 코딩앙마 : 타입스크립트 강의
// https://www.youtube.com/watch?v=OIMPLNICzoc&list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0&index=3
// 기본타입
var age = 30;
var isAdult = true;
var a = [1, 2, 3];
var a2 = [1, 2, 3];
var week1 = ["nan"];
var week2 = ["true"];
// 튜플
var b;
b = ["z", 1];
b[0].toLowerCase();
// b[1].toLowerCase(); -> 오류가 생김
// void, never
function sayHello() {
    console.log("hello");
}
// never
// 1. 항상 오류를 출력
// 2. 리턴 값을 절대로 내보내지 않음
// 완전히 와닿진 않는다
function showError() {
    throw new Error();
}
// enum
// 특정값만 입력하도록 강제하고 싶을때 or 공통점이 있을 경우
// Window = 'win' 처럼 문자열도 가능
var Os;
(function (Os) {
    Os[Os["window"] = 3] = "window";
    Os[Os["Ios"] = 10] = "Ios";
    Os[Os["Android"] = 11] = "Android";
})(Os || (Os = {}));
var myOs;
myOs = Os.window;
// null, undefined
var a3 = null;
var a4 = undefined;
//# sourceMappingURL=index.js.map