/* setInterval(numTimer,2000)
function numTimer() {
    num++;
    console.log(num);
    } */

//이벤트의 다양한 함수 호출방법
//콜백 DOM.addEventListener('evemt', 콜백함수)
//화살표 DOM.addEventListener('evemt', ()=>{}))
//익명 DOM.addEventListener('evemt', function(){})

//타이머의 다양한 함수 작성방법
//setInterval(콜백함수, 밀리초); -> 콜백함수 재사용 가능
//const 변수명 = setInterval(익명함수, 밀리초); -> 타이머를 다른 변수명으로 타이머 정지 재생 등의 제어 가능
//const 변수명 = setInterval(()=>{}, 밀리초);

//const numTimer = setInterval(function(){num++; console.log(num);},2000);
//const numTimer = setInterval(()=>{num++; console.log(num);},2000);

//================================================================================================
let num = 3; // 0 400 800 출력을 위한 숫자 변수
const slideContainer = document.querySelector('.slide_container');
console.log(slideContainer)

slideContainer.style.transition = 'transform 0.3s'
const slideTimer = setInterval(() => {
    num--;
    if(num<0){num=2}
    slideContainer.style.transform = `translateX(-${400*num}px)`
    console.log(`현재 num:${num}, x축값:${400*num}`)
},3000);
