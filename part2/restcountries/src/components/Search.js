import { useState } from 'react'

const Search = ({ allCountries, setFilteredCountries, handleShowCountry, clearCountry }) => {
  const [searchString, setSearchString] = useState('')

  const searchCountries = (event) => {
    const updatedSearchString = event.target.value
    setSearchString(updatedSearchString)
    const filteredCountries = allCountries?.filter(country => {
      const countryName = country?.name?.common?.toLowerCase()
      return countryName.includes(updatedSearchString.toLowerCase())
    })
    setFilteredCountries(filteredCountries)
    if (filteredCountries?.length === 1) {
      handleShowCountry(filteredCountries[0])
    } else {
      clearCountry()
    }
  }

  return (
    <div>
      <p>find countries <input value={searchString} onChange={searchCountries}></input></p>
    </div>
  )
}

export default Search