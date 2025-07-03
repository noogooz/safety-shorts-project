// HTML 요소들을 미리 찾아 변수에 저장
const sceneContainer = document.getElementById('scene-container');
const caption = document.getElementById('caption');
// const apple = document.getElementById('apple'); // 더 이상 필요 없음
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');

// 기존의 모든 타이머 ID를 저장할 배열
let animationTimers = []; 
let progressInterval;

// 애니메이션 장면 전환을 관리하는 함수
function setScene(sceneName) {
    sceneContainer.className = sceneName;
}

function updateCaption(text) {
    caption.innerHTML = text;
}

// ======================================================
// 전체 애니메이션을 재생하는 메인 함수
// ======================================================
function startAnimation() {
    // 1. 기존 애니메이션/프로그레스바 초기화
    animationTimers.forEach(timer => clearTimeout(timer));
    animationTimers = [];
    clearInterval(progressInterval);
    progressBar.style.width = '0%';

    // 2. 프로그레스 바 작동 시작 (27초 기준)
    let totalTime = 27000;
    let startTime = Date.now();
    progressInterval = setInterval(() => {
        let elapsedTime = Date.now() - startTime;
        let progress = (elapsedTime / totalTime) * 100;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 100);

    // 3. 애니메이션 타임라인 시작 (이전과 동일)
    setScene('scene-0');
    updateCaption('🍎백설공주가 사과를 먹으면…?');

    setTimeout(() => {
        setScene('scene-1');
        updateCaption('');
    }, 3000);

    setTimeout(() => {
        setScene('scene-2');
        updateCaption('😱 앗! 목에 걸렸어요!');
    }, 4000);

    setTimeout(() => {
        setScene('scene-3');
        updateCaption('이럴 땐! 하임리히법!');
    }, 12000);

    setTimeout(() => {
        setScene('scene-4');
        updateCaption('1. 명치와 배꼽 사이를<br>2. 주먹으로 감싸고<br>3. 위로 강하게 밀어올리기!');
    }, 15000);

    setTimeout(() => {
        setScene('scene-5');
        updateCaption('휴, 살았다!');
    }, 24000);

    setTimeout(() => {
        setScene('scene-6');
        updateCaption('음식은 꼭!<br>작게 잘라 천천히!');
    }, 27000);
}

// ======================================================
// 이벤트 리스너 설정
// ======================================================

restartBtn.addEventListener('click', startAnimation);
window.onload = startAnimation;