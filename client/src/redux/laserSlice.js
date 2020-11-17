import { createSlice } from '@reduxjs/toolkit';

export const laserSlice = createSlice({
  name: 'laser',
  initialState: {
    firing: false,
    firingTwo: false,
    clickedFirstClick: false
  },
  reducers: {
    fireLaser: (state) => {
      state.firing = !state.firing;
      console.log('fired')
    },
    fireLaserTwo: (state) => {
      state.firingTwo = !state.firingTwo;
      console.log('laser two fired')
    },
    firstClick: (state) => {
      state.clickedFirstClick = !state.clickedFirstClick
    }
  }
});

export const selectFiring = state => state.laser.firing;
export const selectFiringTwo = state => state.laser.firingTwo;
export const selectClickedFirstClick = state => state.laser.clickedFirstClick;

export const { fireLaser, fireLaserTwo, firstClick } = laserSlice.actions;

export default laserSlice.reducer;