function playRound(playerSelection) {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      alert("It's a tie!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      alert("You win! " + playerSelection + " beats " + computerSelection);
    } else {
      alert("You lose! " + computerSelection + " beats " + playerSelection);
    }
}
  
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      playRound(this.textContent);
    });
});