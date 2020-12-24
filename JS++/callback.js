console.log('Start')

const getWeatherPrinted = (callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data.main.temp)
    } else if (request.readyState === 4) {
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
