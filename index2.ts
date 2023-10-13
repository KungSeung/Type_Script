// 인터페이스
// 프로퍼티를 정해서 객체로 표현하고자 할 때 인터페이스를 사용한다
type Score = "A" | "B" | "C";

interface User {
  name: string;
  age: number;
  gender?: string; // ? -> 있어도 되고 없어도 됨. 단, 있으면 string이어야 함
  readonly birthYear: number; // 얘는 수정이 안됨, 최초 설정할 때만 변수에 입력 가능
  [grade: number]: Score; // [] : 여러개 입력 가능, key:grade, value:Score(Score 값 외엔 입력 못함)
}

let user: User = {
  name: "xx",
  age: 30,
  birthYear: 2000,
  1: "A",
  2: "B",
};

user.age = 10;
user.gender = "man";

// interface 타입 함수
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20);

interface isAdult {
  (age: number): boolean;
}

const a5: isAdult = (age) => {
  return age > 19;
};

a5(33);
