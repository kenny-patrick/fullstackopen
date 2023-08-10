const CountryList = ({ countries, handleShowCountry }) => {

  if (countries && countries.length <= 10) {
    return (
      <ul>
        {countries.map(country => {
          return (
            <li key={country.name.common}>
              {country.name.common} <button onClick={() => handleShowCountry(country)}>show</button>
            </li>
          )
        })}
      </ul>
    )
  } else if (countries) {
    return 'Too many matches, specify another filter'
  } else {
    return (null)
  }
}

export default CountryList