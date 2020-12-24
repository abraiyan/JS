const getDataCallBack = (callback) => {
  setTimeout(() => {
    callback(undefined, 'This is your data')
  }, 2000)
}

getDataCallBack((error, data) => {
  if (error) {
  } else {
    console.log(data)
  }
})
