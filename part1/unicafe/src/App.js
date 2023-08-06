import { useState } from 'react'

const Button = ({ handleClick, text }) => (<button onClick={handleClick}>{text}</button>)

const StatisticLine = ({ text, value }) => {
  let displayValue = value
  if (text === 'average' || text === 'positive') {
    displayValue = parseFloat(value).toFixed(1)
  }

  if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{displayValue} %</td>
      </tr>
    )
  }
  return (
    <tr>
        <td>{text}</td>
        <td>{displayValue}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedTotal = updatedGood + neutral + bad
    setGood(updatedGood)
    setTotal(updatedTotal)
    setAverage(calcAverage(updatedGood, bad, updatedTotal))
    setPositive(updatedGood / updatedTotal * 100)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = good + updatedNeutral + bad
    setNeutral(updatedNeutral)
    setTotal(updatedTotal)
    setAverage(calcAverage(good, bad, updatedTotal))
    setPositive(good / updatedTotal * 100)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedTotal = good + neutral + updatedBad
    setBad(updatedBad)
    setTotal(updatedTotal)
    setAverage(calcAverage(good, updatedBad, updatedTotal))
    setPositive(good / updatedTotal * 100)
  }

  const calcAverage = (updatedGood, updatedBad, updatedTotal) => {
    // good = 1 pt, neutral = 0 pts, bad = -1 pt
    const points = updatedGood - updatedBad
    return points / updatedTotal
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <table>
        <thead>
        <tr>
          <th><h1>statistics</h1></th>
        </tr>
        </thead>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive} />
        </tbody>
      </table>
    </div>
  )
}

export default App