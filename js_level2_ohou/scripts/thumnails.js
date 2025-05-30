console.log('1===================================================================');
// 작은 썸네일 이미지 마우스 올렸을 때 이벤트 시 큰 이미지 변경
// 1) 변수 생성
const thum = document.querySelectorAll('.small a');
const bigThum = document.querySelector('.big a img');
// 1-1) 변수 오류 확인
console.log(thum, bigThum);
// memo : 콘솔 확인 시 1개의 dom 요소가아닌 [index] 표시된 여러 개 dom 요소로 출력될 때는 실제 사용 시 요소 [index]를 붙여서 사용해야 함

/* // thum4에 마우스를 올리면 -> big 이미지의 src 속성값이 big4로 변경
// 2) 이벤트와 함수 생성
thum[0].addEventListener('mouseover',function(){bigThumSrc(1)});
thum[1].addEventListener('mouseover',function(){bigThumSrc(2)});
thum[2].addEventListener('mouseover',function(){bigThumSrc(3)});
thum[3].addEventListener('mouseover',function(){bigThumSrc(4)});
thum[4].addEventListener('mouseover',function(){bigThumSrc(5)});
function bigThumSrc (num){
    // 둘 중 하나 방법 택 1
    // return bigThum.src = "./images/big"+num+".jpg"
    return bigThum.src = `./images/big${num}.jpg`
}*/

// 테두리 활성화 추가 버전
// 첫 번째 썸넬 활성화 디자인 (css)

// 2) this 생성
// 특정 dom 요소 이벤트 (click, mouseover 등) 내에서 작성하는 키워드
// 이벤트 요소가 달라도 this는 이벤트 내에서 해당 요소를 가리키는 통합명칭으로 사용 가능
// 화살표 함수에서 사용 안 됨 익명함수에서만 사용 가능
// 이벤트 내에서 호출하는 함수라 해도 ㅎ함수 내부에 this를 직접적으로 작성 안 됨, 이벤트 익명 함수 내에서 작성해야 함
thum[0].style.border = '3px solid #0aa5ff'
thum[0].addEventListener('mouseover',function(){bigThumSrcBorder(1, this)});
thum[1].addEventListener('mouseover',function(){bigThumSrcBorder(2, this)});
thum[2].addEventListener('mouseover',function(){bigThumSrcBorder(3, this)});
thum[3].addEventListener('mouseover',function(){bigThumSrcBorder(4, this)});
thum[4].addEventListener('mouseover',function(){bigThumSrcBorder(5, this)});
function bigThumSrcBorder (num, target){
    // 사용자가 마우스 올리는 순서를 정의할 수 없기 때문에 전부 초기화 기준으로 설정
    thum[0].style.border = 'none'
    thum[1].style.border = 'none'
    thum[2].style.border = 'none'
    thum[3].style.border = 'none'
    thum[4].style.border = 'none'
    // 현재 마우스 올린 작은 썸 변수에 테두리 생성 (this 현재 이벤트 대상 활용)
    target.style.border = '3px solid #0aa5ff';
    return bigThum.src = `./images/big${num}.jpg`;
}
