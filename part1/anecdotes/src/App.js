import { useState } from 'react'

const Button = ({ handleClick, text }) => (<button onClick={handleClick}>{text}</button>)

const VoteLine = ({ votes }) => (votes ? <p>has {votes} votes</p> : <p>has 0 votes</p>)

const Anecdote = ({ text }) => (<p>{text}</p>)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [points, setPoints] = useState(0)
   
  const [selected, setSelected] = useState(0)

  const [mostPopular, setMostPopular] = useState(0)

  const nextAnecdote = () => (setSelected(Math.floor(Math.random() * anecdotes.length)))


  const handleVote = () => {
    const copy = points.length ? [...points] : new Uint8Array(8)
    copy[selected] = copy[selected] + 1
    setPoints(copy)
    setMostPopular(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} />
      <VoteLine votes={points[selected]}/>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={nextAnecdote} text='next anecdote'/>
      <h1>Anecdote with the most votes</h1>
      <Anecdote text={anecdotes[mostPopular]} />
      <VoteLine votes={points[mostPopular]} />
    </div>
  )
}

export default App