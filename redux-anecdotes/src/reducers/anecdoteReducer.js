import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    update(state, action) {
      const content = action.payload
      return state.map(anec => parseInt(anec.id) === parseInt(content.id) ? content : anec)
    },
    createAnecdote(state, action) {
      const content = action.payload
      state.push(content)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { update, createAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer