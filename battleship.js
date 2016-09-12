// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9
}

	var letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		square.textContent = letterArray[j] + (1 + i)

		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[1,0,0,0,0,0,0,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,1,0,0,0,0],
				[1,0,0,0,0,1,0,0,0,0],
				[0,0,0,0,0,1,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,1,1,1,1,0,0]
				]

var row;
var x;
var column;
var torpedo;
var first;
var second;
var converted;
var hitHolder = 0;

function fireTorpedo() {

	torpedo = document.getElementById("fireInput").value;
	x = torpedo.substring(0, 1);
	row = letterConversion[x];
	column = torpedo.substring(1, 3);

	if (gameBoard[row][column - 1] == 1){
		document.getElementById("s" + row + (column - 1)).style.background = "red"
	}
	else {
		document.getElementById("s" + row + (column - 1)).style.background = "#00ff00"
	}
	//var userInput = $("#fireInput").val();
}
