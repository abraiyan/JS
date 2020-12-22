class Hangman {
  constructor(word, guessesLeft) {
    this.word = word.toLowerCase().split('')
    this.guessesLeft = guessesLeft
    this.userGuesses = []
    this.status = 'Playing'
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()
    const uniqueGuess = !this.userGuesses.includes(guess)
    const rightGuess = this.word.includes(guess)

    if (uniqueGuess) {
      this.userGuesses.push(guess)
    }

    if (uniqueGuess && !rightGuess) {
      this.guessesLeft--
    }

    this.calculateStatus()
  }

  getPuzzle() {
    let puzzle = ''

    this.word.forEach((letter) => {
      if (this.userGuesses.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })

    return puzzle
  }

  calculateStatus() {
    let finished = this.word.every((letter) => {
      return this.userGuesses.includes(letter)
    })

    if (this.guessesLeft <= 0) {
      this.status = 'Failed'
    } else if (finished) {
      this.status = 'Finished Wow'
    } else {
      this.status = 'Playing'
    }
  }
}
