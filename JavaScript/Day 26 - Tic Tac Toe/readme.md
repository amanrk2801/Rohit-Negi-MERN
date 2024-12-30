# Tic Tac Toe: Code Walkthrough

## Overview
This project is a simple **Tic Tac Toe** game implemented using HTML, CSS, and JavaScript. The game allows two players to alternate turns placing their marks ("o" and "x") on a 3x3 grid. The game determines when a player has won or when there is a draw. Additionally, a "Restart Game" button allows players to reset the board and start a new game.

---

## HTML File

### Code Walkthrough

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Tic Tac Toe</title>
</head>
<body>
    <div id="tic-tac-toe" role="application">
        <h1>Tic Tac Toe</h1>
        <div id="board" role="grid">
            <div class="row" role="row">
                <div class="cell" id="1" role="gridcell"></div>
                <div class="cell" id="2" role="gridcell"></div>
                <div class="cell" id="3" role="gridcell"></div>
            </div>
            <div class="row" role="row">
                <div class="cell" id="4" role="gridcell"></div>
                <div class="cell" id="5" role="gridcell"></div>
                <div class="cell" id="6" role="gridcell"></div>
            </div>
            <div class="row" role="row">
                <div class="cell" id="7" role="gridcell"></div>
                <div class="cell" id="8" role="gridcell"></div>
                <div class="cell" id="9" role="gridcell"></div>
            </div>
        </div>
        <button id="restart-game">Restart Game</button>
        <div id="winningMessage" aria-live="polite"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Explanation
1. **`<div id="tic-tac-toe">`:**
   - Acts as the main container for the game.
   - Includes ARIA `role="application"` to improve accessibility.

2. **`<div id="board">`:**
   - Represents the game board.
   - Uses `role="grid"` for screen readers to interpret the 3x3 grid structure.

3. **Cell Divs:**
   - Each cell of the board is represented as a `<div>` with `class="cell"` and a unique `id` (1-9).
   - Includes `role="gridcell"` for accessibility.

4. **`<button id="restart-game">`:**
   - Provides functionality to reset the game.

5. **`<div id="winningMessage">`:**
   - Displays the winner or draw message.
   - Includes `aria-live="polite"` to announce updates to assistive technologies.

---

## JavaScript File

### Code Walkthrough

```javascript
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
```

### Explanation
1. **Variables:**
   - `turn`: Tracks the current player ("o" or "x").
   - `winner`: Contains all possible winning combinations.
   - `board_array`: Represents the game board, initialized with "E" for empty cells.
   - `gameEnded`: Ensures no interactions occur after the game ends.

2. **`checkWinner` Function:**
   - Iterates over all winning combinations.
   - Highlights the winning cells using `highlightWinningCells`.
   - Checks for a draw if all cells are filled.
   - Returns the winner ("o" or "x") if one is found, otherwise `null`.

3. **`highlightWinningCells` Function:**
   - Adds a CSS class to visually highlight the winning combination on the board.

4. **Event Listener for Clicks:**
   - Handles player moves.
   - Updates the game state and UI.
   - Checks for a winner or draw after each move.
   - Switches the turn to the other player.

5. **Restart Button:**
   - Resets the game state and clears the board for a new game.
   - Removes any highlight styles from previous winning cells.

---

## Key Features
- **Dynamic Turn Switching:** Alternates between players "o" and "x".
- **Winner and Draw Detection:** Identifies winning combinations or a draw.
- **Winning Combination Highlight:** Highlights the winning cells for better UX.
- **Game Reset:** Allows restarting the game via a button.
- **Accessibility:** Uses ARIA roles for improved screen reader support.

---

## Future Enhancements
- Improve CSS styles for a more visually appealing design.
- Add animations for smoother transitions when highlighting cells or resetting the board.

