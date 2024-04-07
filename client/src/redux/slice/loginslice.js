import { createSlice } from '@reduxjs/toolkit'

export const loginslice = createSlice({
  name: 'login',
  initialState: {
    value: false,
  },
  reducers: {
    isLoggedIn: (state) => {
      state.value=!state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { isLoggedIn} = loginslice.actions

export default loginslice.reducer