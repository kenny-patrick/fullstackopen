import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './requests'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useNotificationDispatch } from './NotificationContext'

const App = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const setNotification = (message) => {
    dispatch({
      type: 'MESSAGE',
      payload: message
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR'
      })
    }, 5000)
  }

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries(['anecdotes'])
    }
  })
  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({
      ...anecdote, 
      votes: anecdote.votes + 1
    })
    setNotification(`Voted for ${anecdote.content}`)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: 1
  })

  console.log(JSON.parse(JSON.stringify(result)))

  if ( result.isLoading ) {
    return (
      <div>loading data....</div>
    )
  }

  if ( result.isError ) {
    return (
      <div>cannot load data due to error in anecdote service</div>
    )
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm setNotification={setNotification} />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
