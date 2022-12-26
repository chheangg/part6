import { useDispatch, useSelector } from "react-redux"
import { voteFor } from "../reducers/anecdoteReducer"

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
  const anecdotes = useSelector(state => [...state.anecdotes].sort((prev, next) => prev.votes > next.votes ? -1 : prev.votes === next.votes ? 0 : 1))
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteFor(id))
  }

  return (
    <>
      {anecdotes.map(anecdote => 
        <Anecdote 
          key={anecdote.id} 
          id={anecdote.id} 
          votes={anecdote.votes} 
          content={anecdote.content} 
          eventHandler={() => vote(anecdote.id)} 
        />
        )}
    </>
  )
}

export default AnecdoteList