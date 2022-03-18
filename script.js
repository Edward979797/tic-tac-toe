const gameBoard = {
    currentBoard: ['', '', '', '', '', '', '', '', '']
}

const gameTiles = document.querySelectorAll('.gametile');
console.log(gameTiles);
gameTiles.forEach((tile, currentIndex) => {
    tile.addEventListener('click', () => {
        if (gameBoard.currentBoard[currentIndex] == '') {
            user.placeMark(currentIndex);
        }
        if (gameBoard.currentBoard.indexOf('') != -1) {
            cpu.randomMark();
        }
        displayController.displayMarks();
        displayController.checkWin();
    })
})


const displayController = (function() {
    function displayMarks() {

        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].textContent = gameBoard.currentBoard[i];
        }
    }
    function checkWin() {
        const xWin = 'XXX';
        const oWin = 'OOO';

        if (
            gameBoard.currentBoard.slice(0, 3).join('') == xWin
            || gameBoard.currentBoard.slice(3, 6).join('') == xWin
            || gameBoard.currentBoard.slice(6).join('') == xWin
            || gameBoard.currentBoard[0] + gameBoard.currentBoard[3] + gameBoard.currentBoard[6] == xWin
            || gameBoard.currentBoard[1] + gameBoard.currentBoard[4] + gameBoard.currentBoard[7] == xWin
            || gameBoard.currentBoard[2] + gameBoard.currentBoard[5] + gameBoard.currentBoard[8] == xWin
            || gameBoard.currentBoard[0] + gameBoard.currentBoard[4] + gameBoard.currentBoard[8] == xWin
            || gameBoard.currentBoard[2] + gameBoard.currentBoard[4] + gameBoard.currentBoard[6] == xWin
        ) {
            setTimeout(() => {
                window.alert('Congratulations! You win!');
                location.reload();
            }, 500);
        }
        else if (
            gameBoard.currentBoard.slice(0, 3).join('') == oWin
            || gameBoard.currentBoard.slice(3, 6).join('') == oWin
            || gameBoard.currentBoard.slice(6).join('') == oWin
            || gameBoard.currentBoard[0] + gameBoard.currentBoard[3] + gameBoard.currentBoard[6] == oWin
            || gameBoard.currentBoard[1] + gameBoard.currentBoard[4] + gameBoard.currentBoard[7] == oWin
            || gameBoard.currentBoard[2] + gameBoard.currentBoard[5] + gameBoard.currentBoard[8] == oWin
            || gameBoard.currentBoard[0] + gameBoard.currentBoard[4] + gameBoard.currentBoard[8] == oWin
            || gameBoard.currentBoard[2] + gameBoard.currentBoard[4] + gameBoard.currentBoard[6] == oWin
        ) {
            setTimeout(() => {
                window.alert('You lost! Better luck next time...');
                location.reload();
            }, 500);
        }
    }

    return {
        displayMarks,
        checkWin
    }
}) ();


const player = (mark) => {
    function placeMark(index) {
        gameBoard.currentBoard[index] = mark;
        console.log(gameBoard);
    }
    function randomMark() {
        const randomTile = Math.round(Math.random() * 8);
    
        if (gameBoard.currentBoard[randomTile] == '') {
            gameBoard.currentBoard[randomTile] = 'O';
        } else {
            randomMark();
        }
    }
    return {
        placeMark,
        randomMark
    }
}

const user = player('X');
const cpu = player('O');




// gameBoard - store current gameboard (array)
// displayController - change what gameboard looks like (i.e. fill it with Xs and Os)
// player - factory for player and cpu
// function placeMark() - 
