import { useState } from 'react'

const Filter = ({ persons, isFiltered, setIsFiltered, setFilteredPersons }) => {
    const [searchString, setSearchString] = useState('')
    const searchPhonebook = (event) => {
        const updatedSearchString = event.target.value
        setSearchString(updatedSearchString)
        const updatedIsFiltered = updatedSearchString.length > 0 ? true : false
        setIsFiltered(updatedIsFiltered)
        setFilteredPersons(persons.filter(person => person.name.includes(updatedSearchString)))
    }

    return (
        <p>filter shown with <input value={searchString} onChange={searchPhonebook}/></p>
    )
}

export default Filter