/* forEach 
for ~ in 요소의 인덱스에 접근 반복문
for ~ of 요소의 각 객체에 접근 반복문
forEach 요소의 인덱스와 객체에 동시 접근 가능 반복문
변수.forEach(function(요소, 인덱스, 배열){반복 실행문})
변수.forEach((요소, 인덱스, 배열)=>{반복 실행문})*/

/* 변수 생성 */
const btn = document.querySelectorAll('main .btn');
console.log(btn);

// 반복문 (x) : mouseover mouseout 이벤트
/* btn[0].addEventListener('mouseover', ()=>eventColor('#ea2f14', btn[0]))
btn[0].addEventListener('mouseout', ()=>eventColor('#fcef91', btn[0]))
btn[1].addEventListener('mouseover', ()=>eventColor('#ea2f14', btn[1]))
btn[1].addEventListener('mouseout', ()=>eventColor('#fcef91', btn[1])) */

// 반복문 for of : mouseover mouseout 이벤트
/* for(let i of btn){
    console.log(i)
    i.addEventListener('mouseover',()=>eventColor('#0abab5',i))
    i.addEventListener('mouseout',()=>eventColor('#adeed9',i))
} */

// 반복문 forEach : mouseover mouseout 이벤트
btn.forEach((obj, ind, arr)=>{
    console.log(obj, ind, arr);
    obj.addEventListener('mouseover',()=>eventColor('#b6f500',obj))
    obj.addEventListener('mouseout',()=>eventColor('#fffadc',obj))
})

function eventColor(value, target){
    return target.style.backgroundColor = value;
}

//=====================================================================================
// 전체 동의하기 클릭 시 나머지 필수약관들 모두 선택
// 객체.checked

/* 변수 생성 */
const lawAllChk = document.querySelector('#all');
const lawChk = document.querySelectorAll('input');
console.log(lawAllChk,lawChk);
lawAllChk.addEventListener('click',function(){
    console.log(this.checked) // 활성화(true) 비활성화(false)
    if(lawAllChk.checked == true){//현재 this 선택상태checked가 선택됐다면 true
        for(let i of lawChk){//모든 lawchk에  반복 접근하여 그 이름을 i로 사용
            i.checked = true; // 모든 i의 선택상태 checked는 참true
        }
    }else{ //조건이 거짓이라면 (선택 안 된 상태라면)
        for(let i of lawChk){
            i.checked = false;
        }
    }
})

//=====================================================================================
// 탭제목 클릭 시 해당되는 내용만 보이고 나머지 숨기기
// 탭 제목 1 클릭 -> 탭 내용 1만 보임
// 초기 설정 : 내용1만 보임
const tabTitle = document.querySelectorAll('aside a');
const tabContents = document.querySelectorAll('.tab_c');
console.log(tabTitle,tabContents)
// 모든 내용 숨기고 첫번째 내용만 보이기 반복문
/* for(i=0; i<3; i++){
    tabContents[i].style.display = 'none'
} 
    ->3개 이상부터 가능*/

for(let i of tabContents){i.style.display='none';}
tabContents[0].style.display='block';
// forEach 객체와 인덱스 동시 활용
// 객체 (제목 접근)
tabTitle.forEach((obj,ind,arr)=>{
    //console.log(obj,ind,arr);
    obj.addEventListener('click',()=>{
        //클릭한 대상과 동일한 인덱스의 내용 보이기
        //console.log(ind)
        for(let i of tabContents){i.style.display='none';}
        tabContents[ind].style.display = 'block'
    })
})