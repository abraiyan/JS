class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
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
    this.calculateStatus()
  }

  calculateStatus() {
    let finished = true

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter)) {
      } else {
        finished = false
      }
    })

    if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }
}
