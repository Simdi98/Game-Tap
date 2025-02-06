// Get elements
const colorDisplay = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelectorAll('[data-testid="colorOption"]');
const gameInstructions = document.querySelector(
  '[data-testid="gameInstructions"]'
);
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreDisplay = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

// Initialize score
let score = 0;

// Function to generate random color
function generateRandomColor() {
  const colors = [
    "#80ced6",
    "#b1cbbb",
    "#50394c",
    "#b0aac0",
    "#4040a1",
    "#c94c4c",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to start new game
function startNewGame() {
  const targetColor = generateRandomColor();
  colorDisplay.style.backgroundColor = targetColor;
  gameStatus.textContent = "";
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
}

// Function to change color on display randomly
function changeColorOnDisplay() {
  const newColor = generateRandomColor();
  colorDisplay.style.backgroundColor = newColor;
}

// Call changeColorOnDisplay function every 5 seconds
setInterval(changeColorOnDisplay, 5000);

// Call startNewGame function to start the game
startNewGame();

// Add event listeners to color options
colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedColor = option.style.backgroundColor;
    if (selectedColor === colorDisplay.style.backgroundColor) {
      gameStatus.textContent = "Correct!";
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      option.classList.add("correct-anim");
      confetti();
    } else {
      gameStatus.textContent = "Wrong!";
    }
  });
});

// Function to create confetti animation
function confetti() {
  const confettiElement = document.createElement("div");
  confettiElement.classList.add("confetti");
  confettiElement.classList.add("confetti-anim");
  document.querySelector(".game-container").appendChild(confettiElement);
  setTimeout(() => {
    confettiElement.remove();
  }, 2000);
}

// Add event listener to new game button
newGameButton.addEventListener("click", startNewGame);

// Start new game initially
startNewGame();
