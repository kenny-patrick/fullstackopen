import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    createNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return ''
    }
  }
})

export const { createNotification, removeNotification } = notificationSlice.actions

export const setNotification = message => {
  return dispatch => {
    dispatch(createNotification(message))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }
}

export default notificationSlice.reducer