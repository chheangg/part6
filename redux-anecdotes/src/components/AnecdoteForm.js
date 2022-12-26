import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = (event) => {
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