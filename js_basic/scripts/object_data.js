/* 2025-05-15 배열======================================================== */
// const yoil = ['월','화','수'];
const yoil = new Array('월','화','수','목','금','토','일');
//console.log(yoil[0]);
//console.log(yoil[1]);
//console.log(yoil[2]);


/* 색상 배열======================================================== */
const colorArray = ['빨','주','노','파','보','검','초'];
console.log(colorArray[0]+colorArray[2]+colorArray[4]+colorArray[6]);
console.log(`제가 좋아하는 색상은 ${colorArray[1]}, ${colorArray[3]},${colorArray[4]}색입니다.`);



/* 과일 역순 출력======================================================== */
const fruitArray = ['바나나','딸기','망고','사과','귤'];
console.log(fruitArray[4]+fruitArray[3]+fruitArray[2]+fruitArray[1]+fruitArray[0]);


/* 요일 및 날씨 카드 배열 활용 문자 출력======================================================== */
const weatherCard = ['비','눈','맑음','흐림'];
console.log(`${yoil[3]}요일 날씨 : ${weatherCard[0]}`);
console.log(`${yoil[4]}요일 날씨 : ${weatherCard[2]}`);



/* 객체 및 배열======================================================== */
const movieInfo = {
    name:'미션 임파서블',
    director:'크리스토퍼 맥쿼리',
    genre:'액션',
    rating:169,
    actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
    releaseDate:'2025.05.17',
    age:15,
    story:'전 세계 국가와 조직의 기능이 마비되고...',
};

const movieInfo_v2 = {
    name:'극장판 닌자보이 란타로: 도쿠타케 닌자대 최강의 군사',
    director:'후지모리 마사야',
    genre:'애니메이션',
    rating:90,
    actor:['타카야마 미나미','타나카 마유미'],
    releaseDate:'2025.05.14',
    age:'all',
    story:'닌자학교 선생님인 도이 한스케가 타소가레도키성의 닌자, 손나몬의 도전장을 받고 결투을 하러 간 후 실종된다.',
};

// 동일한 분류의 객체가 많을 경우 묶는 방법
const movieAll = [
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
console.log(movieAll[0].name+movieAll[0].releaseDate+movieAll[0].story);
console.log(`감독 : ${movieAll[0].director}`);
console.log(`장르 : ${movieAll[0].genre} / ${movieAll[0].rating}분`);
console.log(`등급 : ${movieAll[0].age}세 이상 관람가`);


/* 산술 연산자======================================================== */
const greeting = 'hello';
const lang = ['figma','html','css'];
console.log(greeting+lang[0]);
console.log(greeting+lang[1]);
console.log(greeting+lang[2]);
const num1 = 1;
const num7 = 7;
const global = 'world';
console.log(num1+num7);
console.log((num1+num7)+global);


/* 빼기, 곱하기 나누기 연산은 숫자가 문자로 따옴표 묶여 있을 시 자동으로 숫자로 변환 */
const data1 = 1;
const data7 = '7';
console.log(data1+data7); //1, 7
console.log(data1-data7); //-6
console.log(data1*data7); //7
console.log(data1/data7); //0.14
console.log((data1-data7)+data7); //-6, 7
console.log((data1-data7)*data7); //-42
console.log((data1-data7)-data7); //-13
console.log((data1-data7)%data7); //-6
console.log((data1-data7)**data7); //-2799360
console.log(typeof (data1+data7));
console.log(typeof (data1-data7));