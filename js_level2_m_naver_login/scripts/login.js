// 변수모음=======================================================================================
const langSelect= document.querySelector('#lang_select');
const langOpen= document.querySelector('.lang_open');
const userId = document.querySelector('.id_pw_wrap input[name*=id]');
const userPw = document.querySelector('.id_pw_wrap input[name*=pw]');
const errorMsg = document.querySelector('#login_frm .error_msg');
const loginBtn = document.querySelector('#login_frm #login_btn');
console.log(langSelect,langOpen,userId,userPw,errorMsg,loginBtn);

//=======================================================================================
//네이버 회원정보 저장 DB
const naverUserDB = [{
    id:'aaa',
    pw:'a1234'
},{
    id:'bbb',
    pw:'b1234'
}]
console.log(naverUserDB);

//=======================================================================================
// main .lagn_group 기준
// 초기설정 : .lang_open 한국~중국 옵션 숨기기
// #lang_select 클릭 시 .lang_open 보이기
// 변수생성 -> 이벤트 제작 -> 이벤트 만족 시 함수 실행

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

//=======================================================================================
// 네이버 로그인 에러 메시지 알고리즘
/* 
1 아이디 비번 모두 입력하지 않고 로그인 클릭 시 -> 아이디 또는 전번 입력해주세요
2 아이디 입력하고 비번 입력 시 비번 입력 안 하면 -> 비번 입력해주세요
3 아이디, 비번 모두 틀린 거 입력 -> 아이디, 비번 입력 정보가 잘못되었습니다 다시 입력해주세요
4 로그인 실패 3회 이상 -> 자동입력 방지 문자 출력, 아이디 (로그인 전번 로그인 전용 아이디), 비번 또는 자동입력 방지 문자를 잘못 입력했습니다 입력하신 내용을 다시 확인해주세요
*/
loginBtn.addEventListener('click',() => {
    if(userId.value == '' && userPw.value == ''){
        // 아이디와 비번 모두 입력 안 할 시 (참) 실행 결과
        errorMsg.textContent = '아이디 또는 전화번호를 입력해주세요.';
    }else if (userPw.value == ''){
        // 아이디 비번 입력 했으나 비번 입력 안 했을 때
        errorMsg.textContent = '비밀번호를 입력해주세요.';
    }else if (userId.value == ''){
        // 앞선 두 개 모두 거짓일 때 아이디를 입력 안 했는지
        errorMsg.textContent = '아이디 또는 전화번호를 입력해주세요.';
    }else if (userId.value == naverUserDB[0].id && userPw.value == naverUserDB[0].pw){
        //아이디와 비밀번호가 DB서버의 0 인덱스 값과 모두 일치 -> 네이버 메인페이지로 이동
        window.location.href = 'https://naver.com'
    }else{
        // 모든 조건 거짓일 때
        errorMsg.textContent = '아이디 (로그인 전화번호, 로그인 전용 아이디), 비밀번호 또는 자동입력 방지 문자를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
    }
    // 삼항 조건 활용 조건 1
    // 조건식 ? 조건식참결과 : 조건식거짓결과
    // 조건결괃입변수 = 조건식 ? 조건식참결과 : 조건식거짓결과
    //errorMsg.textContent = userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해주세요.' : '' ;
})