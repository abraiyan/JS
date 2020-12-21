const gameOne = new Hangman('Cat', 2)
document.getElementById('user_guess_word').textContent = gameOne.getPuzzle()
document.getElementById('guess_left').textContent = gameOne.remainingGuesses

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  gameOne.makeGuess(guess)
  document.getElementById('user_guess_word').textContent = gameOne.getPuzzle()
  document.getElementById('guess_left').textContent = gameOne.remainingGuesses
  console.log(gameOne.status)
})
