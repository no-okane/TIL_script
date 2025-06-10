/* to do list
1 할일 입력 후 
2 등록 버튼 클릭 -> 클릭 이벤트 내에서 1번 입력값 인식
3 여기에 할 일이 등록됩니다 기존 li의 다음 형제 위치에 입력한 정보 등록
    ※ 주의사항 : ul 태그의 마지막 자식 위치로 li 추가 -> appendchild 활용
    appendchild는 문자열 "<li>" 등 불가능, creatElement()는 가능*/

/* 변수 생성 */
const toInput = document.querySelector('.to');
const toBtn = document.querySelector('#to_btn');
const ul = document.querySelector('ul');
console.log(toInput,toBtn,ul);

toBtn.addEventListener('click',()=>{
    if(toInput.value == ''){//input의 값이 입력되지 않았을 경우 경고창 생성
        //console.log('입력 후 등록해야합니다.')
        alert('입력 후 등록해야합니다.')
    }else{
        //console.log(toInput.value)
        // ul.appendChild("<li>ddd</li>") -> 문자열 삽입 에러, 사용 불가능
        // li 생성
        let li = document.createElement('li');
        // 입력값 대입
        li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">X</button>`;
        console.log(li);
        // ul의 마지막 자식으로 삽입
        ul.appendChild(li); 
        // 입력 값 초기화
        toInput.value = '';

        // 등록된 할일 옆 x 클릭 시 부모 li 제거
        const close = document.querySelectorAll('.del_btn');
        for(let i of close){
            // 배열 상태 아닌 객체 형태로 출력, 바로 사용 가능한지 확인
            console.log(i);
            i.addEventListener('click',()=>{
                i.parentNode.remove();
            })
        }

        const spanDell = document.querySelectorAll('li span');
        for(let j of spanDell){
            console.log(j);
            j.addEventListener('click',()=>{
                j.parentNode.style.textDecoration = 'line-through';
            })
        }
    }// 조건문 else (거짓) 사용자가 값을 입력했을 때 블록 위치
})// tobtn 이벤트 종료