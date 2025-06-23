// bom (browser object model) 내장함수
//const msg1 = window.alert('잠시 기다려주세요.');
//const msg2 = window.alert('잘못된 접근');
//console.log(msg1);
//const userAge = window.prompt ('나이를 입력하세요.');
//console.log(userAge);
//const userPrint = window.confirm('인쇄 하시겠습니까?');
//console.log(userPrint);
//const userInfo = window.open('https://google.com','_blank')
//const userWrite = window.document.write('hello js')
//window.document.write('안녕하세요 자바스크립트')
//window.print();
// 사용자에 따른 인쇄 제한이 있는 사이트라면 인쇄 내장함수를 변수에 담아야 함

//dom html node========================================
const wrapId = window.document.getElementById('wrap')
const pTag = window.document.getElementsByTagName('p');
const h1Tag = document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group');
const liCls = document.getElementsByClassName('list');
const activeCls = document.getElementsByClassName('active');
const dldefine = document.getElementsByClassName('define')
const dtid = document.getElementById('title');
const dtTag = document.getElementsByTagName('dt')[1];
const ddcontents = document.getElementsByClassName('contents')

console.log(wrapId);
console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(dtid);

// DOM 객체 속성========================================
// 객체.style='css속성:값'; 
wrapId.style='padding:100px';
pTag[0].style='background-color:yellow';
pTag[1].style='background-color:pink';
func.style='color:red'
ulCls[0].style='border:2px solid red';
liCls[0].style='border-bottom : 1px solid black';
liCls[1].style='border-bottom : 1px solid black';
liCls[2].style='border-bottom : 1px solid black';
liCls[3].style='border-bottom : 1px solid black';
activeCls[0].style='color:orange';
activeCls[1].style='color:aqua';
dldefine[0].style='background-color:lime';
dtid.style='background-color:orange';
ddcontents[0].style='background-color:pink';
dtTag.style='background-color:red';
ddcontents[1].style='background-color:skyblue';
// 위와 같이 style 속성을 이용한 css는 일반 css 선택자와 다르게 가장 우선순위가 높은 개념으로 적용
// 적용 후 모습은 웹브라우저 개발자 도구에서 확인
// css 우선 순위 : 자바스크립트 스탕리 속성 > id > class > tag

//=====================================================
//ES6 querySelector 이용 DOM선택하기
const orderOl = document.querySelector('.order');
console.log(orderOl);

const orderLi = document.querySelectorAll('.order li')
console.log(orderLi);
orderLi[0].style = 'font-size:2rem';

const orderToday = document.querySelector('#today')
console.log(orderToday);
orderToday.style='font-weight:700'

const orderItem = document.querySelector('.order .item');
console.log(orderItem);
orderItem.style='color:green';


//=====================================================
const navTag = document.querySelector('nav');
console.log(navTag);
navTag.style='background-color:yellow';


const gnbUl = document.querySelector('nav .gnb');
console.log(gnbUl);
gnbUl.style='background-color:aqua';

const gnbLi = document.querySelectorAll('.gnb > li');
console.log(gnbLi);
gnbLi[0].style='border:1px solid red';
gnbLi[1].style='border:1px solid red';

const navA = document.querySelectorAll('nav a');
console.log(navA);
navA[0].style='color:#000'
navA[1].style='color:#000'
navA[2].style='color:#000'
navA[3].style='color:#000'

const lnbUl = document.querySelector('.lnb');
console.log(lnbUl);
//lnbUl.style='background-color:lime';
// 객체.속성='값';
// 객체.속성.속성='값';
lnbUl.style.backgroundColor='lime';
lnbUl.style.padding='30px';

const lnbLi = document.querySelectorAll('.lnb > li');
console.log(lnbLi);
lnbLi[0].style='border:2px solid red';
lnbLi[1].style='border:2px solid red';
lnbLi[1].style.padding='20px';
lnbLi[1].style.backgroundColor='pink';

console.log('========================================================================');
let a = 10;
let b = "10";
console.log(a, typeof a); // 10 Number
console.log(b, typeof b); // 10 String
// let age = prompt('당신의 나이는?')
// alert(typeof age);
// pronpt로 입력하는 값은 무조건 문자(string) 처리  -> 암시적 형변환
// 자동으로 형변환된 데이터 타입이 문자인 경우 숫자로 바꾸고 싶다면 명시적 형변환 중 숫자로 변환해주는 Number() 내장함수 사용
// Number(숫자로 변환하고 싶은 데이터 또는 함수)
//const age = prompt('당신의 나이는?');
//const age = Number(prompt('당신의 나이는?'));
// 프로그래밍 동작 순서
// 1 prompt('당신의 나이는') 사용자가 입력한 값을 문자로 자동 변환
// 2 Number() : prompt가 문자로 변환한 값을 숫자로 명시적 변환
// 3 age = 변수 age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${age}살입니다.`);
//console.log(`내년 당신의 나이는 ${Number(age)+1}살입니다.`);


console.log('========================================================================');
// 상품 1개 가격 기준 15700원
// 현재 이벤트 중 1+1
// 1 사용자가 구입할 물건 갯수 정하기
// 2 갯수에 따라 최종 가격
// 구입할 물건은 ?개이고 이벤트 상품 ?개가 추가됩니다. 총 결제 금액은 ?원입니다.

let price = 15700;
const productQa = Number(prompt('구입할 물건 갯수를 입력하세요.'));
const eventNum = productQa; // 이벤트 증정 갯수
const total = productQa*price; // 총 가격

//console.log(`구입할 물건은 총 ${productQa}개이고 이벤트 상품 ${productQa}개가 추가됩니다. 총 결제 금액은 ${price*productQa}원입니다.`)
console.log(`구입할 물건은 총 ${productQa}개이고 이벤트 상품 ${eventNum}개가 추가됩니다. 총 결제 금액은 ${total}원입니다.`);

