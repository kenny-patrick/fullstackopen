import { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => (setNewName(event.target.value))
    const handleNumberChange = (event) => (setNewNumber(event.target.value))

    const isNameDuplicate = () => {
        const results = persons.filter(person => person.name === newName)
        // console.log(results)
        return results.length > 0 ? true : false
      }
    
      const isNumberDuplicate = () => {
        const results = persons.filter(person => person.number === newNumber)
        return results.length > 0 ? true : false
      }

    const addPerson = (event) => {
        event.preventDefault()
        if (isNameDuplicate()) {
            alert(`${newName} is already added to the phonebook`)
        } else if (isNumberDuplicate()) {
            alert(`Number ${newNumber} is already added to the phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1,
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }
    }
    return (
        <form onSubmit={addPerson}>
            <div>name: <input value={newName} onChange={handleNameChange} /></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
            <div><button type="submit">add</button></div>
        </form>
    )
}

export default PersonForm