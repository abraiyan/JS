const gameOne = new Hangman('Cat', 2)
console.log(gameOne.getPuzzle())
console.log(gameOne.remainingGuesses)

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  gameOne.makeGuess(guess)
  console.log(gameOne.getPuzzle())
  console.log(gameOne.remainingGuesses)
})
