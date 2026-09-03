import TennisGame from "./TennisGame";

const resultadoDiv = document.querySelector("#resultado-div");
const player1Btn = document.querySelector("#player1-btn");
const player2Btn = document.querySelector("#player2-btn");
const resetBtn = document.querySelector("#reset-btn");

let game = new TennisGame("Player1", "Player2");

function render() {
  resultadoDiv.innerHTML = "<p>" + game.score() + "</p>";
}

player1Btn.addEventListener("click", () => {
  game.wonPoint("Player1");
  render();
});

player2Btn.addEventListener("click", () => {
  game.wonPoint("Player2");
  render();
});

resetBtn.addEventListener("click", () => {
  game = new TennisGame("Player1", "Player2");
  render();
});

render();