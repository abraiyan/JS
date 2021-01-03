const weatherByCityName = async (cityName) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b10461359bf7b6e4b19839f0fa739c6b&units=metric`,
    {}
  )
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('GG hobena')
  }
}

weatherByCityName(prompt('Enter City Name'))
  .then((data) => {
    console.log(data.main.temp)
  })
  .catch((error) => {
    console.log(`Lol ${error}`)
  })
