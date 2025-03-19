# Tic-Tac-Toe Game 🎮

A modern, interactive **Tic-Tac-Toe** game built with **HTML**, **CSS**, and **JavaScript**. This project allows two players to take turns and compete against each other on a 3x3 grid. It dynamically detects the winner, displays a celebratory message, and features a reset functionality for replaying the game.

---

## Features ✨

- **Interactive Gameplay**: Players alternate placing marks (**X** or **O**) on a 3x3 grid.
- **Winner Detection**: The game checks for a winning pattern after each move (horizontal, vertical, or diagonal).
- **Victory Celebration**: Upon winning, a celebratory message ("You WON!!!") is displayed with an option to play again.
- **Reset Button**: Reset the game to its initial state with a click of a button.
- **No Overwriting Moves**: Once a square is filled, it is disabled, ensuring fair gameplay.

---

## How to Play 🕹️

1. Open the game in your browser.
2. Player 1 uses **X**, and Player 2 uses **O**.
3. Click on any empty cell to place your mark.
4. The game alternates turns automatically.
5. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins!
6. If no winner is found and all cells are filled, the game will end in a draw.
7. Click the **Reset** button to start a new game.

---

## Technologies Used 💻

- **HTML**: Structure and layout of the game grid and interface.
- **CSS**: Styling for a clean and modern user experience.
- **JavaScript**: Game logic, win detection, and dynamic DOM manipulation.

---

## Code Highlights 🚀

### Win Detection Logic
The game defines predefined win patterns to check for a winner after each turn. Here’s the logic for detecting horizontal, vertical, and diagonal wins:

```javascript
const winPattern = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal
  [2, 4, 6], // Diagonal
];
```

### Dynamic Victory Celebration
Once a winner is detected, the grid is hidden, and a congratulatory message is displayed with a "Play Again" button to restart the game:

```javascript
function celebration() {
  box.style.display = "none";
  reset.style.display = "none";

  const h2 = document.createElement("h2");
  h2.innerText = "You WON!!!";
  outer.append(h2);

  const playAgain = document.createElement("button");
  playAgain.innerText = "Play Again";
  playAgain.classList.add("reset");
  outer.append(playAgain);
  playAgain.addEventListener("click", () => location.reload());
}
```

---

## How to Run Locally 🛠️

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe
   ```
3. Open the `index.html` file in your web browser to start playing.

---

## Future Improvements 🔮

- **Single-player mode**: Implement an AI opponent for solo play.
- **Score Tracking**: Add a feature to keep track of wins for both players across multiple games.
- **Animations and Sounds**: Enhance the user interface with animations and sound effects for a more immersive experience.

---

## Contributing 🤝

We welcome contributions! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

Enjoy playing! 🎉  
If you have any questions, issues, or feedback, don't hesitate to reach out. 😊
