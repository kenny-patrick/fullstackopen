const Languages = ({ country }) => {
  const languages = Object.entries(country.languages).map(([key, value]) => {
    return { key, value }
  })
  return (
    <div>
      <h3>languages</h3>
      <ul>
        {languages.map(language => {
          return (
            <li key={language.key}>
              {language.value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Languages