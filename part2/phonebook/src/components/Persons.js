const Persons = ({ persons, handleDelete }) => {

	const inlineStyles = {
		listStyle: 'none'
	}
	return (
		<ul>
			{persons.map(person => {
				return (
					<li
						style={inlineStyles}
						key={person.name}
					>
						{person.name} {person.number} <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
					</li>
				)
			})}
		</ul>
	)
}

export default Persons