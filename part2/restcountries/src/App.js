import { useState, useEffect } from 'react'

import Search from './components/Search'
import CountryDetails from './components/CountryDetails'
import CountryList from './components/CountryList'
import countryService from './services/country'
import weatherService from './services/weather'

const App = () => {
  const [allCountries, setAllCountries] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [country, setCountry] = useState(null)
  const [displayDetails, setDisplayDetails] = useState(false)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (!allCountries) {
      countryService
        .getAll()
        .then(res => {
          setAllCountries(res)
          console.log(res)
        })
    }
    if (country) {
      
    }
  }, [country])

  const handleShowCountry = (country) => {
    console.log(country)
    setDisplayDetails(true)
    setCountry(country)
    const latlong = country.capitalInfo.latlng
    const lat = latlong[0]
    const lon = latlong[1]
    weatherService
      .getOne(lat, lon)
      .then(response => {
        setWeather(response)
      }).catch(error => {
        console.log(error)
      })
  }

  const clearCountry = () => {
    setDisplayDetails(false)
    setCountry(null)
  }

  return (
    <div>
      <Search allCountries={allCountries} setFilteredCountries={setFilteredCountries} handleShowCountry={handleShowCountry} clearCountry={clearCountry} />
      {displayDetails ? (
        <CountryDetails country={country} weather={weather} />
      ) : (
        <CountryList handleShowCountry={handleShowCountry} countries={filteredCountries} />
      )}
      

    </div>
  )
}

export default App;
