import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdoteService"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    const content = event.target.anecdote.value
    event.preventDefault()

    dispatch(createAnecdote(content))
    dispatch(setNotification(`You created the anecdote "${content}"`))
    setTimeout(() => dispatch(setNotification('')), 5000)
  }
  return (
    <form onSubmit={addAnecdote}>
      <h2>create new</h2>
      <div><input name='anecdote' /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm