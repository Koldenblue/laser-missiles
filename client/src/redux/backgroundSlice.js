import { createSlice } from '@reduxjs/toolkit';


export const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    background:'rgb(98, 168, 113)'
  },
  reducers: {
    setBackground: (state, action) => {
      state.background = action.payload;
    }
  }
});

export const selectBackground = state => state.background.background;

export const { setBackground } = backgroundSlice.actions;

export default backgroundSlice.reducer;