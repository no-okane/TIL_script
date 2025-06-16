// 스크롤 이벤트 문법
//window.addEventListener('scroll',()=>{실행결과})
// topBtn은 스크롤 이벤트와 상관없이 즉시 숨겨야하므로 스크롤이벤트 밖에서 선언
const topBtn = document.querySelector('#top')
topBtn.style.display = 'none';

//a 태그로 클릭 시 새로고침 되어 스크롤이 위로 올라가는 문제 해결을 위한 방법
topBtn.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({left:0,top:0,behavior:'smooth'})
})

// 검색 폼 복제 변수
const searchClone = document.querySelector('header form').cloneNode(true);
let isSearchClone = false; // 안 보이면 f 보이면 t
const userMenuClone = document.querySelector('.user_menu').cloneNode(true);


window.addEventListener('scroll',()=>{
    //console.log('스크롤 이벤트 진행중...')
    const headerBtm = document.querySelector('.bottom');

    // 스크롤 이벤트에 따라 헤더 디자인 변경
    if(window.scrollY > 100){
        headerBtm.classList.add('active');
        headerBtm.appendChild(searchClone);
        headerBtm.appendChild(userMenuClone);
        isSearchClone = true;
    }else{
        if(isSearchClone){// 100보다 작으면 바로 실행하지 않고 이중 검사 후 실행
            headerBtm.classList.remove('active');
            headerBtm.removeChild(searchClone);
            headerBtm.removeChild(userMenuClone);
            isSearchClone = false;
        }
    }

    // 스크롤 이벤트에 따라 맨 위로 디자인 변경
    // 맨 위로 숨기기 
    // 스크롤 위치가 500보다 크면 맨 위로 보이기 , 반대면 숨김
    // 맨 위로 클릭하면 스크롤 y 0으로 워프
    if(window.scrollY < 500){
        topBtn.style.display = 'none'
    }else{
        topBtn.style.display = 'block'
    }
})//스크롤 이벤트 종료
