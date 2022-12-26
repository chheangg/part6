import { useDispatch, useSelector } from "react-redux"
import { voteFor } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const Anecdote = ({content, votes, id, eventHandler}) => {
  return (
    <div>
      <div>
        {content}
      </div>
      <div>
        has {votes}
        <button onClick={eventHandler}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter}) => [...anecdotes].filter(anec => anec.content.includes(filter)).sort((prev, next) => prev.votes > next.votes ? -1 : prev.votes === next.votes ? 0 : 1))
  const dispatch = useDispatch()

  const vote = (id, content) => {
    dispatch(voteFor(id))
    dispatch(setNotification(`you voted for "${content}"`))
    setTimeout(() => dispatch(setNotification('')), 5000)
  }

  return (
    <>
      {anecdotes.map(anecdote => 
        <Anecdote 
          key={anecdote.id} 
          id={anecdote.id} 
          votes={anecdote.votes} 
          content={anecdote.content} 
          eventHandler={() => vote(anecdote.id, anecdote.content)} 
        />
        )}
    </>
  )
}

export default AnecdoteList