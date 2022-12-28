import { useDispatch, useSelector } from "react-redux"
import { update } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdoteService"

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
  const anecdotes = useSelector(({anecdotes, filter}) => {
    if (anecdotes.length > 0) {
      return [...anecdotes]
      .filter(anec => anec.content.includes(filter))
      .sort((prev, next) => prev.votes > next.votes ? -1 : prev.votes === next.votes ? 0 : 1)
    } else {
      return []
    }
  })
  const dispatch = useDispatch()

  const vote = async (id, content) => {
    const upvotedAnecdote = await anecdoteService.update(id, {...content, votes: content.votes + 1})
    dispatch(update(upvotedAnecdote))
    dispatch(setNotification(`you voted for "${content.content}"`))
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
          eventHandler={() => vote(anecdote.id, anecdote)} 
        />
        )}
    </>
  )
}

export default AnecdoteList