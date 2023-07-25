const tetrisView = document.querySelector(".tetris__play .view ul");
const scoreDisplay = document.querySelector(".tetris__score span");
const tetrisStart = document.querySelector(".tetris__start");
const tetrisTitle = document.querySelector(".tetris__header h1");
const tetrisPlay = document.querySelector(".tetris__play");
const tetrisText = document.querySelector(".tetris__text");
const tetrisMethod = document.querySelector(".tetris__method");
const tetrisTime = document.querySelector(".tetris__time span");
const tetrisResult = document.querySelector(".tetris__result");
const resultTime = document.querySelector(".tetris__result .tetris__time span");
const resultScore = document.querySelector(
    ".tetris__result .tetris__score span"
);

// 음악
let tetrisMusic = new Audio(
    "https://dongjin6539.github.io/web2023/javascript/game/audio/tetrisMusic.mp3"
);
let tetrisRemove = new Audio(
    "https://dongjin6539.github.io/web2023/javascript/game/audio/tetrisRemove.mp3"
);
let tetrisDrop = new Audio(
    "https://dongjin6539.github.io/web2023/javascript/game/audio/tetrisDrop.mp3"
);
let tetrisGameOver = new Audio(
    "https://dongjin6539.github.io/web2023/javascript/game/audio/tetrisGameOver.mp3"
);

const line_rows = 20; //가로
const line_cols = 12; //세로
const blocks = {
    Tmino: [
        [
            [2, 1],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [1, 2],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [1, 2],
            [0, 1],
            [2, 1],
            [1, 1],
        ],
        [
            [1, 2],
            [1, 0],
            [2, 1],
            [1, 1],
        ],
    ],
    Imino: [
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
        ],
    ],
    Omino: [
        [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
        ],
        [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
        ],
        [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
        ],
        [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
        ],
    ],
    Zmino: [
        [
            [0, 0],
            [1, 0],
            [1, 1],
            [2, 1],
        ],
        [
            [1, 0],
            [0, 1],
            [1, 1],
            [0, 2],
        ],
        [
            [0, 0],
            [1, 0],
            [1, 1],
            [2, 1],
        ],
        [
            [1, 0],
            [0, 1],
            [1, 1],
            [0, 2],
        ],
    ],
    Smino: [
        [
            [1, 0],
            [2, 0],
            [1, 1],
            [0, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 2],
        ],
        [
            [1, 0],
            [2, 0],
            [1, 1],
            [0, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 2],
        ],
    ],
    Jmino: [
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [2, 1],
        ],
        [
            [1, 0],
            [2, 0],
            [1, 1],
            [1, 2],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [2, 1],
        ],
        [
            [1, 0],
            [0, 2],
            [1, 1],
            [1, 2],
        ],
    ],
    Lmino: [
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [0, 1],
        ],
        [
            [1, 0],
            [2, 2],
            [1, 1],
            [1, 2],
        ],
        [
            [2, 0],
            [0, 1],
            [1, 1],
            [2, 1],
        ],
        [
            [1, 0],
            [0, 0],
            [1, 1],
            [1, 2],
        ],
    ],
};

let score = 0;
let time = 0;
let duration = 500;
let downInterval;
let tempMovingItem;
let stopGame = false;
//블록의 정보 변수
const movingItem = {
    type: "",
    direction: 0,
    top: 0,
    left: 4,
};

/**  시작하기 */
function init() {
    tempMovingItem = { ...movingItem };

    for (let i = 0; i < line_rows; i++) {
        newLine(); //라인만들기
    }

    // generateNewBlock(); //다음 블럭 생성
    // renderBlocks(); //블록 만들기
}

// 라인만들기
function newLine() {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (let j = 0; j < line_cols; j++) {
        const subLi = document.createElement("li");
        ul.prepend(subLi);
    }
    li.prepend(ul);
    tetrisView.prepend(li);
}

// 블록 만들기
function renderBlocks(moveType) {
    if (!stopGame) {
        // console.log(movingItem.type);
        // console.log(movingItem.direction);
        // console.log(movingItem.top);
        // console.log(movingItem.left);
        // const type = movingItem.type;
        // const direction = movingItem.direction;
        // const top = movingItem.top;
        // const left = movingItem.left;
        const { type, direction, top, left } = tempMovingItem;
        // console.log(type,direction,top,left)
        const movingBlocks = document.querySelectorAll(".moving");
        movingBlocks.forEach((moving) => {
            moving.classList.remove(type, "moving");
        });
        blocks[type][direction].some((block) => {
            const x = block[0] + left;
            const y = block[1] + top;
            const target = tetrisView.childNodes[y]
                ? tetrisView.childNodes[y].childNodes[0].childNodes[x]
                : null;
            const isAvailable = checkEmpty(target);
            if (isAvailable) {
                target.classList.add(type, "moving");
            } else {
                tempMovingItem = { ...movingItem };
                setTimeout(() => {
                    renderBlocks();
                    if (moveType === "top") {
                        seizeBlock();
                    }
                }, 1);
                return true;
            }
        });
        movingItem.left = left;
        movingItem.top = top;
        movingItem.direction = direction;
    }
}

function seizeBlock() {
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach((moving) => {
        moving.classList.remove("moving");
        moving.classList.add("seized");
    });
    tetrisDrop.play();
    checkMatch();
}

// 줄 제거하기
function checkMatch() {
    const childNodes = tetrisView.childNodes;

    childNodes[0].children[0].childNodes.forEach((li) => {
        if (li.classList.contains("seized")) {
            stopGame = true;
            tetrisGameOver.play();
            tetrisGameover();
        }
    });

    childNodes.forEach((child) => {
        let matched = true;
        child.children[0].childNodes.forEach((li) => {
            if (!li.classList.contains("seized")) {
                matched = false;
            }
        });

        if (matched) {
            tetrisRemove.play();
            child.remove();
            newLine();
            score += 10;
            scoreDisplay.innerText = score;

            // 속도 조절
            switch (score) {
                case 50:
                    duration = 250;
                    break;
                case 100:
                    duration = 150;
                    break;
                case 150:
                    duration = 50;
                    break;
            }
        }
    });
    generateNewBlock();
}

// 다음 블럭 생성
function generateNewBlock() {
    clearInterval(downInterval);
    downInterval = setInterval(() => {
        moveBlock("top", 1);
    }, duration);
    const blockArray = Object.entries(blocks);
    const randomIndex = Math.floor(Math.random() * blockArray.length);
    movingItem.type = blockArray[randomIndex][0];
    movingItem.top = 0;
    movingItem.left = 4;
    movingItem.direction = 0;
    tempMovingItem = { ...movingItem };
    renderBlocks();
}

function checkEmpty(target) {
    if (!target || target.classList.contains("seized")) {
        return false;
    }
    return true;
}

/** 블록 움직이기*/
function moveBlock(moveType, amount) {
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType);
}

// 모양 변경하기
function changeDirection() {
    const direction = tempMovingItem.direction;
    direction === 3
        ? (tempMovingItem.direction = 0)
        : (tempMovingItem.direction += 1);
    renderBlocks();
}

// 스페이스바 누르기
function dropBlock() {
    clearInterval(downInterval);
    downInterval = setInterval(() => {
        moveBlock("top", 1);
    }, 10);
}

document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 39:
            moveBlock("left", 1);
            break;
        case 37:
            moveBlock("left", -1);
            break;
        case 40:
            moveBlock("top", 1);
            break;
        case 32:
            dropBlock();
            break;
        case 38:
            changeDirection();
            break;
        default:
            break;
    }
});

// 시간 설정
function setTime() {
    setGameTime = setInterval(() => {
        time++;
        tetrisTime.innerText = time;
    }, 1000);
}

// 게임 오버
function tetrisGameover() {
    tetrisMusic.pause();
    tetrisMusic.currentTime = 0;
    tetrisTitle.style.display = "none";
    tetrisPlay.style.display = "none";
    tetrisText.style.display = "none";
    tetrisMethod.style.display = "none";
    tetrisResult.style.display = "block";
    clearInterval(setTime);
    resultTime.innerText = time;
    resultScore.innerText = score;
}

// 게임 스타트
function gameStart() {
    stopGame = false;
    tetrisStart.style.display = "none";
    tetrisTitle.style.display = "block";
    tetrisPlay.style.display = "block";
    tetrisText.style.display = "block";
    tetrisMethod.style.display = "block";
    generateNewBlock();
    renderBlocks();
    setTime();
    tetrisMusic.play();
    tetrisMusic.loop = true;
}

function gameReset() {
    tetrisMusic.pause();
    tetrisMusic.currentTime = 0;
    clearInterval(setGameTime);
    score = 0;
    time = 0;
    duration = 500;
    stopGame = true;
    tetrisTime.innerText = time;
    scoreDisplay.innerText = score;

    const tetrisMinos = document.querySelectorAll(
        ".tetris__play .view ul li ul li"
    );
    tetrisMinos.forEach((minos) => {
        minos.className = "";
    });
}

document
    .querySelector(".tetris__result button")
    .addEventListener("click", () => {
        tetrisStart.style.display = "block";
        tetrisResult.style.display = "none";
        gameReset();
    });

document
    .querySelector(".tetris__start button")
    .addEventListener("click", () => {
        gameStart();
    });

document.querySelector(".tetris__close").addEventListener("click", () => {
    document.querySelector(".tetris__wrap").style.display = "none";
});

window.addEventListener("DOMContentLoaded", () => {
    init();
});
