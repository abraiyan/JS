const calculateTip = (amount, tipPercentage) => {
  if (typeof amount !== 'number' || typeof tipPercentage !== 'number') {
    throw Error('Input should be a number')
  }
  return amount * (tipPercentage / 100)
}

try {
  console.log(`calculated tip : ${calculateTip(200, 20)}`)
} catch (e) {
  console.log(e.message)
}
