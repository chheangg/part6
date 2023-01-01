import { connect } from "react-redux"
import {  voteAnecdote } from "../reducers/anecdoteReducer"
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

const AnecdoteList = ({anecdotes, voteAnecdote, setNotification}) => {
  // const anecdotes = useSelector(({anecdotes, filter}) => {
  //   if (anecdotes.length > 0) {
  //     return [...anecdotes]
  //     .filter(anec => anec.content.includes(filter))
  //     .sort((prev, next) => prev.votes > next.votes ? -1 : prev.votes === next.votes ? 0 : 1)
  //   } else {
  //     return []
  //   }
  // })
  // const dispatch = useDispatch()

  const vote = async (id, content) => {
    voteAnecdote(id, content)
    setNotification(`you voted for "${content.content}"`, 5)
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

const mapStateToProps = ({anecdotes, filter}) => {
  const newAnecdotes = anecdotes.length > 0 ? 
    [...anecdotes]
      .filter(anec => anec.content.includes(filter))
      .sort((prev, next) => prev.votes > next.votes ? -1 : prev.votes === next.votes ? 0 : 1)
    : [];
  return {
    anecdotes: newAnecdotes
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

const connectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default connectedAnecdoteList