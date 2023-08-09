import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [notifMsg, setNotifMsg] = useState(null)
  const [notifClass, setNotifClass] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
      })
  }, [])

  const handleDelete = (event, id, name) => {
    event.preventDefault()
    if (window.confirm(`Delete ${name}`)) {
      personsService
      .remove(id)
      .then(() => {
        personsService
          .getAll()
          .then(returnedPersons => {
            setPersons(returnedPersons)
          })
      })
    }
  }

  const [filteredPersons, setFilteredPersons] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <Notification message={notifMsg}/> */}
      <Notification message={notifMsg} className={notifClass}/>
      <Filter persons={persons} isFiltered={isFiltered} setIsFiltered={setIsFiltered} setFilteredPersons={setFilteredPersons}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setNotifMsg={setNotifMsg} setNotifClass={setNotifClass} />
      <h3>Numbers</h3>
      {isFiltered 
        ? <Persons persons={filteredPersons} handleDelete={handleDelete} /> 
        : <Persons persons={persons} handleDelete={handleDelete} />
      }
    </div>
  )
}

export default App