import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginslice'; // Assuming this is the correct import
import projectIdReducer from './slice/projectIdSlice';

export default configureStore({
  reducer: {
    login: loginSlice,
    projectId: projectIdReducer, // Corrected import and reducer key name
  },
});
