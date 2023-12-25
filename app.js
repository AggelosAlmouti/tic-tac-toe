function createPlayer(name, symbol) {
    return { name, symbol };
};

//todo createGameBoardFuctory IIFE

const gameBoard = {
    state: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],

    update: function (position, symbol) {
        this.state.splice(position, 1, symbol);
    }
};

const gameFlow = (function () {

})();

const player1 = createPlayer('player1', 'x');
const player2 = createPlayer('player2', '0');

//todo splice into 2d array?
gameBoard.update(1, 'x');

console.log(gameBoard.state);