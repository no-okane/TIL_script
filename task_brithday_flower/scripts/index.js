// 사용자가 1~12월 중에 하나를 선택하면 결과가 출력됨
    // html의 select의 option에 value 속성이 필요
    // 사용자가 선택한 월을 탄생화 결과로 출력하기 위해서 변수 생성
    // 버튼에 클릭 이벤트(이벤트 리스너) 작성 (=코드 작성, 실행)
    // = 사용자가 입력한 정보를 받고 -> 이벤트 감지 -> 배열에서 조건에 맞는 데이터 찾기 -> 결과 출력

// ================================================================================
// 변수 생성
const month = document.querySelector('.input select[name=month]');
const resultBtn = document.querySelector('#btn');
const result = document.querySelector('.result');

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]

// 변수 오류 확인
console.log(month,resultBtn,result,birthday_flower);

// test
//console.log(birthday_flower[0].month);
//console.log(birthday_flower[0].flower);
//console.log(birthday_flower[0].content);

//resultBtn.addEventListener('click',() =>{})
//resultBtn.addEventListener('click',function(){})

// 함수 작성
resultBtn.addEventListener('click', () => {
    // month.value를 숫자열(parseInt)로 변경
    const selectedMonth = parseInt(month.value);

    // 해당 월의 탄생화 정보 찾기 (find)
    // find()는 배열에서 조건에 맞는 첫 번째 요소를 찾아주는 함수
    const flowerInfo = birthday_flower.find(f => f.month === selectedMonth);
    // f.month === selectedMonth가 맞는 객체를 찾으면 flowerInfo에 저장

    // 결과 출력 -> 템플릿 백틱-달러 문법 사용
        // .result 요소 안에 텍스트로 결과 출력
    if (flowerInfo) {
        result.innerHTML = `탄생화는 ${flowerInfo.flower}이고,<br>꽃말은 ${flowerInfo.content}입니다.`;
    }
});


// test2
//resultBtn.addEventListener('click', brithdayFunc);
/* function brithdayFunc(){
    //if(month.value == 1||2||3||4||5){}
    if(month.value >= 1 && month.value <=12{
        result.textcontent = `${birthday_flower[month.value-1].month}월의 탄생화는 ${birthday_flower_flower[month.value-1].flower}, 꽃말은 ${birthday_flower[month.value-1].content}입니다.`
    })
        
    //if(month.vlaue ===1){
        result.textcontent = `${birthday_flower[month.value-1].month}월의 탄생화는 ${birthday_flower_flower[month.value-1].flower}, 꽃말은 ${birthday_flower[month.value-1].content}입니다.`
    }
} */