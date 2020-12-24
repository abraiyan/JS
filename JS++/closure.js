createTipper = (tipPercentage) => {
  return (billAmount) => {
    return billAmount + billAmount * (tipPercentage / 100)
  }
}

const billOn15PercentTip = createTipper(15)
console.log(billOn15PercentTip(100))
console.log(billOn15PercentTip(200))

const billOn20PercentTip = createTipper(20)
console.log(billOn20PercentTip(100))
console.log(billOn20PercentTip(200))
