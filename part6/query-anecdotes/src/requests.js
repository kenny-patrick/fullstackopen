import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () =>
  axios.get(baseUrl).then(res => res.data)

export const createAnecdote = async newAnecdote => {
  if (newAnecdote.content.length < 5) {
    throw new Error('Anecdote length must be at least 5 characters')
  }
  const response = axios.post(baseUrl, newAnecdote)
  return response.data
}


export const updateAnecdote = updatedAnecdote =>
  axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote).then(res => res.data)