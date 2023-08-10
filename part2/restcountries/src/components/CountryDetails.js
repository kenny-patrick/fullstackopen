import Languages from "./Languages"
import Weather from "./Weather"

const CountryDetails = ({ country, weather }) => {
  const ulStyle = {
    listStyle: 'none',
    textAlign: 'left',
    marginLeft: '0',
    paddingLeft: '0',
  }

  const imgStyle = {
    width: '150px'
  }

  const capital = country.capital[0]
  const latlong = country.capitalInfo
  const lat = latlong[0]
  const lon = latlong[1]

  return (
    <div>
      <h2>{country.name.common}</h2>
      <ul style={ulStyle}>
        <li>capital { capital}</li>
        <li>area {country.area}</li>
      </ul>
      <Languages country={country} />
      <img src={country.flags.png} style={imgStyle} />
      <Weather capital={capital} lat={lat} lon={lon} weather={weather} />
    </div>
  )
}

export default CountryDetails