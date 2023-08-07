import { useState } from 'react'

import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} isFiltered={isFiltered} setIsFiltered={setIsFiltered} setFilteredPersons={setFilteredPersons}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h3>Numbers</h3>
      {isFiltered 
        ? <Persons persons={filteredPersons} /> 
        : <Persons persons={persons}/>
      }
    </div>
  )
}

export default App