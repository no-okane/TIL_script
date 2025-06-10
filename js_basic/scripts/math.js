console.log(Math);
console.log(Math.PI);

const num = -123;
const total = Math.abs(num);
console.log(total);

const num1 = 123.467;
const total1 = Math.ceil(num1);
console.log(total1);

const num2 = 123.456;
const total2 = Math.floor(num2);
console.log(total2);

const fruitDB = [
    {
        name : '토마토',
        price : 1000,
    },{
        name : '바나나',
        price : 2000,
    },{
        name : '사과',
        price : 3000,
    }
]
console.log(fruitDB);
const total3 = Math.max(fruitDB[0].price,fruitDB[1].price,fruitDB[2].price);
console.log(total3);

console.log(fruitDB);
const total4 = Math.min(fruitDB[0].price,fruitDB[1].price,fruitDB[2].price);
console.log(total4);

const num5 = 123.567;
const total5 = Math.random()*4;
console.log(total5);

const total6 = Math.round(Math.random()*4);
console.log(total6);


//===================================================================================
// 배경 랜덤
console.log(Math.floor(Math.random()*5)+1)
const randomNum = Math.floor(Math.random()*5)+1;
const bodyDom = document.querySelector('body');
console.log(randomNum,bodyDom);
bodyDom.style.backgroundImage = `url(./images/bg_0${randomNum}.jpg)`;


//===================================================================================
// 생년월일 입력 후 계산 버튼 클릭 시 생일로부터 지금까지 며칠이 지났는지 몇시간이 지났는지 보여주는 프로그램
// 지금까지 흐른 날짜 계산법 : 1000*60*60*24 나눔
// 지금까지 흐른 시간 계산법 : 1000*60*60 나눔
const birthDate = document.querySelector('#birthdate');
const birthBtn = document.querySelector('#birth_btn');
const resultDate = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
console.log(birthDate,birthBtn,resultDate,resultTime);

birthBtn.addEventListener('click',brithFunc)
function brithFunc(){
    //console.log(new Date(birthDate.value));
    //console.log(new Date());
    const birth = new Date(birthDate.value);
    const today = new Date();
    console.log(birth,today);

    //오늘 날짜에서 생년월일 빼기
    // newdate 복잡한 특수문자 및 문자 포함하므로 숫자만 반환 게산 getTime()함수 활용
    const birthToday = today.getTime() - birth.getTime();
    console.log(birthToday);
    // 흐른날짜, 흐른시간 계산
    const dateFlow = Math.floor(birthToday / (1000*60*60*24));
    const timeFlow = Math.floor(birthToday / (1000*60*60));
    console.log(dateFlow, timeFlow);
    // 결과 출력
    resultDate.textContent=dateFlow;
    resultTime.textContent=timeFlow;
}