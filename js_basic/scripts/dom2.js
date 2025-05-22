// dom 이벤트와 함수
// 함수의 매개변수, 익명함수, 화살표함수
// function 함수명 (매개변수,매개변수){실행}
// const 변수명 = function (매개변수){실행}
// const 변수명 = (매개변수) => {실행}
const bg = document.querySelector ('#bg');
const bg1Btn = document.querySelector ('#bg1_btn');
const bg2Btn = document.querySelector ('#bg2_btn')

console.log(bg, bg1Btn, bg2Btn);
bg.style.height='100vh';
bg.style.backgroundColor = 'yellow';
bg1Btn.style.backgroundColor = 'aqua';

// 버튼으로 배경색 변경 제어 알고리즘
// 이벤트 함수 생성 후 생성한 함수를 이벤트 내 콜백함수로 불러오기
bg1Btn.addEventListener('mouseover',bg1BtnMousover);
bg1Btn.addEventListener('mouseout',bg1BtnOut);
//bg2Btn.addEventListener('mouseover',bgChange('coral'));
// -> 객체 이벤트에서 매개 변수가 있는 함수를 호출하ㅕ면 익명함수 또는 화살표 함수로 변경해야 호출 가능
bg2Btn.addEventListener('mouseover',function(){
    bgChange('coral');
})
bg2Btn.addEventListener('mouseout',()=> bgChange('brown'))
// -> 화살표 함수 내 매개변수가 있는 함수 호출 (한 줄이면 중괄호 생략 가능)

//그냥 함수
function bg1BtnMousover(){
    return bg1Btn.style.backgroundColor='orange';
}
function bg1BtnOut(){
    return bg1Btn.style.backgroundColor='aqua';
}

//매개변수 함수
function bgChange(color){
    return bg.style.backgroundColor = color;
}