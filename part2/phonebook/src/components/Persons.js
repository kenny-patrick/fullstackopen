const Persons = ({ persons, handleDelete }) => {

	return (
		<ul>
			{persons.map(person => {
				return (
					<li
						className='personItem'
						key={person.name}
					>
						{person.name} {person.number} <button onClick={(event) => handleDelete(event, person.id, person.name)}>delete</button>
					</li>
				)
			})}
		</ul>
	)
}

export default Persons