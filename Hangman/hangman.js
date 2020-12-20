class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
  }
  getPuzzle() {
    let puzzle = ''

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })

    return puzzle
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isRightGuess = this.word.includes(guess)

    if (isUnique) {
      this.guessedLetters.push(guess)
    }

    if (isUnique && !isRightGuess) {
      this.remainingGuesses--
    }
  }
}

const gameOne = new Hangman('Cat', 2)
console.log(gameOne.getPuzzle())

window.addEventListener('keypress', (e) => {})
