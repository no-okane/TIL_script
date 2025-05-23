// 다이어트 체중계 알고리즘
// 사용자가 본인의 키와 몸무게를 입력하고 버튼을 클릭하면 함수 실행
// 계산식) 적정체중 = (본인신장-100)*0.9
// 곌과예) 당신의 체중은 ?kg이며 ?kg 초과되셨습니다.
// 미만, 적정체중은 조건문 배워야 함
// 객-이-함
const userHeight = document.querySelector('input[name=user_height]');
const userWeight = document.querySelector('input[name=user_weight]');
const resulBtn = document.querySelector('#result_btn');
const result = document.querySelector('#result');
console.log(userHeight, userWeight, resulBtn, result);
// input의 초기값 또는 입력한 이후의 값을 확인하는 속성은 value
// 객체.속성 -> 읽기
// 사용자 정의 함수 없이 속성 및 내장 함수를 작성하면 사용자 동작과 관계 없이 즉시 실행
console.log(`사용자가 입력한 키 : ${userHeight.value}`);
console.log(`사용자가 입력한 몸무게 : ${userWeight.value}`);
// 사용자가 키를 입력한 후 프로그램이 그 값을 인식하게 만드는 방법
// -> 값을 실시간으로 입력하는 동안 프로그램 과부하 및 보안 문제로 함수 작동하게 해선 안 되며 결정 버튼 따로 마늗ㄹ어 두고 버튼에 특정 동작을 해서 함수가 실행되게 만들어야
// 실시간 함수 사용하는 경우 - 보안이 필요하지 않은 가벼운 프로그래밍 (리뷰 글자수 제한 등)
resulBtn.addEventListener('click',weightCal)
// 이벤트 수행 시 호출할 콜백함수
function weightCal(){
    const namalweight = (userHeight.value-100)*0.9;
    console.log(`입력 키 : ${userHeight.value}`)
    console.log(`입력 몸무게 : ${userWeight.value}`)
    console.log(`적정 몸무게 : ${(userHeight.value-100)*0.9}`);
    console.log(`당신의 체중은 ${userWeight.value}kg이며 ${(userWeight.value)-(namalweight)}kg 초과되셨습니다.`);
    // input 요소일 경우 값 읽기, 수정, 삭제 value 속성 사용
    // input 아닌 다른 요소일 경우 값 읽기, 수정, 삭제 textConten 또는 innerHTML 속성 사용
    result.innerHTML = `당신의 체중은 ${userWeight.value}kg이며<br><em>${(userWeight.value)-(namalweight)}kg</em> <em>초과</em>되셨습니다.`;
    return 
}

