import { createSlice } from '@reduxjs/toolkit';

export const projectIdSlice = createSlice({
  name: 'projectId',
  initialState: {
    value: null,
  },
  reducers: {
    setProjectId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProjectId } = projectIdSlice.actions;

export default projectIdSlice.reducer;
