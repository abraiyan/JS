const luluFunc = (data) => {
  return new Promise((resolve, reject) => {
    if (data % 2 === 0) resolve(`Your data ${data} is even and ok`)
    else reject(`Your data ${data} is odd and not ok`)
  })
}

luluFunc(40).then(
  (data) => {
    console.log(data)
  },
  (error) => {
    console.log(error)
  }
)
