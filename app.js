const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Score"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Score"),
};
const reset = document.querySelector("#reset");
const winningSelect = document.querySelector("#winningScore");
let winningScore = 3;
let isGameOver = false;
const enableButtons = () => {
  p1.button.disabled = false;
  p2.button.disabled = false;
};

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

function resetScore(player, opponent) {
  player.score = 0;
  opponent.score = 0;
  player.display.textContent = player.score;
  opponent.display.textContent = opponent.score;
  player.display.classList.remove("has-text-success", "has-text-danger");
  opponent.display.classList.remove("has-text-danger", "has-text-success");
  isGameOver = false;
  enableButtons();
}

reset.addEventListener("click", () => {
  resetScore(p1, p2);
});

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

winningSelect.addEventListener("change", () => {
  winningScore = Number(winningSelect.value);
  resetScore(p1, p2);
});
