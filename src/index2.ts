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

// interface로 클래스를 정의 가능 : implements(상속) 사용, extends(확장) 사용
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  color: "black",
  wheels: 4,
  start(): void {
    console.log("go...");
  },
  door: 5,
  stop() {
    console.log("stop..");
  },
};

class BMW implements Car {
  color;
  wheels: 4;
  constructor(c: string) {
    this.color = c;
  }
  start(): void {
    console.log("go...");
  }
}

const B = new BMW("green");
console.log(B);
B.start();

// 동시에 확장도 가능

interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar2 extends Car2, Toy {
  price: number;
}
