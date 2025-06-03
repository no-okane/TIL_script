// 삼항 조건 연산자 기본 문법
// 조건 ? 조건이 참일 때 결과 : 조건이 거짓일 때 결과 ;
//===================================================================================================================
let x = 5;
let y = x+10;
// 삼항 조건의 결과가 콘솔 로그에 출력
console.log(y==15 ? 'o':'x');
let total = x>10 ? 'o' : 'x' ;
console.log(total);

//===================================================================================================================
/* const userAge = Number(prompt('당신의 나이는?'));
total = userAge >= 18 ? '성인입니다.' : '미성년자입니다.' ;
console.log(total); */


//===================================================================================================================
const game_score = [{
    name:'봄', // game_score[0].name
    score:500,// game_score[0].score
},{
    name:'여름',
    score:600,
}]
console.log(game_score);
// 오늘의 1등은 00이고 점수는 000입니다!
total = game_score[0].score > game_score[1].score ? game_score[0] : game_score[1];
console.log(total);
console.log(`오늘의 1등은 ${total.name}이고 점수는 ${total.score}입니다.`)

//===================================================================================================================
const re = document.querySelector('textarea[name=re]');
const reBtn = document.querySelector('#re_btn');
console.log(re,reBtn);
reBtn.addEventListener('click',()=>{
    // 콘솔 테스트 : 리뷰내용 출력
    console.log(re.value);
    // 콘솔 테스트 : 리뷰글자 수 출력
    // 글자 수 속성 length
    console.log(re.value.length);
    // 리뷰 내용 100자 이상인가?
    // 100자 이상이면 등록완료
    // 아니면 100자 이상 입력하세요
    result = re.value.length >= 100 ? '등록완료' : '100자 이상 입력하세요.';
    alert(result)
})

//===================================================================================================================
// 쇼핑 수량 가격 알고리즘
// 1개 가격 기준 12500원
// 쇼핑몰 상품 데이터베이스
const productDB = [{
    name:'떡닭도리탕',
    price:12500,
    stock:10, // 재고 수량 (최대 구매 개수)
},{
    name:'꼬막 비빔장', // productDB[1].name
    price:5800, // productDB[1].price
    stock:20, // productDB[1].stock
}]
// dom
const numInput = document.querySelector('input[name=num]');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const priceP = document.querySelector('.price');
let num = 1; // 초기 주문수량
let result = ''; // 결과 출력 담을 변수
console.log (numInput,minusBtn,plusBtn,priceP,productDB);
// 초기 주문 수량 표시
numInput.value = num;

// 현재 수량 num / 상품 재고 수량 productDB[0].stock
// + 버튼 클릭 시 재고 수량까지 증가, 재고 수량 오버 시 최대 구매 수량입니다
plusBtn.addEventListener('click',()=>{
    result = num >= productDB[0].stock ? '최대 구매 수량입니다.' : num++;
    numOperateFunc(0)
})

// - 버튼 클릭 시 현재 수량이 1보다 작거나 같으면 최소 구매 수량입니다
minusBtn.addEventListener('click',()=>{
    result = num <= 1 ? '최소 구매 수량입니다.' : num--;
    numOperateFunc(0)
})

// - + 버튼 시 반복 실행하는 함수 (0,1로 매번 다른 인덱스만 매개 변수 처리)
function numOperateFunc(index){
    numInput.value = num;
    priceP.textContent = (num*productDB[index].price).toLocaleString('ko-kr')+'원';
    console.log(result);
}