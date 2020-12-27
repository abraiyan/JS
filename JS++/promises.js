const luluFunc = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('GG, it did not worked!')
  }, 1500)
})

luluFunc.then(
  (data) => {
    console.log(data)
  },
  (error) => {
    console.log(error)
  }
)
