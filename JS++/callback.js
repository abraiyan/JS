console.log('Start')

const getWeatherPrinted = (callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.main.temp)
    } else if (e.target.readyState === 4) {
      callback('Error', undefined)
    }
  })

  request.open(
    'GET',
    `http://api.openweathermap.org/data/2.5/weather?q=feni&appid=b10461359bf7b6e4b19839f0fa739c6b&units=metric`
  )
  request.send()
}

getWeatherPrinted((error, temp) => {
  if (error) {
    console.log('An error has taken place')
  } else {
    console.log(temp)
  }
})

console.log('End')
