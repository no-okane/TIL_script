//20225-05-12 js (1)====================================================
// 변수
// var 변수명 = 대입값;
// var : 변수 선언 키워드
// = 대입연산자 (좌 <- 우 값 대입)
var num; // num 변수 생성
num = 1; // 1을 num에 대입 (변수에 값 대입)
var num2 = 2; // 생성과 대입
// 콘솔 실행 함수
/* console.log(num2); */
// 객체.함수(실행하는 값); -> 콘솔창(객체)에 num2 변수값(실행값)을 로그(실행 함수)로 출력
/* console.log(num); */



//20225-05-13 js(2)====================================================
var bowl;
bowl = '쌀';
/* console.log(bowl); */ //쌀
bowl = '콩';
/* console.log(bowl); */ //콩
// 자바 스크립트는 절차적 언어 -> css처럼 우선순위에 따라 최종 결과값만 인식하지 않고 실행 함수의 작성 위치에 따라 다른 변수값 인식
var a = 1;
var b = 5;
var c = 10;
/* 문자 b가 아닌 변수 a에 대입 */
/* 변수 대입=변수값 대입 */
c = a ;
console.log(a); // -> b의 값 받기 전 기존 a값 출력
a = b; 
console.log(b);
b = c;
console.log(c);
/* 자료형 구분 내장함수 typeof */
/* console.log(typeof a); */
console.log(`==========데이터공부`);
var d;
console.log(typeof d) // 값이 할당되지 않은 상태 undefined (오류 점검용)
d = a;
console.log('d의 값은',d); //`d의 값은`(문자)이 사이는 ,(변수를 숫자로 인식) 또는 +(변수를 문자로 인식)로 구분 d(변수)
console.log('a의 값은'+a);
console.log('b의 값은'+b);
console.log('c의 값은'+c);
console.log('-----------------');
console.log(1+1); /* 숫자+숫자=더하기 2*/
console.log(`1`+1); /* 문자+문자=연결 11 */
console.log('-----------------');
var box1 = 10;
var box2 = 'hello';
var box3 = 'javascript';
var box4; 
console.log('box1='+box1+', box1은 '+typeof box1+'타입이다'); //box1=10, box1은 Number타입이다.
console.log('box1='+box1+', box1은 '+typeof box1+'타입이다');
console.log(box2+' '+box3+'는'+' '+typeof (box2+box3)+'입니다!');//hello javascript는 string입니다!
console.log(box4);/* undefined 정의 안 된 상태(오류) */
box4 = box2+box3;
console.log(box4);/* hellojavascript */
/* box4 = null; */ /* 값 제거 */
/* box4 = 0; */ /* 숫자 초기화(데이터 타입 유지) */
/* box4 = '' */ /* 문자 초기화(데이터 아입 유지) */
console.log(box4);
console.log(box2.length); /* hello의 문자 개수는? */
/* 객체.속성; */
/* 객체.함수() */
console.log('-----------------');
var num1 = 10;
var num2 = 20;
var num3 = 0;
var total; //결과 변수 (위 데이터 변수들이 최종 대입될 대상)
console.log(num1,num2,num3);//10 20 0
console.log(num1+num2+num3);//30
total = num1 + num2;
console.log(total); //30
console.log("she's gone");//she's gone
console.log('-----------------');
console.log('1+1은 '+(1+1)+'입니다.')//1+1은 2입니다.
/* 일반 문자와 프로그래밍식을 쉽게 작성할 수 있게 하는 템플릿 문자열 활용 */
console.log(`1+1은 ${1+1}입니다`);
var num4 = 1;
var num5 = 2;
console.log(`변수 num4의 값은 ${num4}입니다.`);
console.log(`num4와 nume5의 더한 결과값은 ${num4+num5}입니다.`);
console.log('-----------------');
var subway = 2500;
var coffee = 3000;
var result = subway + coffee;
console.log(`오늘 총 지출액은 ${result}원 입니다.`);
console.log('-----------------');
var dan99 = 2;
/* dan99 변수에 어떤 데이터가 들어오든 고정되는 부분은 정적인 데이터로 입력 */
/* dan99 변수에 데이터가 변경될 때 함께 달라지는 결과는 ${}로 프로그래밍식 처리 */
console.log(`${dan99}x1=${dan99*1}`);
console.log(`${dan99}x2=${dan99*2}`);
console.log(`${dan99}x3=${dan99*3}`);
console.log(`${dan99}x4=${dan99*4}`);
console.log(`${dan99}x5=${dan99*5}`);
console.log(`${dan99}x6=${dan99*6}`);
console.log(`${dan99}x7=${dan99*7}`);
console.log(`${dan99}x8=${dan99*8}`);
console.log(`${dan99}x9=${dan99*9}`);