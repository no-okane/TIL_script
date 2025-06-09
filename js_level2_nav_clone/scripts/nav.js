// 데탑 메뉴 복제 -> 모바일 메뉴 붙여넣기
const mNavOpen = document.querySelector('.m_nav_open');
const gnb = document.querySelector('.gnb');
const gnbClone = gnb.cloneNode(true);
console.log(mNavOpen,gnb,gnbClone);

mNavOpen.appendChild(gnbClone);
// 데스크탑 nav-lap 숨기기
// 모바일 m-nav-lap 숨기기
const navLnb = document.querySelectorAll('.gnb .li');
const mNavWrap = document.querySelector('.m_nav_wrap');
const nav = document.querySelector('nav');
const lnbBG = document.querySelector('.lnb_bg');
const mNav = document.querySelector('.m_nav');
const closeX = document.querySelector('.close');
console.log(navLnb,mNavWrap,nav,lnbBG,mNav,closeX);
//navlab가 5개, 반복 작성하지 않으려면 반복문 사용
//navli가 5개, 인덱스로 0에서 시작해 4까지 증감하는 반복문 작성
for(i=0; i<5; i++){
    navLnb[i].style.display = 'none'
}
/* mNavWrap.style.display = 'none'; */
lnbBG.style.display = 'none';
mNavWrap.style.overflow = 'hidden';
mNavWrap.style.height = '0';

// nav에 마우스 올렸을 때 lnb(navLnb) lnb_bg 보이기
nav.addEventListener('mouseover',()=>{
    lnbBG.style.display = 'block';
    for(let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'block'
    }
})
// nav에 마우스 아웃했을 때 lnb(navLnb) lnb_bg 숨기기
nav.addEventListener('mouseout',()=>{
    lnbBG.style.display = 'none';
    for(let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'none'
    }
})

mNavWrap.style.transition = 'height 0.5s linear';
// 모바일 메뉴 클릭 시 m_nav_wrap 보이기
mNav.addEventListener('click',()=>{
    mNavWrap.style.height = '100vh';
    /* mNavWrap.style.display = 'block'; */
})
// x 클릭 시 m_nav_wrap 숨기기
closeX.addEventListener('click',()=>{
    /* mNavWrap.style.display = 'none'; */
    mNavWrap.style.height = '0';
})