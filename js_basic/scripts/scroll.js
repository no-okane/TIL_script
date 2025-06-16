// window.scrollTo(x,y) 문서 스크롤 이동하는 내장함수(절대좌표)
const btn1 = document.querySelector('#btn1');
const top1 = document.querySelector('#top');
console.log(btn1,top1);

btn1.addEventListener('click',()=>{
    //window.scrollTo(0,200);//숫자는 자동으로 px
    window.scrollTo({left:0, top:500, behavior:'smooth'})
})
//behavior:'smooth' : css의 body, html{scroll-behavior:'smooth'} 기능 동일

top1.addEventListener('click',()=>{
    window.scrollTo({left:0,top:0,behavior:'smooth'})
})

//특정 위치로 바로가기, 위치 속성, offsetTop 활용방법
const blogBtn = document.querySelector('#blog_btn');
const cafeBtn = document.querySelector('#cafe_btn');
const newsBtn = document.querySelector('#news_btn');
const wenbtoonBtn = document.querySelector('#webtoon_btn');
const section = document.querySelectorAll('section');
const navBtn = document.querySelectorAll('.nav button');
console.log(blogBtn,cafeBtn,newsBtn,wenbtoonBtn,section,navBtn);

/* blogBtn.addEventListener('click',()=>{
    window.scrollTo({left:0,top:section[0].offsetTop,behavior:'smooth'})
})
cafeBtn.addEventListener('click',()=>{
    window.scrollTo({left:0,top:section[1].offsetTop,behavior:'smooth'})
})
newsBtn.addEventListener('click',()=>{
    window.scrollTo({left:0,top:section[2].offsetTop,behavior:'smooth'})
})
wenbtoonBtn.addEventListener('click',()=>{
    window.scrollTo({left:0,top:section[3].offsetTop,behavior:'smooth'})
}) */

// 반복문 활용 forEach -> eventDOM 대상 권장
navBtn.forEach((obj,ind,arr)=>{
    console.log(obj,ind,arr);
    // obj 클릭 이벤트 생성
    // 클릭 이벤트 내에서 window.scrollTo 동일 인덱스의 section top 위치 이동
    obj.addEventListener('click',()=>{
        console.log('d')
        window.scrollTo({left:0,top:section[ind].offsetTop,behavior:'smooth'})
    })
})

//===============================================================================================
// 상대적 이동 scrollBy
// 이전, 다음 버튼 클릭 시 웹툰 width만큼 가로스크롤(윈도우x toon_wrap ㅇ) 이동
const toonWrap = document.querySelector('.toon_wrap');
const toonPrev = document.querySelector('.toon_wrap_all .prev');
const toonNext = document.querySelector('.toon_wrap_all .next');
console.log(toonWrap,toonPrev,toonNext);
toonPrev.addEventListener('click',()=>{
    //toonWrap.scrollBy(-toonWrap.children[0].children[0].offsetWidth,0)
    toonWrap.scrollBy(-600,0)
})
toonNext.addEventListener('click',()=>{
    //toonWrap.scrollBy(toonWrap.children[0].children[0].offsetWidth,0)
    toonWrap.scrollBy(450,0)
})