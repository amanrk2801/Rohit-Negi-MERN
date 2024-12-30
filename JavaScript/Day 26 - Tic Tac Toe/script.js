// Game Variables
let turn = "o"; // Keeps track of the current player's turn
let winner = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
  [1, 5, 9], [3, 5, 7]             // Diagonals
];
let board_array = new Array(9).fill("E"); // Represents the board state
let gameEnded = false; // Tracks if the game has ended

// Function to Check for a Winner
function checkWinner() {
  for (let [index1, index2, index3] of winner) {
    if (
      board_array[index1 - 1] !== "E" &&
      board_array[index1 - 1] === board_array[index2 - 1] &&
      board_array[index2 - 1] === board_array[index3 - 1]
    ) {
      highlightWinningCells([index1, index2, index3]);
      return board_array[index1 - 1]; // Returns "o" or "x" if there's a winner
    }
  }

  // Check for Draw
  if (!board_array.includes("E")) {
    document.getElementById("winningMessage").innerHTML = "It's a Draw!";
    gameEnded = true;
    return null;
  }

  return null; // Returns null if no winner
}

// Highlight Winning Cells
function highlightWinningCells(cells) {
  cells.forEach(cell => {
    document.getElementById(cell).classList.add("highlight");
  });
}

// Event Listener for Board Clicks
const board = document.querySelector("#board");
board.addEventListener("click", (e) => {
  if (gameEnded) return; // Prevent interaction if the game has ended

  const element = e.target;

  // Ensure the clicked element is a valid cell
  if (element.id && !isNaN(element.id)) {
    const cellIndex = parseInt(element.id) - 1;

    if (board_array[cellIndex] === "E") {
      // Update board state and UI
      element.innerHTML = turn;
      board_array[cellIndex] = turn;

      // Check for a winner
      const winner = checkWinner();
      if (winner) {
        document.getElementById("winningMessage").innerHTML = `Winner is ${winner}`;
        gameEnded = true; // Stop further interactions
        return;
      }

      // Switch turns
      turn = turn === "o" ? "x" : "o";
    }
  }
});

// Restart Game Functionality
const restartButton = document.getElementById("restart-game");
restartButton.addEventListener("click", () => {
  board_array.fill("E"); // Reset board state
  turn = "o"; // Reset turn to "o"
  gameEnded = false; // Allow interactions

  // Clear UI
  document.querySelectorAll(".cell").forEach(cell => {
    cell.innerHTML = "";
    cell.classList.remove("highlight");
  });
  document.getElementById("winningMessage").innerHTML = "";
});