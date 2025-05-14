/* variable */
/* 템플릿 문자열 활용 - 월, 요일 출력 */
// new Date(); /* 괄호는 함수 */
// getFullYear();
// getMonth();
// getDate();
/* 변수 생성 시 기존 변수와 같은 위치에 작성 */
//컴퓨터 시간 불러오기
var test = new Date();
var ye = test.getFullYear();
var mon = test.getMonth(); /* 컴퓨터는 숫자를 0부터 인식하므로 5월을 숫자 4로 인식 */
var day = test.getDate();
/* console.log(`${ye}년 ${mon+1}월 ${day}일`); */
// 객체의 개수를 체크할 땐 보통 0부터 숫자를 인식하지만 특정 속성이나 함수는 1부터 인식
// 1부터 인식하는 속성 - length (문자열의 길이 체크)


// ES6 새로운 변수 let, const와 기존 변수 var===========================
var num1 = 10;
var num1 = 20;
// var 중복 선언 가능
// but 이미 생성한 변수명을 중복 선언해서는 안 됨
// var는 이 문제를 오류로 분류하지 못해 가능한 사용하지 않거나 주의해서 사용
let num2 = 30;
/* let num2 = 40; */
// let 변수 생성 키워드는 이미 생성한 변수를 중복 선언하지 못하도록 체크
const num3 = 50;
// const num3; 중복 선언 불가
// num3 = 60; 값 변경 불가, 처음 선언된 값을 끝까지 변하지 않고 유지
// const num4; 상수는 생성과 대입이 반드시 동시 진행
const num4 = 60; //생성과 대입이 동시에 된 경우


// 객체 연습===========================
// 1 도형 정보 저장 (너비 높이 좌표 모서리 색상)
let rectagle = {
    // rectagle 객체 변수명은 콜스택 저장
    // {width~color} 객체 모든 속성은 메모리힙 저장
    width:300,
    height:200,
    x:0,
    y:100,
    border:0,
    color:'red',
}
console.log(rectagle.x, rectagle.y);

// 2 회원 정보 저장 (이름 나이 성별 지역)
let user_info = {
    name:'aaa',
    age:1,
    gen:'m',
    country:'ko',
}
console.log(user_info);
console.log(user_info.gen, user_info.age);

// 3 쇼핑몰 상품 저장 (상품명 가격 재고수량 색상)
let product = {
    name:'선풍기',
    price:9999,
    count:1,
    color:'pink',
}
console.log(product);
console.log(product.name, product.price);
console.log(`${product.name}의 재고 수량은 ${product.count}개 이다.`);

// 4 영화관 좌석 지정 (좌석명 좌석위치 좌석가격)
let movie_theater = {
    name:'일반석',
    which:'h13',
    price:11000,
}
console.log(movie_theater);
console.log(movie_theater.name, movie_theater.which);
console.log(`오늘 ${movie_theater.name} 좌석을 ${movie_theater.price}원에 예약했다.`);


// 배열 연습===========================
// 배열 작성법 1 값은 개수 제한 없음, 최소 2개
// let 배열변수명 = [배열값,배열값]
// const 배열변수명 = [배열값,배열값]
const yoil = ['월','화','수','목','금','토','일']
console.log(yoil);
console.log(yoil[2]); //배열변수명[호출인덱스번호]
console.log(`오늘은 ${yoil[2]}요일 입니다.`)
console.log(`내일은 ${yoil[3]}요일 입니다.`)