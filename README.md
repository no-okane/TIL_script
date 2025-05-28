# 자바 스크립트 공부 시작 2025-05-12 ~
* 자바 스크립트 관련 파일은 `scripts/`폴더에 저장


-----


### vs code 터미널로 실행 테스트 하는 법
1) 터미널 마지막 폴더 경로가 js 파일이 들어있는 위치인지 확인
2) `cd 하위 폴더명` 또는 `cd ..`
3) `node 자바 스크립트 파일명.js`
3) 3의 nodeJS 이용 자바 스크립ㅌ 파일 실행 명령어 작성하고 확인 (실행 함수가 있어야 결과 테스트 가능)
4) `node -v` 노드 설치 확인 명령 (nodeJS 설치해야 가능)


-----


### 프로그래밍 언어 유형
* 절차적 언어 - 절차를 순서대로 작성
* 객체 지향 언어 - 데이터와 절차를 묶어 객체 단위로 관리
* 함수형 언어 - 프로그램 함수를 조합하여 구현
* 논리형 언어 - 데이터 사이의 관계와 논리를 설명

### 절차적 언어, 객체지향 언어 작성 순서
1. 목표 설정하기
2. 시작->목표(끝)까지 단계를 흐름도로 표현하기
3. 스크립트 명령어로 작성하기 -> 완성

### 기본 용어
* 오브젝트 - 객체, 사용자가 컨트롤 할 수 있는 객체 대상 버튼 링크 텍스트 박스 등
* property - 속성, 객체가 가지는 속성 태그명 클래스 아이디 색상 위치 등
* 이벤트 - 인터넷 브라우저에서 발생하는 사건 클릭 드래그 더블클릭 키보드 입력 등
* 함수 - funtion 메소드 method 실행 확인 삭제 취소 이동 애니메이션
    * 메소드 - 클래스 내부에 선언된 함수
    * 함수 - 클래스와 관련없다면 일반적으로 전부
    * 객체 이벤트하면 객체 메소드함수 실행

### JS의 HTML 기본 작성 구조(head or body)
* head/body에 내부 스크립트로 작성하는 경우
```
<head>
  <script>
   window.onload = function(){
      //자바스크립트 작성위치
   }
  </script>
</head>
```
```
<body>
HTML CODE
<script>
	//자바스크립트 작성위치
</script>
</body>
```
* head/body에 외부 스크립트로 작성하는 경우
```
<head>
	<script src="외부스크립트경로.js" defer></script>
</head>
```
```
<body>
	<script src="외부스크립트경로.js" defer></script>
</body>
```
* **defer** - 외부스크립트의 경우만 작성할 수 있는 속성으로 페이지가 모두 로드된 후 script를 읽는 속성 (주로 사용)
* async - 페이지 로드 관계없이 다운로드 후 즉시 실행 스크립트

### 변수
* 알고리즘 프로그래밍을 작성할 때 가장 중요한 필수 요소
* 프로그래밍 작성에 필요한 다양한 데이터를 저장하는 저장 공간
* 필요시 자유롭게 꺼내 쓰거나 바꿀 수 있음
* **변수는 한번에 한가지 값만 저장할 수 있습니다.**
* **새로운 값을 대입하면 기존 값은 삭제**, 다른 연산자 등을 이용하면 다른 결과를 낼 수 있음
* 선언키워드 `var` -> `var 변수명;`
* `변수명 =(대입 연산자) 변수값;`

### 변수 개념
* 변수 : 변하는 수
* 값이 메모리에 할당되지만 그 값은 언제든지 다른 값으로 변경
* 변수는 한 번에 한 가지 값만 담을 수 있음 (기본값)
* 새로운 값을 담으려면 무조건 기존 값 비워지고 새로운 값으로 채움
* 문자, 정수, 실수 등 어떤 데이터 값이든 대입 가능

### 대입 연산자(=)
* 변수에 값 저장할 때 사용하는 연산자 (=할당 연산자)
* let name = “spring” → 오른쪽을 왼쪽에 넣는다

### 변수 이름을 위한 규칙
1) 변수의 이름은 반드시 문자, 달러기호($) 언더스코어(_) 시작, 절대로 숫자로 시작해서는 안됨
2) 변수의 이름은 대시(-)나 마침표(.)같은 기호들을 사용할 수 없음
3) 키워드나 예약어는 사용할 수 없음
    * break, case, catch, continue, default, delete, do, else, finally, for,if, instanceof, new, reutrn, switch, this, throw, try, function, typeof, var, void, while, with, preventDefault, length, click, mouseover, setInterval, css 등..
4) 모든 변수는 대/소문자를 구별
5) 변수가 저장할 정보의 종류를 잘 표현하는 의미있는 단어를 사용
6) 변수의 이름에 두 개이상의 단어를 사용할 때에는 뒷 단어의 첫 글자를 대문자로 사용, 또는 단어를 언더스코어(_)로 연결
    * ex) firstname X firstName O first_name O

## 변수 표기법 종류
* 캐멀 표기법
    * newName, webSiteCode
* 파스칼 표기법 : 자바에서 씀 스크립트에서 쓰는 거 아님
    * NewName, WebSiteCode
* 밑줄 표기법
    * new_name. web_site_code


### 객체, 속성, 함수 (메소드), 이벤트에 따른 방법
* **객체** : 자바스크립트에서 제어하려는 대상 (보통 데이터를 담은 변수가 객체 대상이 되는 경우가 많음)
* **속성** : 객체가 가진 고유한 속성 (객체가 img라면 src, alt가 속성)
* **함수** : 객체 이용한 자바스크립트의 실행 결과, 뒤에 소괄호() 붙음
* 객체.속성
* 객체.함수()

### MEMO
* 변수
    * var 변수명 = 대입값;
    * var : 변수 선언 키워드
    * = 대입연산자 (좌 <- 우 값 대입)
* 콘솔 실행 함수
    * 객체.함수(실행하는 값); -> 콘솔창(객체)에 num2 변수값(실행값)을 로그(실행 함수)로 출력
* 자바 스크립트는 절차적 언어 : css처럼 우선순위에 따라 최종 결과값만 인식하지 않고 실행 함수의 작성 위치에 따라 다른 변수값 인식
* 변수 대입=변수값 대입


### ES6 변수 선언
- 변수 var
    - 생성 변수명
    - 전역 변수 선언 방식
    - 중복 선언 가능
- 변수 let
    - 생성 변수명
    - var 선언 키워드와 유사하나 중복 선언 불가
    - 지역 변수 선언 방식
- 상수 const
    - 생성 변수명
    - 변경되지 않는 상수
    - 최초 선언 후 값 변경 불가
    - 고정된 변수 데이터에만 const 선언 가능
    - 지역 변수 선언 방식
    - 상수는 생성과 대입이 반드시 동시 진행
    - 선언과 동시에 값을 초기화, 선언만 할 수 없음
    - const로 변수를 선언할 때는 값을 반드시 할당해야

### MEMO
* 변수 생성 시 기존 변수와 같은 위치에 작성
- 괄호는 함수
- new Date();
- getFullYear();
- getMonth();
- getDate();
- 컴퓨터는 숫자를 0부터 인식하므로 5월을 숫자 4로 인식
- 객체의 개수를 체크할 땐 보통 0부터 숫자를 인식하지만 특정 속성이나 함수는 1부터 인식
- 1부터 인식하는 속성 - length (문자열의 길이 체크)


### 변수 스코프(scope) (데이터 접근 가능 위치)
- 스코프 : 변수 값이 접근할 수 있는 위치
    - 전역 스코프 = 전역 변수 : 변수는 코드 어느 곳에나 접근 가능
    - 지역 스코프 = 지역 변수 : 변수가 선언된 블록 내부만 접근 가능
        - 함수, 루프 등 {중괄호}로 구분되는 모든 영역
        - 블록 영역 : 함수, 루프 등 {중괄호}로 구분되는 모든 영역

### 자바스크립트 내부 구조 메모리
- 콜스택 (call stack) : 원시형 데이터를 가진 변수가 저장되는 메모리(공간) - 값 하나
- 메모리힙(memory heap) : 오브젝트형 변수 생성 시 데이터가 저장되는 참조형 공간 (메모리) - 2개 이상의 여러 메모리(속성, 값)가 쌓인
    - heap : 데이터 사용 시 이용하는 메모리 영역

### 원시형과 오브젝트형의 값 저장 구조
- 주소값을 이용한 간접적 접근 방식

### 변수의 자료형
* 자바 스크립트는 동적 언어로 변수 정의 시 자료형 정의 할 필요 없음, 대입되는 데이터 종류에 따라 변수 데이터 종류 결정
* 문자일 경우 '따옴표'
* 자료형 종류
    - 자료형 데이터를 구분할 수 있는 내장 함수 : `typeof데이터명`
    * 원시형
        * 한 개의 데이터를 담고 있는 자료형
        * 변수 할당 시 고정된 메모리 크기를 가짐
        * 변수가 값을 직접적으로 가리키는 형태
        * 한 개의 단순 데이터인 숫자, 문자, 불리언, 널, undefined가 해당
        - 변수에 저장된 값 자체를 콜스택에 저장 : let age = 100
        -----
        * 숫자형
            * 숫자 표현 및 산술 연산이 가능한 자료형, 정수와 실수로 구분
        - 문자열
            - 문자열 표현하는 데 사용하는 자료형
            - 문자들이 모여 하나의 열을 이루는 데이터
        - 불리언(boolean)형
            - 논리적인 요소를 나타내고 참과 거짓 2가지 값을 갖음
        - 널(null)형
            - 아무 값도 없다는 의미
            - null이라는 한 가지 값만 가능
        - undefined
            - 값이 할당되지 않은 상태
    ------
    - 오브젝트형
        - 한 가지의 데이터가 아닌 데이터 컬렉션과 같은 여러 자료형을 표현할 수 있는 특수한 자료형
        - 배열과 객체도 오브젝트에 해당
        - 값이 크거나 복잡한 참조형 데이터는 힙이라는 메모리 공간에 저장 -> let info = {name:'가을'}
    -----
    - 원시형과 오브젝트형의 차이
        - 원시형 : 특정 변수에 값을 복사하는 방식 (call by value)
        - 오브젝트형 : 특정 변수에 메모리 주소 복사하는 방식 (call by reference)


### 객체 속성
- innerHTML : 요소의 html  콘텐츠 읽기, 수정, 삭제 속성
    - html 태그 포함하여 처리
- innerText : 요소의 텍스트 읽기, 수정, 삭제 속성
    - html 태그 무시하고 텍스트만 변환
- textContent : 요소의 텍스트 읽기, 수정, 삭제 속성
    - innerText보다 빠르 ㄴ수행 가능
    - html 태그 무시, 텍스트만 변환
-----
- input 요소일 경우 값 읽기, 수정, 삭제 value 속성 사용
- input 아닌 다른 요소일 경우 값 읽기, 수정, 삭제 textConten 또는 innerHTML 속성 사용


### 오브젝트형 객체
- 객체 : 이름, 값을 한 쌍으로 묶은 데이터 (연관 배열 또는 사전)
- 객체 생성 : `객체명 = {객체속성:객체값, 객체속성:객체값}`
- 객체값 호출 : `객체명.속성; `
- 객체 적용 예시
    - 도형의 정보 저장(너비 높이 좌표 모서리 모양 색상 등), 회원 정보 저장(이름 나이 성별 지역 등), 쇼핑몰 상품 저장(상품명 상품가격 상품 재고수량 상품 색상 등), 영화관 좌석 지정(좌석명 좌석위치 좌석 가격 등)

### 오브젝트형 배열
- 배열 array : 여러 개의 값(데이터)을 순서대로 저장할 수 있는 구조
- [] 대괄호를 사용, 각 데이터 저장
- 각 개별 값은 인덱스(index)로 접근하여 숫자는 0부터 인식
- 데이터 전체 길이(length)는 1부터 인식
- 변수 생성
    - ★let 변수명 = [배열, 배열];
    - let 변수명 = new Array(배열, 배열, 배열)
    - let 변수명 = new Array(3)
- 배열 호출 : 변수명[index]

### 동일한 분류의 객체가 많을 경우 묶는 방법
```
const moviAll = [
    {
        name:'미션 임파서블',
        director:'크리스토퍼 맥쿼리',
        genre:'액션',
        rating:169,
        actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
        releaseDate:'2025.05.17',
        age:15,
        story:'전 세계 국가와 조직의 기능이 마비되고...',
    },{
        name:'극장판 닌자보이 란타로: 도쿠타케 닌자대 최강의 군사',
        director:'후지모리 마사야',
        genre:'애니메이션',
        rating:90,
        actor:['타카야마 미나미','타나카 마유미'],
        releaseDate:'2025.05.14',
        age:'all',
        story:'닌자학교 선생님인 도이 한스케가 타소가레도키성의 닌자, 손나몬의 도전장을 받고 결투을 하러 간 후 실종된다.',
    },
];
```

### 표현식과 연산자
* 표현식 : 변수, 함수 등의 값을 바탕으로 계산
* 연산자 : 표현식을 조합하여 복잡한 표현식을 만들어 계산
    - 더하기, 빼기, 곱하기, 나누기 등 일반 산술 연산자는 대입 연산자가 없으면 변수에 영향을 주지 않음
* 피연산자 : 연산을 수행하는 대상
    * +3이라면 +가 연산자, 3이 피연산자
    -----
    * 단항 연산자  : 피연산자가 1개
    - 이항 연산자 : 피연산자가 2개
    - 삼항 연산자 : 특정 조건에 맞춰 피연산자를 실행해야 하는 경우
    -----
    - 나머지(%) : a % b 왼쪽의 피연산자를 오른쪽 피연산자로 나눈 나머지
    - 거듭제곱(**) : a ** b 왼쪽의 피연산자를 오른쪽 피연산자의 값만큼 곱한 값
    - 계산할 수 없는 경우는 NaN으로 처리 -> 'two'*2=NaN

### 산술 단항 연산자
- 증감 연산자 : 연산자 뒤 데이터 종류는 반드시 숫자
    - ++a : a를 1 증가시킨 후 a 연산 진행
    - a++ : a 연산 진행 후 a를 1 증가
    - --a : a를 1 감소시킨 후 a 연산 진행
    - a-- : a 연산 진행 후 a를 1 감소
    -----
    - 증감 연산은 변수 자체에 영향 줌
    - 증감 연산자는 대입이 없어도 변수에 영향 줌
- 복합 대입 연산자
    - 코드의 간결함 위해 사용
    - 사칙연산 모두 복합 대입 연산자 적용 가능
    -----
    - += -> a=a+b(a+=b) : 기존 a값에 b를 더하여 a에 대입
    - -=
    - *=
    - /=
    - %=

### 데이터 타입 연산자
* `typeof데이터명`
* `typeof(데이터명)` : 데이터명이 여러개 있을 경우
* 숫자 데이터 : number
* 문자 데이터 : string
* 객제 데이터 : object

### 문자열 연결 연산자와 콤마
* 문자열 연결 연산자(+)
    - 문자열(string)을 서로 이어 붙이는 데 사용하는 연산자
    - 피연산자 중 하나라도 문자일 경우 연결 연산자로 인식
    - `let greetimg='안녕'+'봄';`
    - 피연산자 중 모두 숫자인 경우 더하기 연산자
    - 문자+문자 → 연결 결과 / 문자+숫자 → 연결 결과 / 숫자+숫자 → 더하기 결과
        - 문자열+문자열 : 연결 연산자
        - 문자열+숫자 : 연결 연산자
        - 숫자+숫자 : 더하기 연산자
* 콤마
    - 연산자처럼 결과를 반환하지 않는 단순한 구분(separator)로 사용하는 역할
    - `console.log(greeting, '잘가!');`

### 빼기, 곱하기, 나누기 연산자
- 문자열('문자열') 결합이어도 숫자형으로 자동 변환하여 인식
    - 문자열+숫자 : 문자를 숫자로 자동 변환하여 처리
    - 숫자+숫자 : 숫자로 그대로 인식, 처리
    - (숫자)+문자열 : 문자를 숫자로 변환, 처리

### null과 undefined 차이
- null
    - 값이 비어있음, 존재하지 않음
    - 사용자에 의해 결정되는 의도적인 대입 값
    - 대입하여 변수를 비워버림, 지움
- undefined
    - 정의(할당)되지 않음
    - 변수를 초기화하지 않은 오류 상태
    - 변수에 대입해서는 안 됨
    - 사용자가 실수로 초기화하지 않은 변수에 들어간 일종의 오류 값

### MEMO
- `box4 = null;` 값 제거
- `box4 = 0;` 숫자 초기화(데이터 타입 유지)
- `box4 = ''` 문자 초기화(데이터 아입 유지)
```
더하기 가계부
var subway = 2500;
var coffee = 3000;
var result = subway + coffee;
console.log(`오늘 총 지출액은 ${result}원 입니다.`);
```
```
곱하기 구구단
var dan99 = 2;
console.log(`${dan99}x1=${dan99*1}`);
console.log(`${dan99}x2=${dan99*2}`);
```


### 숫자 데이터
- 정수, 실수, NaN(Not a Number)으로 숫자 데이터 구분
    - 수학 연산, 비교 연산, 조건문, 반복문 등 많은 정밀도 게산에 활용
    - NaN : 계산 중 오류 났거나 부정확한 연산 시 반환 값

### 문자 데이터
- 16비트 유니코드(utf-16) 전세계 사용 문자 대부분 표현 가능
- 작은 따옴표'' 큰따옴표"" 문자열의 앞 뒤에 붙여서 표현
- 문자의 개수 출력 속성 length

### 템플릿 문자열 (ES6/ECMAScript6)
- 백틱 기호`로 문자열+식 전체를 묶고 ${}로 프로그래밍 식을 작성하는 기법
- 템플릿 문자열 적용 전 -> '1+1'은+(1+1)+'입니다';
- 템플릿 문자 적용 후 -> `1+1은 ${1+1}입니다`;

### 함수
- 반복적인 프로그래밍 기능
- 코드 가독성 향상 유지보수 및 확장 유리

### 알고리즘
- 컴퓨터가 수행하는 계산식
- 주요 특성 : 반복
- 매개 변수 (전달 인자)
    - 알고리즘 내 일부 데이터 수정
    - 함수가 반복될 때마다 달라질 수 있는 데이터
    - 함수 알고리즘이 실행될 때 매개변수에 구체적인 값 대입
    - 동일한 함수 안에서 매개변수만 달라짐

### 매개 변수
- 함수 내 전달하는 인자
- 외부에서 함수로 특정 데이터를 전달하는 방법
- 지역 변수 처리
- 함수의 효율 상승
- 생성과 동시에 기본값 설정 가능 (매개변수=기본값)
- `function coffeeFunc1(){}` 함수 생성 -> 실행 결과 항상 같으므로 매개변수 선언 x
- `function coffeeFunc1(data){}` 함수 생성 -> 결과 매번 달라지는 데이터있으므로 매개 변수 생성
- `function coffeeFunc1(data1, data2){}` 함수 생성 -> 결과 매번 달라지는 데이터 2개있으므로 매개 변수 2개 생성
- 함수 생성 후 달라지는 데이터 1개에 맞춘 매개변수 1개 생성 완, 이후 함수 호출하고 매개변수에 대입값 10 입력
- 매개변수 생성 후 매개변수에 값 대입되면 반드시 함수 내부에 매개변수 활용한 결과식 작성
- 매개변수 사용 시 호출할 때 매개변수에 전달할 대입값을 작성 안 해도 함수가 실행되려면 매개변수에 기본값 작성
```
function 함수명(생성매개변수){return실행}
함수명(매개변수 대입값)
```
```
function storyFunc(src){
    let person = ['헨젤', '그레텔'];
    //let src = '빵부스러기';
    // 헨젤과 그레텔이 조약돌 을/를 이용해서 집을 찾아갔습니다.
    // 헨젤과 그레텔이 빵부스러기 을/를 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을/를 이용해서 집을 찾아갔습니다.`);
}
storyFunc('조약돌');
storyFunc('빵 부스러기');
```
```
let x = 1;
let y;
function func1(){ // 함수 대기 상태 func1
    y = 5;
    console.log(x+y);
}
function func2(){ // 함수 대기 상태 func1
    let z = 10;
    func1 (); // func2 함수 대기 안 func1 함수 호출 (func2 대기 상태로 실행 안 됨)
    console.log(x+y+z);
}
func2() // func2 함수 호출 (func2 안 func1도 함께 절차에 맞게 실행)
```
```
function coffeeFunc1(data1=1, data2=0.5){
    let water = data1+'컵 물을 채운다'
    let espresso = `${data2}샷 에스프레소를 넣는다`
    console.log(water, espresso);
}
coffeeFunc1(2, 1)
coffeeFunc1()
```
```
function order1(data3, data4=1){
    const msg = '잔 주문 완료되었습니다.'
    console.log(data3, data4, msg)
}
order1('카페라떼')
order1('아메리카노', 2)
order1('녹차라떼')
order1('아메리카노', 4)
```
```
function order2(data5, data6, data7=1){
    const msg2 = '잔 주문 완료되었습니다.';
    const type = ['따뜻한', '차가운']
    console.log(type[data5], data6, data7, msg2);
}
order2(0, '카페라떼', 2)
order2(1, '아메리카노')
order2(0, '녹차라떼', 2)
order2(1, '아메리카노')
```

### 함수의 종류
- 재사용 함수
    - function 함수명(){재사용문법}
    - 특정 기능을 묶어 재사용하는 문법
- 내장 함수
    - 자바스크립트에서 이미 정의된 함수
    - alert(), prompt()
- 사용자 정의 함수 
    - 개발자가 내장 함수가 아닌 자신이 원하는 기능을 직접 작성해 만들어야 할 때 사용
- function 함수명 (전달인자) {함수 실행 내용}
    - function : 함수 선언 시 함수라는 것을 나타내는 키워드
    - 함수이름 : 개발자가 만든 함수의 의미있는 이름
    - 전달인자
        - 매개 변수, 인수 등 여러가지 용어 사용
        - 함수 내 데이터를 전달하는 변수명
        - 전달 데이터가 많을 때 객체 타입으로 전달
        - 필요할 때만 작성
    - {} : 함수 영역의 시작과 끝을 나타내며 반복적인 실행 내용 작성
    - 생성과 호출이 별개
    - 호출 갯수는 프로그래밍 실행 갯수만큼
    - 함수 내 변수 생성 가능 (지역 변수)
```
let d = 5;
let e = 15;
let f; // 전역 변수 생성 (값 선언 안 된 상태에서는 undefined)
let g;
scopeTest(); //함수호출
// 함수 대기상태에서 실행 안 됨, 호출 해야 실행 가능
console.log(f); // 호출 이후 결과이므로 값 실행 가능
function scopeTest(){ // 함수 호출 전 대기 상태 함수 생성 구조
    f = 25;
    g = 35;
    console.log(d+f);
    console.log(e+g);
}
console.log(g+d);
console.log(d+e); 
```

### 함수 - 리턴값
- 함수 내에서 결과값을 리턴하면 함수 외부에서 리턴 값을 받아 출력 : return number;
- 리턴 뒤 아무값도 입력하지 않으면 값을 돌려주는 뜻이 아닌 함수 종료 의미 : return;
- 함수 내에서 return을 작성하면 내부의 데이터를 함수 외부로 반환해 실행 또는 데이터 전달
```
function plusFunc(num){
    let total = num+1;
    return total; 
    // 리턴으로 실행함수가 아닌 값만 보내면 호출할 때 리턴이 보낸 반환값을 묶는 실행함수 별도 작성
}
plusFunc(2);
console.log(plusFunc(2));
```
```
let dan99 = ''; // 전역변수 (초기값) : 문자 데이터 입력 예정
function dan99Func1(num){
    dan99 = `${num}X1=${num*1} `;
    dan99 += `${num}X2=${num*2} `;
    // dan99 = dan99 + `${num}X2=${num*2} `;
    // 기존 dan99 변수에 우측 데이터 더해서 대입
    dan99 += `${num}X2=${num*3} `;
    return dan99;
}
dan99Func1(9);
console.log(dan99Func1(9))
console.log(dan99Func1(5))
```


### 익명 함수
- 이름이 없는 함수
- 변수 내 function 키워드 지정해 대입하는 함수
- 이벤트 발생 시 호출하는 일회성 함수
- 함수 자체의 이름이 아닌 변수 이름에 의존해서 할당(대입)됨
- 표현식 : let nickName = function () {실행함수};
    - 일반 함수는 세미콜론이 없음
    - 일반 함수 : function greeting(){}
- 익명 함수 호출은 변수명으로 호출
- 함수 선언보다 먼저 호출하면 오류 발생


### 화살표 함수
- es6에서 도입된 간결한 함수 표현식
- 익명 함수일 때 사용 가능
- function 함수 키워드 대신 =>
- 대입연산자(=)와 화살표 함수(=>)를 붙여 사용할 수 없으므로 함수 선연 표시 순서 바꿔서 = () => 로 작성
```
const add = (a,b)=>
    return a+b;
console.log(add(2,3));
```
- 매개 변수 1개일 경우 괄호 생략 가능
```
const greet = name =>
    return `안녕~, ${name}`;
console.log(greet('javascript'));
```
```
const bab2 = (num) => {return'밥'+num+'공기 주세요';}
console.log(bab2(2));
```
- const 변수 = (매개변수) => {return 함수 반환값}
- 익명 함수 호출식 : 변수()



### this
- 함수가 호출될 때 해당 함수를 소유한 객체를 참조하는 키워드
    - 객체 : input -> this는 iput 인식
    - 객체 : button -> this는 button 인식
- 화살표 함수는 상위 스코프의 this 사용
    - 전역 스코프라면 this는 window 객체 인식
    - 따라서 화살표 함수는 this 사용 안 함



### MEMO
- prompt 값은 문자열로 인식
- pronpt로 입력하는 값은 무조건 문자(string) 처리 -> 암시적 형변환

### BOM
- 웹 브라우저에 관련한 기능 제어하게 해주는 객체 집합
- window는 BOM의 최상위 객체
- window 객체명은 대부분 생략 가능
- window 내장 함수
    - window.alert() : 경고 메세지 전달
    - window.prompt() : 문자열 입력받음
    - window.confirm() : 확인, 취소 선택지 제공
    - window.location.href() : 웹브라우조 주소 실행
        - window.location.href="값" 문법 가능
        - 위와 같은 함수 종류에는 assign, href, replace
    - window.print() : 프린터 인쇄 실행
    - window.document.write() : 현재 창 글에 읽기, 쓰기, 삭제 담당
    - window.open() : 새로운 윈도우 창 실행
        - window.open(url, target, features)
- 실행함수가 변수에 대입하는 값이 없거나 일회성인 경우 변수 선언할 필요 없으며 바로 내장함수 작성 가능
- 변수 선언이 필요한 BOM 내장함수 : prompt(), confirm()
- 사용자에 따른 인쇄 제한이 있는 사이트라면 인쇄 내장함수를 변수에 담아야 함



### DOM (doucument Object Model)
- html 태그에서 js로 제어하고 싶은 대상만 변수로 만듦
-----
- 노드(node) : DOM 트리를 구성하는 객체
- html 요소 노드 : html 요소를 가리키는 객체
- 텍스트 노드 : 텍스트를 가리키는 개겣
- 공백 노드 : 탭, 공백, 줄바꿈
-----
- getElementsByTagName : 지정된 태그 이름을 가진 모든 html 요소를 찾아 html 노드로 변환
- 객체 속성 : 객체.style='css속성:값'; 
- getElementsByClassName : 지정된 클래스 이름을 가진 모든 HTML 요소를 찾아 html 노드로 변환
- getElementsById : 지정된 아이디 이름을 가진 모든 html 요소를 찾아 html 노드로 변환
    - id는 선언 없이도 전역변수처럼 사용할 수 있으나 변수명 충돌 문제 등 유지보수 어려워질 수 있으므로 별도의 변수선언 권장
-----
- 자바스크립트 style 속성을 이용한 css는 일반 css 선택자와 다르게 가장 우선순위가 높은 개념으로 적용
    - 적용 후 모습은 웹브라우저 개발자 도구에서 확인
    - css 우선 순위 : 자바스크립트 스타일 속성 > id > class > tag
-----
- **querySelector** : 지정된 아이디, 클래스, 이름을 가진 첫 번째 html 요소를 찾아 html 노드로 변환
    - 여러 개의 노드 리스트를 변환할 수 있고 첫 번째 노드 리스트를 변환할 수 있음
- **querySelectorAll** : 지정된 아이디, 클래스, 태그 이름을 가진 모든 html 요소를 찾아 html 노드로 인덱스와 함께 변환
    - 변수로 만든 DOM 요소가 여러개일 경우 이벤트는 인덱스를 사용해서 하나씩 개별 접근해야 함
```
html
<header style="height:50px"></header>
<main>
	<p class="target1">*기준1*</p>
	<p class="target2">*기준2*</p>
</main>
<footer style="height:50px"></footer>



js dom
const main = document.querySelector('main')
const target1 = document.querySelector('.target1')
const target2 = document.querySelector('.target2')
```
```
const thubimage = document.querySelectorAll('.design a');
console.log(thubimage);
thubimage[0].addEventListener('click',popupBgShow);
thubimage[1].addEventListener('click',popupBgShow);
thubimage[2].addEventListener('click',popupBgShow);
thubimage[3].addEventListener('click',popupBgShow);

```
- 자바스크립트 내의 dom 지정 규칙
    - html 태그의 class, name, id, value 등의 이름 규칙 : 영어소문자_영어소문자
    - 자바스크립트의 함수 및 변수 이름 규칙 : camel 표기법
    - 변수 등록 시 순서
        1) `const 의미 있는 변수명 : document.querySelector('html 요소 또는 클래스, 아이디, 속성 선택자 등')`
        2) `const userId = document.querySelector('li.active');`
        3) `var pwIo = document.querySelector('input[type*=pass]');`
        4) `let genderChk = document.querySelector('input[name=gender]');`

### 형변환 메소드
- 암시적 형변환 : 스크립트가 사용자 동의 없이 자동으로 데이터 형태 결정
    - window.prompt();, input 태그 등
- 명시적 형변환 : 개발자가 직접 데이터 타입을 스크립트로 명령하여 강제로 형변환
    - Number(), String() 등
    - 자동으로 형변환된 데이터 타입이 문자인 경우 숫자로 바꾸고 싶다면 명시적 형변환 중 숫자로 변환해주는 Number() 내장함수 사용
    - Number(숫자로 변환하고 싶은 데이터 또는 함수)
    ```
    const age = Number(prompt('당신의 나이는?'));
// 프로그래밍 동작 순서
// 1 prompt('당신의 나이는') 사용자가 입력한 값을 문자로 자동 변환
// 2 Number() : prompt가 문자로 변환한 값을 숫자로 명시적 변환
// 3 age = 변수 age에 숫자로 변환한 값을 대입
console.log(`올해 당신의 나이는 ${age}살입니다.`);
console.log(`내년 당신의 나이는 ${age+1}살입니다.`);
    ```

### 이벤트
- 이벤트 : 사용자의 동작에 따라 웹/앱 특정 결과 실행하는 행위
    - ex) 이벤트 앞에 on을 붙이면 이벤트 리스너가 됨 (onclick)
    - 리스너(listener) : 특정 이벤트 발생했을 때 실행할 함수

### 마우스 이벤트
- click : 특정 요소에 마우스로 클릭했을 때 이벤트 발생
- mouseover : 특정 요소에 마우스 포인터 올라갔을 때 이벤트 발생
- mouseout : 특정 요소에서 마우스 포인터가 벗어나는 경우 이벤트 발생
- mouseup : 특정 요소를 마우스로 눌렀다가 떼어냈을 경우 이벤트 발생
- mousemove : 특정 요소에서 마우스 포인터를 움직였을 때 이벤트 발생
```
<li><button type="button" id="payBtn" onmouseover="userPayMsg();">결제하기</button></li>


const payBtn = document.querySelector('#payBtn');
console.log(payBtn);
function userPayMsg(){
    return console.log('결제 완료되었습니다.')
}

const idBtn = document.querySelector('#idBtn');
console.log(idBtn);
function userIdCk(){
    return console.log('아이디가 중복되지 않습니다. 사용하셔도 좋습니다.')
}
```



### 키보드 이벤트
- keydown : 특정 키를 눌렀을 경우 이벤트 발생
- keyup : 특정 키를 눌렀다 떼었을 경우 이벤트 발생
- keypress : 특정 키를 누른 상태의 경우 이벤트 발생
```
<li><input type="password" placeholder="비밀번호를 입력해주세요." name="user_pw" onkeyup="userPw12Msg()"></li>


// 키보드이벤트
// 리뷰 입력창에 키보드 눌렀을 때 [50자 이상 입력하세요.] 출력 알고리즘
const userReviewInput = document.querySelector('input[name*=review]');
console.log(userReviewInput);
function userReview50Write(){
    return console.log('50자 이상 입력하세요.');
}

// id 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 [아이디는 영어로 시작해야 합니다.] 출력 알고리즘
const userIdInput = document.querySelector('input[name*=id]');
console.log(userIdInput);
function userIdEngMsg(){
    return console.log('아이디는 영어로 시작해야 합니다.')
}

// pw 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 [비밀번호는 특수문자 포함 12자 이상 입력하세요.]
const userPwInput = document.querySelector('input[name*=pw]');
console.log(userPwInput);
function userPw12Msg(){
    return console.log('비밀번호는 특수문자 포함 12자 이상 입력하세요.')
}
```

### 기타 이벤트
- focus : 특정 요소에 포커스를 주었을 경우 이벤트 발생
- blur : 특정 요소에 포커스가 벗어났을 경우 이벤트 발생
- submit : submit 버튼 클릭했을 때 이벤트 발생
- reset : reset 버튼 클릭했을 때 이벤트 발생
- load : 페이지 로딩이 완료되었을 경우 이벤트 발생
```
<li><input type="number" name="product_num" value="1" onfocus="productNumFocusYellow()" onblur="productNumBlurWhite()"></li>



userIdInput.style.outline='none';
function userIdFocusGreen(){
    return userIdInput.style.border = '3px solid green';
}
function userIdBlurGray(){
    return userIdInput.style.border = '1px solid gray'
}

//productNumInput.style.outline='none';
const productNumInput = document.querySelector('input[name=product_num]');
console.log(productNumInput);
function productNumFocusYellow(){
    return productNumInput.style.backgroundColor = 'yellow';
}
function productNumBlurWhite(){
    return productNumInput.style.backgroundColor = 'white';
}
```
```
// 문서가 로딩되었을 때 실행 함수
function loadMsg(){
    return alert('문서 로딩 완료')
}
```



### 이벤트 객체
- 사용자가 dom과 관련된 이벤트 발생 시 이벤트 관련 정보가 생성되는 것
    - 예) 마우스 이벤트 발생 시 마우스 위치 정보, 키보드 이벤트 발생 시 어떤 키를 눌렀는지에 대한 정보
- **이벤트 객체의 자주 사용되는 속성 및 함수**
    - currentTarget : 현재 이벤트 처리 중 요소, 이벤트 핸들러 내부 this와 동일
    - **perverntDefaylt()** : 이벤트의 기본 동작 취소
    - target : 이벤트 실제 요소
    - type : 발생한 이벤트 타입
    - clientX, clientY : 마우스 이벤트 발생 시 클릭한 커서의 상대 좌표
- 요소 속성 값 읽고 쓰기
    - 요소명.속성명
    - <a href="https://naver.com" id="link">naver</a>
    - tag.href, tag.id -> 존재하지 않을 경우 Error 출력


### 콜백 함수
- 특정 이벤트 발생 시 해당 이벤트 처리 루틴
- DOM 요소 .addEventListener(이벤트명, 실행함수명, 옵션)
    - 이벤트명 : 자바 스크립트에서 발생하는 이벤트명
    - 실행함수명 : 이벤트 발생 시 실행할 함수명
    - 옵션 : 생략 가능, 자식과 부모 요소에서 발생하는 버블링 제어 위함
```
function first(){
    alert('message');
}
eventBtn.addEventListener('click',first);
```
- addEnventListener 이벤트 작성 시 on 없이 이벤트만 작성
```
<dd><a href="#" class="google_join">구글 아이디로 가입하기</a></dd>

//객->이->함
const googleJoin = document.querySelector('.google_join');
console.log(googleJoin);
// 자바스크립트에 작성하는 객체 이벤트 문법
// 객체.addEventListener('이벤트', 콜백함수);
// addEnventListener 이벤트 작성 시 on 없이 이벤트만 작성
googleJoin.addEventListener('click',googleGo);
function googleGo(){
    return window.open('https://accounts.google.com','_blank');
}

const naverJoin = document.querySelector('.naver_join');
console.log(naverJoin);
naverJoin.addEventListener('click',naverGo);
function naverGo(){
    return window.open('https://nid.naver.com/nidlogin.login','_black');
}

const kakaoJoin = document.querySelector('.kakao_join');
kakaoJoin.addEventListener('click',kakaoGo);
function kakaoGo(){
    return window.open('https://accounts.kakao.com','_blank');
}
```
```
// 현재 페이지 변경 방법
// 1 객체
const fileLink = document.querySelector('.file_link');
console.log(fileLink);
// 2 이벤트
fileLink.addEventListener('click',link0520);
// 3 콜백함수
// js에서 상대 경로 연결 시 js 파일 기준이 아닌 js가 연결된 html 파일이 저장된 위치를 기준으로 상대 경로 작성
function link0520(){
    return window.location.href='bom1.html';
}

const indexLink = document.querySelector('.index_link');
console.log(indexLink);
indexLink.addEventListener('click',indexLinkMove);
function indexLinkMove(){
    return window.location.href='index.html';
}

const readmeLink = document.querySelector('.readme_link');
console.log(readmeLink);
readmeLink.addEventListener('click',readmeLinkMove);
function readmeLinkMove(){
    return window.location.href='../README.md';
}
```
```
// 상품 수량 증가 알고리즘
const numInput = document.querySelector('input[name=num]');
const numBtn = document.querySelector('#num_btn');
console.log(numInput, numBtn);
//1 수량 초기값 1
numInput.value = 1; // 초기값이므로 이벤트없이 바로 작성
//2 + 버튼 클릭시
numBtn.addEventListener('click',numPlus);
function numPlus(){
    //기존 인풋 값이 항상 1 증가
    return numInput.value = ++numInput.value;
}
```


### MEMO
- js에서 상대 경로 연결 시 js 파일 기준이 아닌 js가 연결된 html 파일이 저장된 위치를 기준으로 상대 경로 작성


### MEMO
- 링크 클릭 시 같은 화면에서 이동 (location)
```
const profileDOM = document.querySelector ('.profile a')
console.log(profileDOM);
profileDOM.addEventListener('click',profileDOMGo);
function profileDOMGo(){
    return window.location.href='insta_profile.html';
}
```
- 더블 클릭 시 동적 변화 (dblclick)
- 사진 두 번 터치 시 좋아요 자동 등록ㅇ
```
const photo = document.querySelector('#photo_wrap');
const likeImg = document.querySelector('.like img')
console.log(photo, likeImg);
console.log(likeImg.src);
//객체.속성 -> 속성 읽기
// 객체.속성=값 -> 속성 값 변경
photo.addEventListener('dblclick',likeOn);
function likeOn(){
    //console.log('test');
    return likeImg.src='images/icons/like_on.png';
}
```
- 좋아요 등록
```
위의 likeimg 활용
likeImg.addEventListener('click',likeOn);
```
- **a 태그로 클릭 시 새로고침 되어 스크롤이 위로 올라가는 문제 해결을 위한 방법**
    - 콜백함수 호출이 아닌 익명 함수 또는 화살표 함수 사용
    - 익명 함수 또는 화살표 함수로 작성 시 이벤트 앞 객체정보가 함수의 매개변수로 자동 대입
        - 매개변수에 `e` 작성 후 함수 내에 `e.preverntDeFault()` 작성
        - 예) 익명함수 : `a 객체.addEnventListener('click,function(e){e.preventDeFault();});`
        - 예2) 화살표 함수 : `a객체.addEventListener('click',(e)=>e.preventDeFault())`
    - 매개변수가 받은 정보를 확인하려면 매개변수에 변수명 작성하고 console.log()로 확인
```
likeImg.addEventListener('click',function(e){
    //console.log(e);
    e.preventDefault(); // 태그의 동적 기능 취소 (=a태그 새로고침 취소)
    likeOn();
});
```



### 논리데이터 Boolean
- 참 또는 거짓 두 가지 값 중 하나의 데이터 형식
- 조건문, 논리연산자, 논리적 판단 등에 사용
- False로 평가되는 값 : falsy
    - 참으로 평가되는 값 : 거짓을 제외한 나머지, 빈 배열, 빈 객체는 true []//빈배열, {}// 빈객체
- True로 평가되는 값 : Truthy
    - 거짓으로 평가되는 값 : false, null, undefined, Nan, 0, "" 빈 문자열
- Boolean() : 불린 함수 사용했을 때 falsy 값들은 false로, Truthy 값들은 true로 리턴


### 비교 연산자
- 두 값 이상을비교하여 그 괄과를 논리 데이터로 변환하는 연산자
    - 일치 연산자
        - x==y : x와 y의 값이 같다.
            - ex) 5=="5" -> true
        - x=== : x와 y의 값과 데이터 타입이 모두 같다. (엄격한 비교 연산자)
            - ex) 5==="5" -> false
    - 부등 연산자
        - x!=y : x와 y의 값이 같지 않다.
            - ex) 5!="5" -> true
        - x!==y : x와 y의 값과 데이터 타입이 모두 다르다. (엄격한 비교 연산자)
            - ex) 5!=="5" -> true
    -----
    - x < y : x가 y보다 작다.
        - ex) 3 < 5 -> true
    - x > y : x가 y보다 크다.
        - ex) 7 > 10 -> false
    - x >= y : x가 y보다 크거나 같다.
        - ex) 10 >= 10 -> true
    - x <= y : x가 y보다 작거나 같다.
        - ex) 10 <= 10 -> true
    -----


### 논리 연산자
- AND(&&) : 양쪽 피연산자가 모두 참일 때 결과는 참
    - ex) x==y && == z
        - true && true   // true (두 값이 모두 true니까 true)
        - false && true  // false (하나는 false라서 false)
        - true && false  // false (하나는 false라서 false)
        - false && false // false (둘 다 false니까 false)
- OR(||) : 양쪽 피연산자 중 하나라도 참이면 결과가 참
    - ex) x==y || y==z
        - true || true   // true (하나라도 true니까 true)
        - false || true  // true (하나가 true니까 true)
        - true || false  // true (하나가 true니까 true)
        - false || false // false (둘 다 false라서 false)
- NOT(!) : 피연산자의 논리 값을 반전, 참이면 거짓을 반환
    - ex) x!
        - !true   // false (true를 반대로 바꿔서 false)
        - !false  // true  (false를 반대로 바꿔서 true)
- 자바 스크립트의 논리연산자는 무조건 결과값으로 true, false가 못 나오는 상황이라면 양쪽 피연산자 값들 중 한 쪽을 선택하여 출력하는 방식으로 동작


### 조건문
- 조건문 == 분기문 : 어떤 특정 조건에 따라서 수행 루트를 분기하여 처리하는 문법
- 조건 if문 : 주어진 조건에 따라 참/거짓으로 나뉠 때 참에 댜한 결과 실행
- if문 사용 방법 : `if(수행조건){수행하고 싶은 일}`
    1) if문 괄호 안에 수행조건 작성
    2) 수행조건을 만족하면 그 결과를 true로 리턴
    3) 수행하고 싶은 일 수행
    4) 수행 조건을 만족하지 않으면 false를 리턴


```
/* 관리자가 동일한 아이디를 사용할 수 없는 아이디 중복 확인 알고리즘 */
    const userid = document.querySelector('#join input[name=user_id]');
    const idOverlapBtn = document.querySelector('#join #id_overlap_btn');
    const overlapMsg = document.querySelector ('#join .overlap_error_msg');
    console.log(userid,idOverlapBtn,overlapMsg);

    idOverlapBtn.addEventListener('click',idChk);
    function idChk(){
        console.log(userid.value);
        if(userid != 'admin'){
            return overlapMsg.textContent =  '이미 사용 중인 아이디입니다. 다른 아이디를 입력하세요.'
        }
    }

    function idChk(){
        console.log(userid.value);
        if(userid.value == ''){
            return overlapMsg.textContent =  '아이디는 1~12자 사이로 입력해주세요.'
        }
    }
```
- if 동시 동작 x 순차적으로 동작