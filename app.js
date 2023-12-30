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
                    if (gameBoard[i][j] == '') {
                        gameBoard[i][j] = symbol;
                    };
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
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let squares = 0;
                if (gameBoard[i][j] == '') {
                    squares += 1;
                };
                if (squares == 9) {
                    return null;
                    console.log('game over');
                };
            };
        };
    },
};

const player1 = createPlayer('player1', 'x');
const player2 = createPlayer('player2', 'o');

const squares = document.querySelectorAll('.square');
let turn = 1;
squares.forEach(square => {
    square.addEventListener('click', (e) => {
        position_x = square.dataset.index[0];
        position_y = square.dataset.index[1];
        if (turn % 2 == 0) {
            symbol = player2.symbol;
        } else {
            symbol = player1.symbol;
        }
        gameBoardController.update(position_x, position_y, symbol);
        square.innerHTML = symbol;
        console.log(gameBoard);
        if (gameBoardController.gameOver())
            //todo break eventlistener
            console.log('game over!')
        turn++;
    });
});