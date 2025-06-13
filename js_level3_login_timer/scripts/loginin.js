// 로그인 후 활동 없을 시 5초 후 자동 로그아웃 알고리즘
let userLogin = true; // 사용자의 록인 상태 (참, 거짓)
let logoutTime = 5000; //5초
let logoutInterval;

// 사용자가 로그인한 상태라면 자동로그아웃 알고리즘 시작
if (userLogin == true){logoutTimerFunc()}

function logoutTimerFunc(){
    clearInterval(logoutInterval);

    logoutInterval = setInterval(()=>{
        console.log('활동없음 자동로그아웃 ㄱㄱ');
        window.location.href = './index.html'
    },logoutTime)
}

// 사용자의 활동감지 이벤트 (마우스 이동 키보드 터치 마우스 클릭)
document.addEventListener('mousemove', logoutTimerFunc)
document.addEventListener('keydown', logoutTimerFunc)
document.addEventListener('click', logoutTimerFunc)