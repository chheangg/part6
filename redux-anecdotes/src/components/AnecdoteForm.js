import { connect } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = ({createAnecdote, setNotification}) => {
  // const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    const content = event.target.anecdote.value
    event.preventDefault()

    createAnecdote(content)
    setNotification(`You created the anecdote "${content}"`)
    setTimeout(() => setNotification(''), 5000)
  }
  return (
    <form onSubmit={addAnecdote}>
      <h2>create new</h2>
      <div><input name='anecdote' /></div>
      <button>create</button>
    </form>
  )
}

const ConnectedAnecdoteForm = connect(null, { createAnecdote, setNotification })(AnecdoteForm)

export default ConnectedAnecdoteForm