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
};

const player1 = createPlayer('player1', 'x');
const player2 = createPlayer('player2', 'o');

gameBoardController.update(1, 1, 'x');
gameBoardController.update(1, 1, 'o');
console.log(gameBoard);