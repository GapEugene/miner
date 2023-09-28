import { createSlice } from '@reduxjs/toolkit';

import { MOLE_STATES } from '../../utilities/constants';

const initialState = {
  value: {
    coords: {
      top: '44.92vw',
      left: '14.07vw'
    },
    state: MOLE_STATES.IDLE,
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
    idle: (state) => {
      state.value = MOLE_STATES.IDLE
    },
    moving: (state) => {
      state.value = MOLE_STATES.MOVING
    },
  },
});

export const { setCoords, resetCoords } = moleSlice.actions;

export default moleSlice.reducer;
