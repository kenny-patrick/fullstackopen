const Persons = ({ persons }) => {
    const inlineStyles = {
        listStyle: 'none'
    }
    return (
        <ul>
            {persons.map(person => {
                return <li style={inlineStyles} key={person.name}>
                    {person.name} {person.number}
                </li>
            })}
        </ul>
    )
}

export default Persons