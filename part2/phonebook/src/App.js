import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personsService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
      })
  })

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      personsService
      .remove(id)
      .then(returnedPersons => {
        console.log(returnedPersons)
      })
    }
  }

  const [filteredPersons, setFilteredPersons] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} isFiltered={isFiltered} setIsFiltered={setIsFiltered} setFilteredPersons={setFilteredPersons}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      {isFiltered 
        ? <Persons persons={filteredPersons} handleDelete={handleDelete} /> 
        : <Persons persons={persons} handleDelete={handleDelete} />
      }
    </div>
  )
}

export default App