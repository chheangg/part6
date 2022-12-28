import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdoteService"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    update(state, action) {
      const content = action.payload
      return state.map(anec => parseInt(anec.id) === parseInt(content.id) ? content : anec)
    },
    appendAnecdote(state, action) {
      const content = action.payload
      state.push(content)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { update, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(anecdote))
  }
}

export const voteAnecdote = (id, content) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(id, {...content, votes: content.votes + 1})
    dispatch(update(updatedAnecdote))
  }
}


export default anecdoteSlice.reducer