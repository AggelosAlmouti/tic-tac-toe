function createPlayer(name, symbol) {
    return { name, symbol };
};

const gameBoard = (function () {
    return [
        ['x', 'o', 'x'],
        ['', 'x', ''],
        ['x', 'o', 'x']
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

    endGame: function () {
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
        //check diagonal
        let diagonal = gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2];
        if (diagonal == 'xxx') {
            return 'x';
        } else if (diagonal == 'ooo') {
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
                };
            };
        };
    },
};

const player1 = createPlayer('player1', 'x');
const player2 = createPlayer('player2', 'o');

console.log(gameBoardController.endGame());