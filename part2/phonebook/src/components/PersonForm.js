import { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons, setNotifMsg, setNotifClass }) => {
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	const handleNameChange = (event) => ( setNewName(event.target.value))
	const handleNumberChange = (event) => (setNewNumber(event.target.value))

	const isNameDuplicate = () => {
		const results = persons.filter(person => person.name === newName)
		// console.log(results)
		return results.length > 0 ? true : false
	}

	const resetNotif = () => {
		setTimeout(() => {
			setNotifMsg(null)
			setNotifClass(null)
		}, 5000)
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
					setNotifMsg(`Added ${returnedPerson.name}`)
					setNotifClass('message')
					resetNotif()
				})
		}
	}

	const updatePersonNumber = (name, newNumber) => {
    const person = persons.find(p => p.name === name)
		const id = person.id
    const changedPerson = { ...person, number: newNumber }

    personsService.update(person.id, changedPerson)
			.then((returnedPerson) => {
				setPersons(persons.map(person => person.id !== id ? person : changedPerson))
				setNewName('')
				setNewNumber('')
				setNotifMsg(`Updated number of ${returnedPerson.name}`)
				setNotifClass('message')
				resetNotif()
			})
			.catch(error => {
				setNotifMsg(`${changedPerson.name} has already been removed from the server`)
				setNotifClass('error')
				resetNotif()
			})
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