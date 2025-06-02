const aniImag = document.querySelector('main > img');
const topBtn = document.querySelector('.control .top');
const leftBtn = document.querySelector('.control .left');
const downBtn = document.querySelector('.control .down');
const rightBtn = document.querySelector('.control .right');
const inputMove = document.querySelector('.io input');
let currentY = 0; // 이미지의 y 초기 좌표
let currentX = 0; // 이미지의 x 초기 좌표
console.log(aniImag,topBtn,leftBtn,downBtn,rightBtn,inputMove);
// aniImag.style.transform = 'translate(10px, 10px)';
// 위 버튼 클릭 시 위로 20픽셀 이동
topBtn.addEventListener('click',topFunc);
function topFunc(){
    currentY -= 20;
    return aniImag.style.transform = `translate(${currentX}px, ${currentY}px)`;
}
// 아래 버튼 클릭 시 아래로 20픽셀 이동 
downBtn.addEventListener('click',downFunc);
function downFunc(){
    currentY += 20;
    return aniImag.style.transform = `translate(${currentX}px, ${currentY}px)`;
}

// 좌우 
leftBtn.addEventListener('click',leftFunc);
function leftFunc(){
    currentX -= 20;
    return aniImag.style.transform = `translate(${currentX}px, ${currentY}px)`;
}
rightBtn.addEventListener('click',rightFunc);
function rightFunc(){
    currentX += 20;
    return aniImag.style.transform = `translate(${currentX}px, ${currentY}px)`;
}

// input 입력창에 허용키를 입력하고 엔터 누르면 캐릭터가 이동하는 알고리즘
// 허용키 : 좌우상하 키
inputMove.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        // 왼쪽 입력 후 엔터 실행 시 이미지가 왼쪽 20px 이동
        if(inputMove.value === '왼쪽'){
            currentX -= 20;
            inputMoveFunc()
        }else if(inputMove.value === '오른쪽'){//조건 1거짓일 때 검사하는 조건 2
            currentX += 20;
            inputMoveFunc()
        }else if(inputMove.value === '위'){//조건 1, 2 거짓일 때 검사하는 조건 3
            currentY -= 20;
            inputMoveFunc()
        }else{// 조건 1 2 3 거짓이면 자동 실행 결과
            currentY += 20;
            inputMoveFunc()
        }
    }
})

function inputMoveFunc(){
    aniImag.style.transform = `translate(${currentX}px, ${currentY}px)`;
    return inputMove.value = '';
}