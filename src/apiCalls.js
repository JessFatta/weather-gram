const getCurrentData = (location) => {
  return fetch(`http://api.weatherapi.com/v1/current.json?key=f7ac8cfa51bb4034b12220944220704&q=${location}`)
  .then(response => handleResponse(response))
}

const get3DayData = (location) => {
  return fetch(`http://api.weatherapi.com/v1/forecast.json?key=f7ac8cfa51bb4034b12220944220704&q=${location}&days=3&aqi=no&alerts=no`)
  .then(response => handleResponse(response))
}

const handleResponse = () => {
  if(!response.ok) {
    throw new Error('Something went wrong!')
  } else {
    return response.json()
  }
}

export { getCurrentData, get3DayData }
