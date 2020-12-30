const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  render()
})

const render = () => {
  puzzleEl.textContent = ''
  guessesEl.textContent = game1.statusMessage
  game1.puzzle.split('').forEach((letter) => {
    const letterElement = document.createElement('span')
    letterElement.textContent = letter
    puzzleEl.appendChild(letterElement)
  })
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
