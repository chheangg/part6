import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdoteService'

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    anecdoteService
      .getAll()
      .then((anecdotes) => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])

  return (
    <div>
      <Filter />
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App