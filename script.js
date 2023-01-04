let playerText = document.getElementById('playerText');
let boxes = Array.from(document.getElementsByClassName('box'));
let restartBtn = document.getElementById('restartBtn');

const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

function boxClicked(e) {
    const id = e.target.id;

    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        playerText.innerText = `${currentPlayer} Turn`;

        if (playerHasWon() !== false) {
            playerText.innerText = `${currentPlayer} Has WON!`
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
    }
}

restartBtn.addEventListener('click', restart);

function restart() {
    spaces.fill(null);

    boxes.forEach( box => {
        box.innerText = '';
    })

    currentPlayer = X_TEXT;
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