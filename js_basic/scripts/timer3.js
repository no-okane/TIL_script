//html li 상품 1개 준비 후 js 이용한 다수의 상품 복제 준비
//복제 전 복제 대상 선택
const productLi = document.querySelector('.product_list li')
// 오류 없는 것 확인 후 복제 변수 생성 cloneNode
//const productLiClone = productLi.cloneNode(true);
// 복사한 것 붙여넣기 할 위치 변수 선택
const productUl = document.querySelector('.product_list');
// 붙여넣기 실행
//productUl.appendChild(productLiClone);
//console.log(productLi,productLiClone,productUl);

// 반복문 활용 7개 붙여넣기
for(let i=0; i<7; i++){
    //console.log(i);
    const productLiClone = productLi.cloneNode(true);
    productUl.appendChild(productLiClone);
}

// 슬라이드 애니메이션 (타이머 함수 활용)
const slideContainer = document.querySelectorAll('.slide_container');
let num = 10;
console.log(slideContainer);
// 1920 / 4 480px
// 0 = 480 * 0
// 480 = 480 * 1
// 960 = 480 * 2 ...
/* const productTimer = setInterval(() => {
    num++;
    if(num>5){num=0}
    console.log(num, num*480)
    for(let i of slideContainer){
        console.log(i)
        i.style.transform = `translateX(-${num*480}px)`
    }
}, 2000); */

// 동기 비동기 출력 연습
// 동기 : 순차적으로 콜스택에 쌓이며 즉시 실행
//console.log('A')
//console.log('B')
//console.log('C')

// 비동기 : 비동기b는 콜백 큐에 저장되어싿가 준비가 되면 순차 순서 상관없이 독립적으로 실행
/* console.log('A');
setTimeout(() => {
    console.log('B');
}, 2000);
console.log('C');
 */

// clearInterval(setInteral변수명)
// 카운트다운 버튼 클릭 시 10초 카운트다운 시작
// 1초 간격으로 10 9 8... 0초 되면 타이머 멈춤, 이벤트 종료 메시지 출력
const saleTimer = document.querySelector('.sale_timer em');
const saleBtn = document.querySelector('#timer_btn');
console.log(saleTimer, saleBtn);

function startCountDownFunc(){
    let num = 10;
    const startCountDown = setInterval(()=>{
        if(num<0){
            //타이머 종료
            clearInterval(startCountDown); 
            //console.log('종료');
            alert('종료');
        }else{
            //console.log(num);}
            saleTimer.textContent = num;
            num--;
        }
    },1000)
}
saleBtn.addEventListener('click',startCountDownFunc)