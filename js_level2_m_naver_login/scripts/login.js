// main .lagn_group 기준
// 초기설정 : .lang_open 한국~중국 옵션 숨기기
// #lang_select 클릭 시 .lang_open 보이기
// 변수생성 -> 이벤트 제작 -> 이벤트 만족 시 함수 실행

const langSelect= document.querySelector('#lang_select');
const langOpen= document.querySelector('.lang_open');
console.log(langSelect,langOpen);

// 초기설정 : .lang_open 한국~중국 옵션 숨기기
langOpen.style.display = 'none';
let openif = false; // 초기 거짓
langSelect.addEventListener('click',()=>{
    if (openif == false){
        // .lang_open 숨기면 보이기
        langOpen.style.display = 'flex';
        openif = true; //상태값 변경
    }else if(openif == true){
        // .lang_open 보이면 숨기기
        langOpen.style.display = 'none';
        openif = false;
    }
})