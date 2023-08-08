import { useState } from 'react'
import personsService from '../services/persons'

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

	const addPerson = (event) => {
		event.preventDefault()
		const personObject = {
			name: newName,
			number: newNumber,
		}
		if (isNameDuplicate()) {
			const prompt = `${newName} is already added to the phonebook, replace the old number with a new one?`
			if (window.confirm(prompt)) {
				updatePersonNumber(personObject.name, personObject.number)
			}
		} else {
			personsService
				.create(personObject)
				.then(returnedPerson => {
					setPersons(persons.concat(returnedPerson))
					setNewName('')
					setNewNumber('')
				})
		}
	}

	const updatePersonNumber = (name, newNumber) => {
    const person = persons.find(p => p.name === name)
    const changedPerson = { ...person, number: newNumber }

    personsService.update(person.id, changedPerson)
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