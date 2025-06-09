//for(변수초기값; 조건시기 증감식){조건이 참이면 반복 구문} 반복 종료
//for(let i=0; i<5; i++){console.log(i)}
const li = document.querySelectorAll('ul li');
console.log(li)
for(let i=1; i<=2; i++){
    li[i].classList.add('list_active')
}

//태그 2개 이상 다수를 변수로 대입할 때 querySelectorAll선언 후 사용 시 변수 [index] 활용 (주로 for 반복문과 함께 활용)

// js dom 복제 부여넣기 (데스크탑 내비와 모바일 내비에 주로 활용)==================================================================
// 붙여넣기 위치 dom, 복제 dom 변수
const section = document.querySelector('section');
const ul = document.querySelector('ul'); // ul dom 선택
const ulClone = ul.cloneNode(true); // ul 자식 자손 포함 복제
console.log(section,ul,ulClone);

// 복제한 요소 붙여넣기 -> 대상요소의 마지막 자식 위치로 붙여넣기
section.appendChild(ulClone); // section의 마지막 자식 위치에 붙여넣기

//===================================================================================================================
// while 반복문 - 조건이 참이면 무한반복
// while(조건){괄호한 조건이 참일 경우 실행문}

//let htmlQ = confirm('a 태그는 alt 속성이 있다. 맞으면 확인, 틀리면 취소');
/* console.log(htmlQ); // 확인 (true) 취소 (false)
// 위 문제를 푸는 학생이 문제를 틀리면 무한 반복 질문
// 문제를 맞추면 -> alert 정답입니다.
while(htmlQ != false){
    htmlQ = confirm('a 태그는 alt 속성이 있다. 맞으면 확인, 틀리면 취소');
    }
    alert('정답입니다')
    */
    /* let cssQ = confirm('듀듀듀');
    while(cssQ != true){cssQ = confirm('듀듀듀');} alert('듀듀듀뱌뱌뱌')
    let jsQ = confirm('뱌뱌뱌');
   while(jsQ != false){cssQ = confirm('뱌뱌뱌');} alert('뱌뱌뱌듀듀듀') */

//===================================================================================================================
let num = 1;
while(num <=10){
    if(num == 5) break;
    console.log(num);
    num++;
}
//===================================================================================================================
for(var i=1; i<=10; i++){
    continue;
    console.log(i);
}
console.log(i);

//===================================================================================================================
// for 안 for 추가로 있는 구조 (2단, 3단 가능)
// 첫번째 for 실행될 때 두번째 for는 조건이 거짓이 될 때까지 모두 반복실행
for(let i=1; i<3; i++){//첫번째 for
    for(let j=0; j<2; j++){//두번째 for
        console.log('첫번째 i값',i,'두번째 j값',j)
    }
}

//===================================================================================================================
const gugudan = document.querySelector('.gugudan');
console.log(gugudan);
for(let i=2; i<=9; i++){
    for(let j=1; j<=9; j++){
        gugudan.innerHTML += `${i} X ${j} = ${i*j}<br>`
    }//2단 for 조건이 거짓이면 종료(9보다 클 때) 위치
    gugudan.innerHTML += `<hr>`
    console.log('--------------------------')//2단 for 종료 구분선 표시
}

//===================================================================================================================
const study = ['html','css','js']
const abc = 'abcdefghijklmn'
const user = {name:'여름',age:20,area:'서울'}
console.log(study);

for(let i in study){
    console.log(study[i])
}
for(let i in abc){
    console.log(i)
}
for (let i in user){
    console.log(i);
    console.log(user[i]);
}

//===================================================================================================================
for(let i of study){
    console.log(i)
}
for(let i of abc){
    console.log(i)
}
for(let i of li){console.log(i)}