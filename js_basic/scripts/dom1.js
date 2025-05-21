// (비회원인 경우) 주문하기 버튼 클릭 시 [회원만 주문할 수 있습니다.] 메시지 출력
// 리스너(listener) : 특정 이벤트 발생했을 때 실행할 함수
// 주문하기 버튼 -> dom 객체 변수
// 클릭했을 때 -> 이벤트 발생
// 회원만 가능 메시지 -> 함수
const buyBtn =  document.querySelector('#buyBtn'); // 변수 생성
console.log(buyBtn); // 변수 정상 확인

// 버튼 온클릭으로 호출할 함수 생성
function userOrderMsg(){
    return console.log('회원만 주문가능합니다. 로그인해주세요.');
}

const payBtn = document.querySelector('#payBtn');
console.log(payBtn);
function userPayMsg(){
    return console.log('결제 완료되었습니다.')
}

const idBtn = document.querySelector('#idBtn');
console.log(idBtn);
function userIdCk(){
    return console.log('아이디가 중복되지 않습니다. 사용하셔도 좋습니다.')
}

// 키보드이벤트
// 리뷰 입력창에 키보드 눌렀을 때 [50자 이상 입력하세요.] 출력 알고리즘
const userReviewInput = document.querySelector('input[name*=review]');
console.log(userReviewInput);
function userReview50Write(){
    return console.log('50자 이상 입력하세요.');
}

// id 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 [아이디는 영어로 시작해야 합니다.] 출력 알고리즘
const userIdInput = document.querySelector('input[name*=id]');
console.log(userIdInput);
function userIdEngMsg(){
    return console.log('아이디는 영어로 시작해야 합니다.')
}

// pw 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 [비밀번호는 특수문자 포함 12자 이상 입력하세요.]
const userPwInput = document.querySelector('input[name*=pw]');
console.log(userPwInput);
function userPw12Msg(){
    return console.log('비밀번호는 특수문자 포함 12자 이상 입력하세요.')
}

// focus : 특정 요소에 포커스(커서 활성화)됐을 경우
//userIdInput.style.border = '3px solid green'; //test
userIdInput.style.outline='none';
function userIdFocusGreen(){
    return userIdInput.style.border = '3px solid green';
}
function userIdBlurGray(){
    return userIdInput.style.border = '1px solid gray'
}

//productNumInput.style.outline='none';
const productNumInput = document.querySelector('input[name=product_num]');
console.log(productNumInput);
function productNumFocusYellow(){
    return productNumInput.style.backgroundColor = 'yellow';
}
function productNumBlurWhite(){
    return productNumInput.style.backgroundColor = 'white';
}

// 문서가 로딩되었을 때 실행 함수
function loadMsg(){
    return alert('문서 로딩 완료')
}


console.log('=================================================')
//객->이->함
const googleJoin = document.querySelector('.google_join');
console.log(googleJoin);
// 자바스크립트에 작성하는 객체 이벤트 문법
// 객체.addEventListener('이벤트', 콜백함수);
// addEnventListener 이벤트 작성 시 on 없이 이벤트만 작성
googleJoin.addEventListener('click',googleGo);
function googleGo(){
    return window.open('https://accounts.google.com','_blank');
}

const naverJoin = document.querySelector('.naver_join');
console.log(naverJoin);
naverJoin.addEventListener('click',naverGo);
function naverGo(){
    return window.open('https://nid.naver.com/nidlogin.login','_black');
}

const kakaoJoin = document.querySelector('.kakao_join');
kakaoJoin.addEventListener('click',kakaoGo);
function kakaoGo(){
    return window.open('https://accounts.kakao.com','_blank');
}


// 현재 페이지 변경 방법
// 1 객체
const fileLink = document.querySelector('.file_link');
console.log(fileLink);
// 2 이벤트
fileLink.addEventListener('click',link0520);
// 3 콜백함수
// js에서 상대 경로 연결 시 js 파일 기준이 아닌 js가 연결된 html 파일이 저장된 위치를 기준으로 상대 경로 작성
function link0520(){
    return window.location.href='bom1.html';
}

const indexLink = document.querySelector('.index_link');
console.log(indexLink);
indexLink.addEventListener('click',indexLinkMove);
function indexLinkMove(){
    return window.location.href='index.html';
}

const readmeLink = document.querySelector('.readme_link');
console.log(readmeLink);
readmeLink.addEventListener('click',readmeLinkMove);
function readmeLinkMove(){
    return window.location.href='../README.md';
}

// 상품 수량 증가 알고리즘
const numInput = document.querySelector('input[name=num]');
const numBtn = document.querySelector('#num_btn');
const numBtnMinus = document.querySelector('#num_btn_minus')
console.log(numInput, numBtn, numBtnMinus);
//1 수량 초기값 1
numInput.value = 1; // 초기값이므로 이벤트없이 바로 작성
//2 + 버튼 클릭 시
numBtn.addEventListener('click',numPlus);
// 증감연산자 활용
// return numInput.value = ++numInput.value;
function numPlus(){
    console.log(typeof numInput.value)
    return numInput.value = Number(numInput.value)+1;
}
// 3 - 버튼 클릭
numBtnMinus.addEventListener('click',numMinus);
function numMinus(){
    return numInput.value = --numInput.value;
    //return numInput.value = Number(numInput.value)-1;
}