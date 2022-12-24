import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = (event) => {
    event.preventDefault()
    dispatch(createAnecdote(event.target.anecdote.value))
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