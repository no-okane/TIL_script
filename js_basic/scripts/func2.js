/* func2 */
let b = 20;
let c = 30; // 전역 변수 블록{} 밖
function test(){ // 블록 선언 -> 여기부터 지역 시작
    let a = 10; // 지역 변수 블록{} 안
    console.log(a+b);
} // 블럭 종료 -> 지역 종료
test(); //함수 호출 : 함수 밖에서
// console.log(a); // 지역 변수는 전역에서 호출 불가, 에러
// console.log(a+b); 
console.log(b+c);
console.log('====================================================');
let d = 5;
let e = 15;
let f; // 전역 변수 생성 (값 선언 안 된 상태에서는 undefined)
let g;
scopeTest(); //함수호출
// 함수 대기상태에서 실행 안 됨, 호출 해야 실행 가능
console.log(f); // 호출 이후 결과이므로 값 실행 가능
function scopeTest(){ // 함수 호출 전 대기 상태 함수 생성 구조
    f = 25;
    g = 35;
    console.log(d+f);
    console.log(e+g);
}
console.log(g+d);
console.log(d+e); 
console.log

console.log('====================================================');

let x = 1;
let y;
function func1(){ // 함수 대기 상태 func1
    y = 5;
    console.log(x+y);
}
function func2(){ // 함수 대기 상태 func1
    let z = 10;
    func1 (); // func2 함수 대기 안 func1 함수 호출 (func2 대기 상태로 실행 안 됨)
    console.log(x+y+z);
}
func2() // func2 함수 호출 (func2 안 func1도 함께 절차에 맞게 실행)
console.log

console.log('====================================================');

function storyFunc1(){
    let person = ['헨젤', '그레텔'];
    let src = '조약돌';
    // 헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`);
}

function storyFunc2(){
    let person = ['헨젤', '그레텔'];
    let src = '빵부스러기';
    // 헨젤과 그레텔이 빵부스러기 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}를 이용해서 집을 찾아갔습니다.`);
}

storyFunc1();
storyFunc2();

console.log('====================================================');
// 알고리즘 - 매개변수
function storyFunc(src){
    let person = ['헨젤', '그레텔'];
    //let src = '빵부스러기';
    // 헨젤과 그레텔이 조약돌 을/를 이용해서 집을 찾아갔습니다.
    // 헨젤과 그레텔이 빵부스러기 을/를 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을/를 이용해서 집을 찾아갔습니다.`);
}
storyFunc('조약돌');
storyFunc('빵 부스러기');

console.log('====================================================');
// function coffeeFunc1(){} 함수 생성 -> 실행 결과 항상 같으므로 매개변수 선언 x
// function coffeeFunc1(data){} 함수 생성 -> 결과 매번 달라지는 데이터있으므로 매개 변수 생성
// function coffeeFunc1(data1, data2){} 함수 생성 -> 결과 매번 달라지는 데이터 2개있으므로 매개 변수 2개 생성
// -> 함수 생성 후 달라지는 데이터 1개에 맞춘 매개변수 1개 생성 완, 이후 함수 호출하고 매개변수에 대입값 10 입력
// function coffeeFunc1(data1){실행함수+매개변수data활용}
// coffeeFunc1(10)
//매개변수 생성 후 매개변수에 값 대입되면 반드시 함수 내부에 매개변수 활용한 결과식 작성
// 매개변수 사용 시 호출할 때 매개변수에 전달할 대입값을 작성 안 해도 함수가 실행되려면 매개변수에 기본값 작성
function coffeeFunc1(data1=1, data2=0.5){
    let water = data1+'컵 물을 채운다';
    let espresso = `${data2}샷 에스프레소를 넣는다`;
    console.log(water, espresso);
}
coffeeFunc1(2, 1)
coffeeFunc1()

function order1(data3, data4=1){
    const msg = '잔 주문 완료되었습니다.'
    console.log(data3, data4, msg)
}
order1('카페라떼')
order1('아메리카노', 2)
order1('녹차라떼')
order1('아메리카노', 4)

console.log('====================================================');

function order2(data5, data6, data7=1){
    const msg2 = '잔 주문 완료되었습니다.';
    const type = ['따뜻한', '차가운']
    console.log(type[data5], data6, data7, msg2);
}
order2(0, '카페라떼', 2)
order2(1, '아메리카노')
order2(0, '녹차라떼', 2)
order2(1, '아메리카노')

console.log('====================================================');
// 함수의 리턴
// 함수 내부{}는 대기장소 호출하지 않는 한 실행x
// 함수 외부는 {}가 끝난 위치로 함수 호출해서 실행할 수 있음
// 함수 내에서 return을 작성하면 내부의 데이터를 함수 외부로 반환해 실행 또는 데이터 전달
function plusFunc(num){
    let total = num+1;
    return total; 
    // 리턴으로 실행함수가 아닌 값만 보내면 호출할 때 리턴이 보낸 반환값을 묶는 실행함수 별도 작성
}
plusFunc(2);
console.log(plusFunc(2));

console.log('====================================================');
// 구구단
function dan99Func(dangugu1, dangugu2){
    let gugudan = (dangugu1*dangugu2);
    return gugudan;
}
console.log(dan99Func(9, 1));
console.log(dan99Func(9, 2));
console.log(dan99Func(9, 3));
console.log(dan99Func(9, 4));
console.log(dan99Func(9, 5));
console.log(dan99Func(9, 6));
console.log(dan99Func(9, 7));
console.log(dan99Func(9, 8));
console.log(dan99Func(9, 9));

let dan99 = ''; // 전역변수 (초기값) : 문자 데이터 입력 예정
function dan99Func1(num){
    dan99 = `${num}X1=${num*1} `;
    dan99 += `${num}X2=${num*2} `;
    // dan99 = dan99 + `${num}X2=${num*2} `;
    // 기존 dan99 변수에 우측 데이터 더해서 대입
    dan99 += `${num}X2=${num*3} `;
    return dan99;
}
dan99Func1(9);
console.log(dan99Func1(9))
console.log(dan99Func1(5))


console.log('====================================================');
// 할인율 계산
let discountResult = '';
function discount(num){
    discountResult = `할인된 값은 ${27000*num}원입니다.`;
    return discountResult;
}
console.log(discount(0.05))
console.log(discount(0.1))
console.log(discount(0.2))
console.log(discount(0.3))
console.log(discount(0.4))
console.log(discount(0.5))


let discountResult2 = '';
function discount2(price){
    discountResult2 = `할인된 값은 ${price*0.05}원입니다. `;
    discountResult2 += `할인된 값은 ${price*0.1}원입니다. `;
    discountResult2 += `할인된 값은 ${price*0.2}원입니다. `;
    discountResult2 += `할인된 값은 ${price*0.3}원입니다. `;
    discountResult2 += `할인된 값은 ${price*0.4}원입니다. `;
    discountResult2 += `할인된 값은 ${price*0.5}원입니다. `;
    return discountResult2;
}
console.log(discount2(27000))

let discountResult3 = '';
function discount3(price){
    discountResult3 = `최종 가격은 ${price*0.95}원입니다. `;
    discountResult3 += `최종 가격은 ${price*0.9}원입니다. `;
    discountResult3 += `최종 가격은 ${price*0.8}원입니다. `;
    discountResult3 += `최종 가격은 ${price*0.7}원입니다. `;
    discountResult3 += `최종 가격은 ${price*0.6}원입니다. `;
    discountResult3 += `최종 가격은 ${price*0.5}원입니다. `;
    return discountResult3;
}
console.log(discount3(27000))


console.log('====================================================');
// 2025-05-20
const greeting = function(){
    console.log('hello');
};
greeting(); 


console.log('====================================================');
// 일반 함수
console.log(bab(1))
function bab(num){
    return'밥'+num+'공기 주세요';
}

// 화살표 함수
const bab2 = (num) => {return'밥'+num+'공기 주세요';}
console.log(bab2(2));


const kudasai = (oder) => {return oder+'주세요';}
console.log(kudasai('밥'))
console.log(kudasai('반찬'))
console.log(kudasai('국'))