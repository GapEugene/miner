import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    coords: {
      top: '44.92vw',
      left: '14.07vw'
    },
  },
};

export const moleSlice = createSlice({
  name: 'mole',
  initialState,
  reducers: {
    resetCoords: (state) => {
      state.value.coords = initialState.value.coords;
    },
    setCoords: (state, action) => {
      state.value.coords = action.payload;
    },
  },
});

export const { setCoords, resetCoords } = moleSlice.actions;

export default moleSlice.reducer;
