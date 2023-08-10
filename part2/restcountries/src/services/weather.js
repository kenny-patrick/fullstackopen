//Format: https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//exclude is optional

import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&'

const getOne = (lat, lon) => {
  const request = axios.get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`)
  return request.then(response => response.data)
}

export default { getOne }