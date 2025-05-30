// 변수
const thubimage = document.querySelectorAll('.design a');
const popupBg = document.querySelector('.popup_bg');
console.log(thubimage, popupBg);

// 팝업 숨기기 popupbg
popupBg.style.display='none';

// 썸네일 이미지 클릭 시 팝업 popupbg 보이기
// 대상 이미지가 출력되게 
// 클릭한 대상 이미지 경로 체크 -> 경로를 팝업 이미지의 경로에 대입
// 변수로 만든 DOM 요소가 여러개일 경우 이벤트는 인덱스를 사용해서 하나씩 개별 접근해야 함

function popupBgShow(target){
    //console.log('함수 시작 위치 에러 체크============');
    //console.log(popupBg.children[0]);//정상, 오류 없음
    popupBg.style.display='flex';
    popupBg.children[0].children[0].src = target.children[0].src;
    return
}


thubimage[0].addEventListener('click',function(){
    //console.log(0); //작동 테슷
    //console.log(this); //이벤트 객체 자동 인식하는지 체크
    //console.log(this.children[0].src);
    //console.log(popupBg.children[0].children[0].src);
    popupBgShow(this);//팝업 출력 함수 호출
    
});
thubimage[1].addEventListener('click',function(){
    popupBgShow(this);//팝업 출력 함수 호출
});
thubimage[2].addEventListener('click',function(){
    popupBgShow(this);
});
thubimage[3].addEventListener('click',function(){
    popupBgShow(this);
});

// 배경popupbg 클릭 시 팝업 popupbg 숨기기
popupBg.addEventListener('click',popupBgOut);
function popupBgOut(){
    return popupBg.style.display='none';
}