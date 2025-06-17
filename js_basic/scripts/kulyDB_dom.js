// ul id="container" db 무한스크롤 삽입
const container = document.querySelector('#container');
//무한 스크롤로인해 불러오는 db 매번 다르므로 필요한 변수 생성
//한번에 출력되는 개수는 4개씩
const itemLoad = 4;
//스크롤 내릴 때 인식하는 반복문 초기값
const startIndex = 0;
//스크롤 내릴 때 인식하는 반복문 종료값(조건) : 초기값 + 출력갯수
let endIndex = startIndex + itemLoad ;
console.log(itemLoad,startIndex,endIndex)
let isLoading = false; //로디 완료 t 미완료 f
console.log(container);

loadMoreContents() //처음 보이는 제품 나열 위한 함수 호출
function loadMoreContents(){

    // 변수 활용한 반복문
    for(let i=startIndex; i<endIndex; i++){
        const newLi = document.createElement('li');
        newLi.innerHTML = `<img src="${kurlyDB[i].src}" alt="${kurlyDB[i].name}">`
        // 대입연산(=) 쓰면 이전 대입 연산 삭제 되므로 복합연산(+=)써야함
        newLi.innerHTML += `<p class="name">${kurlyDB[i].name}</p>`
        newLi.innerHTML += `<p class="summary">${kurlyDB[i].summary}</p>`
        newLi.innerHTML += `<p class="price_original"><del>${(kurlyDB[i].price).toLocaleString('ko-kr')}원</del></p>`
        //할인가 계산식 : (원가 * (1-할인율/100)).toLocaleString('ko-kr')
        //소수점 제거 : Math.round((원가 * (1-할인율/100))).toLocaleString('ko-kr')
        newLi.innerHTML += `<p class="price">${Math.round((kurlyDB[i].price * (1 - kurlyDB[i].sale / 100))).toLocaleString('ko-kr')}원</p>`
        newLi.innerHTML += `<p class="slae">${kurlyDB[i].sale}%</p>`
        newLi.innerHTML += `<p class="riveiw">${kurlyDB[i].riview}+</p>`
        container.appendChild(newLi);
    }

    // for 출력 후 스크롤 이벤트로 인해 재출력시 endIndex값이 다음 출력되는 DB 갯수만큼 증가되게 수정
    endIndex += itemLoad;
    isLoading = false
}

//광고 뷰포트 영역에서 등장
const ad = document.querySelectorAll('.ad p');
console.log(ad)

// 스크롤 이벤트
window.addEventListener('scroll',()=>{

        // 요소가 뷰포트와 거리가 몇인지 확인 변수
        //const adTop = ad[0].getBoundingClientRect().top;
        //console.log(adTop)
        // 요소가 뷰포트 80%에 도착할 때
        /* if(adTop < window.innerHeight * 0.8){
            ad[0].classList.add('active');
        }else{
            ad[0].classList.remove('active');
        } */
        //반복문 활용
        for(let i of ad){
            //console.log(i)

            const adTop = i.getBoundingClientRect().top;

            if(adTop < window.innerHeight * 0.95){
                i.classList.add('active');
            }else{
                i.classList.remove('active');
            }
        }


    // 현재 뷰포트 하단 위치 window.scrollY + window.innerHeight
    // 문서 전체 높이 document.documentElement.scrollHeight
    const currentScroll = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const scrollValue = 0.8; //0~1 기준으로 사용자의 스크롤 위치 파악 값
    //console.log(`현재 스크롤 값 ${currentScroll}, 전체높이 ${totalHeight}`)

    //현재 스크롤 위치가 전체 스크롤 위치 대비 80% 뷰포트 위치에 왔는지 + DB 로드 안 된 상태인지
    //현재 뷰포트 >= 전체 스크롤 값 * 사용자 위치 값
    if(currentScroll >= totalHeight * scrollValue && !isLoading){
        //로드된 종료 인덱스가 db전체 갯수와 같으면 종료
        if(endIndex >= kurlyDB.length){return}
        //console.log('새로운 콘텐츠 로드중')
        isLoading = true;
        loadMoreContents()
    }

})//스크롤 이벤트 끝