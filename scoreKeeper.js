var playerOne = document.getElementById("p1");
var playerTwo = document.getElementById("p2");
var p1Result = document.getElementById("p1Result");
var p2Result = document.getElementById("p2Result");
var p1Score = 0;
var p2Score = 0;
var resetButton = document.getElementById("reset");
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var playingTo = document.querySelector("p span");

playerOne.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Result.classList.add("winner");
      gameOver = true;
    }
    p1Result.textContent = p1Score;
  }
});

playerTwo.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Result.classList.add("winner");
      gameOver = true;
    }
    p2Result.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Result.textContent = 0;
  p2Result.textContent = 0;
  p1Result.classList.remove("winner");
  p2Result.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", function() {
  playingTo.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});
