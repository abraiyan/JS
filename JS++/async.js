const gettingWeatherData = async (cityName) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b10461359bf7b6e4b19839f0fa739c6b&units=metric`,
    {}
  )
  if (response.status === 200) {
    const data = await response.json()
    return data.main.temp
  } else {
    throw new Error('Something bad happened')
  }
}

gettingWeatherData(prompt('Enter city name')).then((data) => {
  console.log(data)
})
