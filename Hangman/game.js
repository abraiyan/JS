const puzzleWord = document.getElementById('puzzle_word')
const guessLeft = document.getElementById('guess_left')
const gameStatus = document.getElementById('game_status')

const gameOne = new Hangman('Cat', 2)
puzzleWord.textContent = gameOne.getPuzzle()
guessLeft.textContent = 'Guesses left : ' + gameOne.guessesLeft
gameStatus.textContent = 'Game Status : ' + gameOne.status

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  gameOne.makeGuess(guess)
  puzzleWord.textContent = gameOne.getPuzzle()
  guessLeft.textContent = 'Guesses left : ' + gameOne.guessesLeft
  gameStatus.textContent = 'Game Status : ' + gameOne.status
})
