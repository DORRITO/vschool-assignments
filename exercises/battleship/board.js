var Location = require("./location");

function makeBoard() {
    var finalBoard = [];
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; j < 10; j++) {
            var location = new Location();
            row.push(location);
        }
        finalBoard.push(row);
    }
    return finalBoard;
}

function displayBoard(board) {
    var displayedBoard = "";
    for (var i = 0; i < 10; i++) {
        var row = "";
        for (var j = 0; j < 10; j++) {
            row += board[i][j].display + " ";
        }
        row += "\n";
        displayedBoard += row;
    }
    console.log(displayedBoard);
}

// Refactor to Board constructor later

module.exports = {
    makeBoard: makeBoard,
    displayBoard: displayBoard
}
