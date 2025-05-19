// 자바스크립트 내장 함수
// log(), typeof() 등
// 자바스크립트 사용자 정의 함수
// function 함수명 () {재사용문법}
// 기본 속성과 함수 작성 문법
// 객체.속성;
// 객체.함수();
// const msg1 = window.alert('이 웹페이지는 포트폴리오 사이트입니다.')
// window 객체는 최상위 객체로 생략 가능
//const msg2 = window.prompt('1+1은?')
//prompt에서 사용자가 입력한 값이 최종 변수에 대입
//prompt에 값을 적지 않으면 null(빈값 출력)
//console.log(msg2)
//console.log(typeof msg2) //prompt 값은 문자열로 인식

// 사용자 정의 함수 =========================================
// 함수는 생성과 호출이 별개
// 생성만으론 실행 결과를 볼 수 없음
// 함수 밖에 호출 별도
//func1(); // 함수 밖이면 생성 위에서 호출 가능
function func1(){
    console.log('반복 내용')
    console.log('1234')
}
//func1(); // 호출은 함수 밖에서
//func1(); // 호출 갯수는 프로그래밍 실행 갯수만큼
function func2(){//생성
    let a = 10; // 함수 내 변수 생성 가능(지역 변수)
    let b = a++;
    console.log(a+b);
}//생성 함수 종료
func2(); // 호출