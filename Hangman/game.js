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

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    console.log(data)
  }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
request.send()
