const getWeatherPrinted = (cityName) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data.main.temp)
      } else if (request.readyState === 4) {
        reject('An error has taken place')
      }
    })

    request.open(
      'GET',
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b10461359bf7b6e4b19839f0fa739c6b&units=metric`
    )
    request.send()
  })

getWeatherPrinted(prompt('Enter City').toLowerCase()).then(
  (data) => {
    console.log(data)
  },
  (error) => {
    console.log(error)
  }
)
