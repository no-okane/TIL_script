// 2025-05-16 연산자
// 증감 연산자 (단항)============================
let a = 1;
let b = 10;
//console.log(a,b);
b = a ++;
//console.log(a,b);
a = -- b;
//console.log(a,b);


let x = 5;
//let y = ++x ; // 1 증가된 x값 대입받는 y 변수
// 증감 연산은 x 변수 자체에 영향 줌
// 일회성 더하기로 연산자 +1을 붙여 계산하고 x에 영향 주지 않게 y에 대입
let y = x+1 ;
console.log(x,y); // 5 6
y = x++;
console.log(x,y); // 6 5
x = ++y ;
console.log(x,y); // 6 6
x++;
console.log(x,y); // 7 6
--y; // 증감 연산자는 대입이 없어도 변수에 영향 줌
console.log(x,y); // 7 5
x+1; // 더하기, 빼기, 곱하기, 나누기 등 일반 산술 연산자는 대입 연산자가 없으면 변수에 영향을 주지 않음
console.log(x,y); // 7 5
let num1 = 10; // 10
let num2 = 20; // 20
let num3 = 30; // 30
let num4 = 40; // 40
num1++; // 11
num2--; // 19
num3++; // 31
num4--; // 39
console.log(num1,num2,num3,num4);

num1 = ++ num2; //20 1+19=20
num2 = num1 ++; //20 20+1=21
console.log(num1,num2); // 21 20

num3=num1+num2; //41 21+20=41
num4=++num3; // 42 1+41=42
console.log(num3,num4); // 42 42

num1 = ++num3+10; //53 1+42+10=53
num2 = --num4+1; // 42 -1+42+1=42
console.log(num1,num2); // 53 42
console.log(num1,num2,num3,num4); // 53 42 43 41

let number = 10;
//number = 15; //기존값 제거 단순 새로운 값 삽입
//number = 5;
// number = number +5; // 기존값 유지하고 원하는 게산 삽입
number += 5; // 복합대입 활용
console.log(number); // 15
number -=5; //빼기 복합 number = number-5;
console.log(number) //10
number *=5; //곱하기 복합 number = number*5;
console.log(number); //50
number /=5; // 나누기 복합 number = number/5;
console.log(number); // 10
number %5; //나머지 복합 number = number %5;
console.log(number); //0