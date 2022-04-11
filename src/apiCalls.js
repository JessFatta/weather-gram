const getWeatherData = (location) => {
  return fetch(`http://api.weatherapi.com/v1/current.json?key=f7ac8cfa51bb4034b12220944220704&q=${location}`)
  .then(response => response.json())
}

export { getWeatherData }