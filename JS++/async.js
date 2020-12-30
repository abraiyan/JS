const gettingPuzzleData = async () => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=2`, {})
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Something bad happened')
  }
}

gettingPuzzleData().then((data) => {
  console.log(data)
})
