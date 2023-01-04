let playerText = document.getElementById('playerText');
let boxes = Array.from(document.getElementsByClassName('box'));
let restartBtn = document.getElementById('restartBtn');

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

playerText.innerText = `${currentPlayer} - Turn`;
function boxClicked(e) {
    const id = e.target.id;

    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (playerHasWon() !== false) {
            playerText.innerText = `${currentPlayer} Has WON!! Click Restart`;
            let winning_blocks = playerHasWon();

            winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator);

            return;
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
        playerText.innerText = `${currentPlayer} - Turn`;
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition;

        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c];
        }
    }
    return false;
}

restartBtn.addEventListener('click', restart);

function restart() {
    spaces.fill(null);

    boxes.forEach( box => {
        box.innerText = '';
        box.style.backgroundColor='';
    })

    currentPlayer = X_TEXT;
    playerText.innerText = `${currentPlayer} - Turn`;
}

const themeToggleBtn = document.querySelector('.theme-toggler');
const container = document.querySelector('.container');
const toggleIcon = document.querySelector('.toggle-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    container.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};

startGame();