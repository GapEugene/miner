import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { top: 0, left: 0 },
};

export const sceneSlice = createSlice({
  name: 'scene',
  initialState,
  reducers: {
    setCoords: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCoords } = sceneSlice.actions;

export default sceneSlice.reducer;
