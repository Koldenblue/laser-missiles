import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import laserReducer from './laserSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    laser: laserReducer,
  }
});
