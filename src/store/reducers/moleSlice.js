import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { top: '44.92vw', left: '14.07vw' },
};

export const moleSlice = createSlice({
  name: 'mole',
  initialState,
  reducers: {
    setCoords: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCoords } = moleSlice.actions;

export default moleSlice.reducer;
