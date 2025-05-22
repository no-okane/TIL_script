// 인스타 알고리즘
// 1 프로필 클릭 시 개인 프로필 페이지 이동 ㅇ - 페이지 제작 필요

const profileDOM = document.querySelector ('.profile a');
console.log(profileDOM);
profileDOM.addEventListener('click',profileDOMGo);
function profileDOMGo(){
    return window.location.href='insta_profile.html';
}
// -> 별도의 도엊ㄱ기능 없이 단순한 링크만 있는 경우는 js없이 a태그에 링크 걺
// -> 동적 기능 예) 해외 IP차단 접속 차단, 동일 IP접속 차단, 성인 사이트 접속 인증, 로그인에 따른 접속 가능 페이지일 경우 로그인 유무 확인 등

// 2 우측 더보기 클릭 시 저장~신고 기능 존재 ㅇ 탭 제작 필요
// 3 사진 한 번 터치 시 반응 없음 x
// 4 사진 두 번 터치 시 좋아요 자동 등록ㅇ

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

// 5 좋아요 아이콘 한 번 터치 시 좋아요, 다시 터치시 좋아요 해제 반복ㅇ 다시 터치시 좋아요 해제 반복 (x 조건문 공부 필요)
// -> 이미지 더블클릭 하기 전
// -> 위의 likeimg 활용
// likeImg.addEventListener('click',likeOn);
// -> likeImg 클릭 시 실행되는 콜백 함수를 likeImg 객체가 a 태그로 클릭 시 새로고침 되어 스크롤이 위로 올라가는 문제 해결을 위한 방법
// -> 콜백함수 호출이 아닌 익명 함수 또는 화살표 함수 사용
// -> 익명 함수 또는 화살표 함수로 작성 시 이벤트 앞 객체정보가 함수의 매개변수로 자동 대입
// -> 매개변수가 받은 정보를 확인하려면 매개변수에 변수명 작성하고 console.log()로 확인
likeImg.addEventListener('click',function(){});

// 6 댓글 아이콘 터치 시 댓글 입력창 실행, 실행화면에서 바깥쪽 영역 터치 댓글 입력창 닫기 ㅇ - 페이지 제작 필요, 바깥쪽 영역 터치 시 닫힘 ㅇ
// 7 댓글 아이콘 터치 시 공유 가능 계정들 표시된 창 실행 바깥쪽 영역 터치 시 닫힘 
// 8 즐겨찾기 아이콘 터치 시 즐겨찾기 자동 저장(x db필요), 컬렉션 선택 화면 출력 바깥쪽 영역 터치 시 닫힘ㅇ
// 9 글 1줄 날짜만 미리 표시, 글 터치 시 전체내용 (나머지 글 줄과 해시태그 포함) 펼치기ㅇ
const storyDOM = document.querySelector('#contents_wrap .story');
const dayagoDOM = document.querySelector('#contents_wrap .dayago');
const hashtagDOM = document.querySelector ('#contents_wrap .tag');

console.log(storyDOM, dayagoDOM, hashtagDOM);
hashtagDOM.style.display='none';
// -> 함수 바로 생성한 이유 : 반복이 아니고 즉시 실행하기 위해

// 글 클릭 시 태그 표시
storyDOM.addEventListener('click',storyDOMShow);
function storyDOMShow (){
    return hashtagDOM.style.display='block';
}

// 10 해시태그 터치 시 해당 태그 사용 게시글 페이지 이동ㅇ
hashtagDOM.addEventListener('click',hashtagDOMGo);
function hashtagDOMGo(){
    return window.location.href='insta_tag.html';
}


// 11 날짜 기능 없음x js

// 추가 페이지 목록
// 추가 페이지 목록 - 프로필 페이지(인스타 프로필), 저장~신구 등 기능, 댓글 입력창 공유 가능 계정들 표시, 컬렉션 선택 화면, 태그 사용 게시글