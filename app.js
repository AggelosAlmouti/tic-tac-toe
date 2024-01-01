function createPlayer(name, symbol) {
    return { name, symbol };
};

const gameBoard = (function () {
    return [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
})();

const gameBoardController = {
    update: function (position_x, position_y, symbol) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (i == position_x && j == position_y) {
                    gameBoard[i][j] = symbol;
                };
            };
        };
    },

    gameOver: function () {
        //check rows
        for (let i = 0; i < 3; i++) {
            let rows = '';
            for (let j = 0; j < 3; j++) {
                rows += gameBoard[i][j];
                if (rows == 'xxx') {
                    return 'x';
                } else if (rows == 'ooo') {
                    return 'o';
                };
            };
        };
        //check columns
        for (let i = 0; i < 3; i++) {
            let columns = '';
            for (let j = 0; j < 3; j++) {
                columns += gameBoard[j][i];
                if (columns == 'xxx') {
                    return 'x';
                } else if (columns == 'ooo') {
                    return 'o';
                };
            };
        };
        //check diagonals
        let diagonal1 = gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2];
        if (diagonal1 == 'xxx') {
            return 'x';
        } else if (diagonal1 == 'ooo') {
            return 'o';
        };
        let diagonal2 = gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0];
        if (diagonal2 == 'xxx') {
            return 'x';
        } else if (diagonal2 == 'ooo') {
            return 'o';
        };
        //check tie
        let full = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gameBoard[i][j] != '') {
                    full += 1;
                };
            };
        };
        if (full == 9) {
            return 'tie';
        };
    },
};

//todo
// const displayController = {

// }

const startButton = document.querySelector('button');
startButton.addEventListener('click', () => {
    startButton.innerHTML = 'RESTART';
    startButton.addEventListener('click', () => {
        location.reload();
    });

    let name1 = document.querySelector('.player1').value;
    if (name1 == '')
        name1 = 'player1';
    let name2 = document.querySelector('.player2').value;
    if (name2 == '')
        name2 = 'player2';
    const player1 = createPlayer(name1, 'x');
    const player2 = createPlayer(name2, 'o');

    const squares = document.querySelectorAll('.square');
    const results = document.querySelector('.results');
    let turn = 1;
    let stop = false;
    squares.forEach(square => {
        if (!stop) {
            square.addEventListener('click', (e) => {
                if (!stop) {
                    position_x = square.dataset.index[0];
                    position_y = square.dataset.index[1];
                    if (turn % 2 == 0) {
                        symbol = player2.symbol;
                    } else {
                        symbol = player1.symbol;
                    }
                    if (square.innerHTML == '') {
                        gameBoardController.update(position_x, position_y, symbol);
                        square.innerHTML = symbol;
                        let winner;
                        if (winner = gameBoardController.gameOver()) {
                            stop = true;
                            if (winner == player1.symbol) {
                                winner = player1.name;
                            } else {
                                winner = player2.name;
                            }
                            if (winner == 'tie') {
                                results.innerHTML = 'TIE GAME!';
                            } else {
                                results.innerHTML = `${winner} WINS!`;
                            };
                            results.style.opacity = '1';
                        };
                        turn++;
                    };
                };
            });
        };
    });

});

//todo animations
//todo hide code in functions