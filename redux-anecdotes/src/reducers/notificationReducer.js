import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateNotification(state, action) {
      const content = action.payload
      return {
        ...state,
        text: content
      }
    },
    updateTimer(state, action) {
      const content = action.payload
      clearTimeout(state.timer)
      return {
        ...state,
        timer: content
      }
    }
  }
})

export const { updateNotification, updateTimer } = notificationSlice.actions

export const setNotification = (content, seconds) => {
  return dispatch => {
    dispatch(updateNotification(content))
    const timeout = setTimeout(() => dispatch(updateNotification('')), seconds * 1000)
    dispatch(updateTimer(timeout))
  }
}

export default notificationSlice.reducer