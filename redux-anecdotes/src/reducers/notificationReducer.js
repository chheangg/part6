import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateNotification(state, action) {
      const content = action.payload
      return content
    }
  }
})

export const { updateNotification } = notificationSlice.actions

export const setNotification = (content, seconds) => {
  return dispatch => {
    dispatch(updateNotification(content))
    setTimeout(() => dispatch(updateNotification('')), seconds * 1000)
  }
}

export default notificationSlice.reducer