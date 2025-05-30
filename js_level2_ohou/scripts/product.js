// 변수 선언
const colorSelect = document.querySelector('.product_option select[name=color]');
const sizeSelect = document.querySelector('.product_option select[name=size]');

const orderSelect = document.querySelector('.oder_select');
const orderColor = document.querySelector('.oder_select .color')
const orderSize = document.querySelector('.oder_select .size')

const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const oderNum = document.querySelector('input[name=user_num]');
const totalPrice = document.querySelector('.oder_select .price em');

const closeBtn = document.querySelector('.oder_select .close');

const cartBtn = document.querySelector('#cart_btn');
const buyBtn = document.querySelector('#buy_btn');

// 변수 오류 점검
console.log(colorSelect,sizeSelect,orderSelect,orderColor,orderSize,minusBtn,plusBtn,oderNum,totalPrice,closeBtn,cartBtn,buyBtn);

//================================================================
console.log('11===================================================================');
// 상품 옵션 선택 시 색상 선택 후 (클릭ㄴ 변경ㅇ)사이즈 선택 가능, 색상 미선택 시 사이즈 선택 불가

// 2) 셀렉트 비활성화
sizeSelect.disabled = true;

// 3) 색상 셀렉트 변경했을 때 이벤트 생성 -> 사이즈 활성화
/* colorSelect.addEventListener('change',changeFunc);
function changeFunc(){
    return sizeSelect.disabled = false;
} */

//================================================================================
console.log('12===================================================================');
// 색상 -> 사이즈 선택 시 선택한 정보가 아래 새로운 요소에 수량, 가격과 함께 출력
// 진행 전 새로운 요소 .order_select 숨기기
orderSelect.style.display = 'none';
// 색상과 사이즈 선택 시 새로운 요소 .order_select 노출
// 색상 -> 사이즈 선택 시 이벤트와 함수 생성
colorSelect.addEventListener('change',orderFunc)
sizeSelect.addEventListener('change',orderFunc)
function orderFunc (){
    // console.log(0); // 정상 확인
    //console.log(colorSelect.value); // 선택 색상 확인
    sizeSelect.disabled = false;
    //console.log(sizeSelect.value); // 선택 사이즈 확인
    // 특정 상황에서 아래 orderselect 출력하려면 조건문 작성
    // oderselect 출력 조건 : color의 value값 존재하는 option 선택 후 size의 value값 존재하는 option 추가 선택했을 때 
    // 조건문 연습
    // if (조건식){조건식이 참일 경우 실행되는 명령}
    //if('블랙'){console.log('조건 실행 테스트')}
    console.log(Boolean(colorSelect.value))
    // 사용자가 선택한 color, size 값 value가 모두 참일 때 조건 실행 -> value="" 빈문자열이면 거짓
    if(colorSelect.value && sizeSelect.value){
        orderSelect.style.display = 'block'; // 주문 영역 보이기
    }
    // oder_select의 color 안에 선택한 colorSelect 값 대입
    orderColor.textContent = colorSelect.value;
    // oder_select의 size 안에 선택한 sizeSelect 값 대입
    orderSize.textContent = sizeSelect.value;
}

//================================================================================
console.log('13===================================================================');
//수량 조정 시 1~9999개까지 선택 가능
// 마이너스 버튼 클릭 시 인풋의 수량(값)이 1보다 작으면 [1~9999까지 선택 가능합니다] 메시지 출력
// 플러스 버튼 클릭 시 인풋의 수량(값)이 9999보다 크면 [1~9999까지 선택 가능합니다] 메시지 출력
// 마이너스와 플러스 버튼 클릭 시 수량이 범위 값 안에서 1씩 감소 또는 증가
let num = 1; // 초기 수량
let price = 39900; //초기 가격
let total = 0; // 수량에 따라 가격 계산하는 최종 변수

// 초기 설정
oderNum.value = num;
// 플러스 버튼 클릭 시 수량이 1씩 증가되어 oderNum 출력
plusBtn.addEventListener('click',()=>{
    num++;
    // 증가 수량이 9999보다 큰 경우 경고 메시지 출력 (조건문)
    if (num > 9999){alert('1~9999개까지 선택할 수 있습니다.')}
    if(num >=1 && num <= 9999){
        total = num*price;
        console.log(total);
        oderNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})
// 마이너스 버튼 클릭 시 수량이 1씩 감소돼 oderNum 출력
minusBtn.addEventListener('click',()=>{
    num--;
    // 감소 수량이 1보다 작은 경우 경고 메시지 출력 (조건문)
    if(num < 1){alert('1~9999개까지 선택할 수 있습니다.')}
    if(num >= 1){
        total = num*price;
        console.log(total);
        oderNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})



// 12번에서 나온 박스의 x 클릭 시 주문 정보 모두 삭제
closeBtn.addEventListener('click',()=>{
    orderSelect.style.display = 'none';
});


// 장바구니 클릭 시 [장바구니에 담겼습니다] 메시지 출력 alert()
//화살표함수 버전
/* cartBtn.addEventListener('click',()=>{
    alert('장바구니에 담겼습니다');
}) */
//일반함수 버전 - 함수 반복
cartBtn.addEventListener('click',cartmsg)
function cartmsg(){
    alert('장바구니에 담겼습니다');
}
// 익명함수 버전
/* buyBtn.addEventListener('click',function(){
    alert('장바구니에 담겼습니다');
}) */

// 바로구매 클릭 시 [로그인이 필요합니다] 메시지 출력
// 화살표함수 버전
/* buyBtn.addEventListener('click',()=>{
    alert('로그인이 필요합니다');
}) */
// 일반함수 버전 - 함수 반복
/* buyBtn.addEventListener('click',buymsg)
function buymsg(){
    alert('로그인이 필요합니다');
} */
// 익명함수 버전
buyBtn.addEventListener('click',function(){ //익명함수 (this)
    alert('로그인이 필요합니다');
})