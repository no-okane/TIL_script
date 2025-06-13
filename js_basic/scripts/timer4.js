// 회원가입 버튼 클릭 시 join_msg에 가입 축하합니다 메시지 출력
const join = document.querySelector('#join');
const joinMsg = document.querySelector('.join_msg');
console.log(join,joinMsg);

joinMsg.classList.add('hide'); // 초기 상태 = 숨김
join.addEventListener('click',()=>{
    //console.log('가입축하합니다')
    joinMsg.classList.remove('hide');
    joinMsg.textContent = '가입축하합니다'
    // 메시지 출력 후 3초 후 메시지 자동 사라지기
    const hideMsg = setTimeout(() => {
        joinMsg.classList.add('hide')
    }, 3000);
})


//알림메시지 후 다른 페이지로 이동
//결제 완료 되었습니다 메시지 출력 후 5초 뒤 timer3.html이동
const payBtn = document.querySelector('#pay');
const payResetBtn = document.querySelector('#pay_reset');
const payMsg = document.querySelector('.pay_msg');
console.log(payBtn, payMsg,payResetBtn);

let payMsgOut;

// 초기 숨기기
payMsg.classList.add('hide');
payResetBtn.classList.add('hide');

payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide');
    payResetBtn.classList.remove('hide');
    payMsg.textContent = '결제 완료 되었습니다 5초 후 광고 사이트로 이동합니다'
    // 메시지 출력 후 3초 후 timer3.html이동
    payMsgOut = setTimeout(()=>{
        window.location.href = './timer3.html'
    },5000)
})

payResetBtn.addEventListener('click',()=>{
    clearTimeout(payMsgOut);
    console.log('setTimeoit 이동삭제완료')
})