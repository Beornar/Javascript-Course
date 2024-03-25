let currentPlayer = 'X';
    let cells = document.querySelectorAll('.cell');
    let gameOver = false;

    function play(cell, index) {
        if (!gameOver && !cell.textContent) {
            cell.textContent = currentPlayer;
            if (checkWin()) {
                gameOver = true;
                alert(currentPlayer + ' wins!');
            } else if (checkDraw()) {
                gameOver = true;
                alert('It\'s a draw!');
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWin() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winConditions.some(combination =>
            combination.every(index =>
                cells[index].textContent === currentPlayer
            )
        );
    }

    function checkDraw() {
        return [...cells].every(cell => cell.textContent);
    }