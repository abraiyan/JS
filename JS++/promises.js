const makeItDouble = (data) =>
  new Promise((resolve, reject) => {
    typeof data === 'number'
      ? resolve(data * 2)
      : reject('Input a number number number')
  })

makeItDouble(2)
  .then((data) => {
    return makeItDouble(data)
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
