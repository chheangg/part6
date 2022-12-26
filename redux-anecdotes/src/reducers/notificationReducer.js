import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    msg: 'default test'
  }
]

const getId = () => Number((100000 * Math.random()).toFixed(0))

const makeNotificationObj = (msg) => { 
  return { id: getId, msg }
}

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, action) {
      const content = action.payload
      state.push(makeNotificationObj(content))
    }
  }
})

export const { addNotification } = notificationSlice.actions
export default notificationSlice.reducer