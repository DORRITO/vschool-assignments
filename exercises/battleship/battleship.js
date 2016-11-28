var readline = require("readline-sync");
var boardMaker = require("./board");

var board = boardMaker.makeBoard();
var hitCounter = 0;

function playRound() {
    boardMaker.displayBoard(board);

    var x = readline.question("Enter an X coordinate (0-9): ");
    var y = readline.question("Enter a Y coordinate (0-9): ");

    // Check coords for validity (0-9 only);
        // If invalid - start them over (continue)
    // Check those coordinates for a previous guess (hit === true || hit === false);
        // If so, make them guess again (continue)

    var location = board[y][x];

    if (location.isShip) {
        console.log("HIT!");
        hitCounter++;
        console.log("You've hit " + hitCounter + " ships so far.");
        location.hit = true;
        location.display = "X";
    } else {
        console.log("Miss :(");
        location.display = "M";
        location.hit = false;
    }
}

function battleship() {
    while (hitCounter < 3) {
        playRound();
    }
    console.log("You won!");
    boardMaker.displayBoard();
}

battleship();