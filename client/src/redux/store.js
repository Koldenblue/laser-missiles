import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import laserReducer from './laserSlice';
import backgroundReducer from './backgroundSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    laser: laserReducer,
    background: backgroundReducer,
  }
});
