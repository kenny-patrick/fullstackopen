import weatherService from '../services/weather'

const Weather = ({ capital, weather }) => {
  const temp = weather?.main?.temp
  const icon = weather?.weather[0]?.icon
  const imgSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`
  const wind = weather?.wind?.speed

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>temperature {temp} Celsius</p>
      <img src={imgSrc}></img>
      <p>wind {wind} m/s</p>
    </div>
  )
}

export default Weather