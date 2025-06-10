// 생년월일 입력 후 계산 버튼 클릭 시 생일로부터 지금까지 며칠이 지났는지 몇시간이 지났는지 보여주는 프로그램
// 지금까지 흐른 날짜 계산법 : 1000*60*60*24 나눔
// 지금까지 흐른 시간 계산법 : 1000*60*60 나눔
const birthDate = document.querySelector('#birthdate');
const birthBtn = document.querySelector('#birth_btn');
const resultDate = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
console.log(birthDate,birthBtn,resultDate,resultTime);

birthBtn.addEventListener('click',brithFunc)
function brithFunc(){
    //console.log(new Date(birthDate.value));
    //console.log(new Date());
    const birth = new Date(birthDate.value);
    const today = new Date();
    console.log(birth,today);

    //오늘 날짜에서 생년월일 빼기
    // newdate 복잡한 특수문자 및 문자 포함하므로 숫자만 반환 게산 getTime()함수 활용
    const birthToday = today.getTime() - birth.getTime();
    console.log(birthToday);
    // 흐른날짜, 흐른시간 계산
    const dateFlow = Math.floor(birthToday / (1000*60*60*24));
    const timeFlow = Math.floor(birthToday / (1000*60*60));
    console.log(dateFlow, timeFlow);
    // 결과 출력
    resultDate.textContent=dateFlow;
    resultTime.textContent=timeFlow;
}