// 정규표현식 regex============================================================
// 필터 시작과 끝 표시 /
// 필터.test('검사문자')

//===================================================================================
// 상황 1 쇼핑몰 리뷰 작성 시 리뷰 내용에 [별로]라는 단어 입력 금지
const userText = '구매하지 마세요. 별로예요.';
const regexFilter = /별로/
let result = regexFilter.test(userText);
console.log(result); // true

//===================================================================================
// 상황 2 쇼핑몰 리뷰 작성 시 리뷰 내용에 [별로],[최악]단어 입력 금지
// 필터 예시 (별로|최악)
const userText2 = '구매하지 마세요. 별로임 최악임';
const regexFilter2 = /(별로|최악)/
result = regexFilter2.test(userText2);
console.log(result); // true

//===================================================================================
// 회원가입 알고리즘
// 아이디에 영어만 입력 가능한 (정규표현식) 조건 생성
const userId = document.querySelector('input[name*=id]');
const userIdErr = document.querySelector('.error_id');
console.log(userId,userIdErr);
userId.addEventListener('input',idChk);
// function inputTest(){return console.log('입력확인')}
function idChk(){
    if(!/^[a-zA-Z]=$/.test(userId.value)){
        return userIdErr.textContent = '영어만 입력 가능'
    }else{
        return userIdErr.textContent = '';
    }
}

// 나이에 숫자만 입력 가능한 정규표현식 조건 생성
const userAge = document.querySelector('input[name*=age]');
const userAgeErr = document.querySelector('.error_age');
console.log(userAge,userAgeErr);
userAge.addEventListener('input',ageChk);
function ageChk(){
    if(!/^\d+$/.test(userAge.value)){
        return userAgeErr.textContent = '숫자만 입력 가능'
    }else{
        return userAgeErr.textContent = '';
    }
}

// 비밀번호에 영문 숫자 조합만 가능한 정규표현식 조건 생성
const userPw = document.querySelector('input[name*=pw]');
const userPwErr = document.querySelector('.error_pw');
console.log(userPw,userPwErr);
userPw.addEventListener('input',pwChk);
function pwChk(){
    if(!/^[a-zA-Z0-9]+$/.test(userPw.value)){
        return userPwErr.textContent = '영문 숫자 조합만 입력 가능'
    }else{
        return userPwErr.textContent = '';
    }
}


//===================================================================================
// 리뷰 글자 수 제한 알고리즘
// 리뷰 작성 시 입력 글자 수 실시간 출력 .current
// 현재 포맷(제목, 내용)에 맞는 최대 글자수 초기 표시 .max
// 리뷰 작성 시 최대 글자수 초과하면 메시지 출력

const userReview = document.querySelector('textarea[name=review]');
const reviewCurrent = document.querySelector('.current');
const reviewMax = document.querySelector('.max');
const reviewErr = document.querySelector('.error_msg');
const reviewMaxNum = 100; // 최대 입력 글자 수 제한
console.log(userReview, reviewCurrent, reviewMax, reviewErr, reviewMaxNum);
// 이벤트 전 초기 세팅
reviewMax.textContent = reviewMaxNum;
// 이벤트
userReview.addEventListener('input',reviewFunc);
function reviewFunc(){
    // 글자 수 속성 length
    reviewCurrent.textContent = userReview.value.length;
    if(/^.{0,100}$/.test(userReview.value)){
        // 0~100자 이력 사이일 때 (참 결과)
        return reviewCurrent.textContent = userReview.value.length;
    }else{
        // 입력 비활성화
        userReview.disabled = true;
        // 100자보다 클 때 (거짓 결과)
        return reviewErr.textContent = '100자 이하'
    }
}