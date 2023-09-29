import { createSlice } from '@reduxjs/toolkit';
import { MOLE_STATES } from '../../utilities/constants';

const initialState = {
  value: {
    coords: {
      top: '44.92vw',
      left: '14.07vw'
    },
    status: MOLE_STATES.IDLE,
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
    stand: (state) => {
      state.value.status = MOLE_STATES.IDLE;
    },
    move: (state) => {
      state.value.status = MOLE_STATES.MOVING;
    },
    moveEnd: (state) => {
      state.value.status = MOLE_STATES.GLITCH_OUT;
    },
    death: (state) => {
      state.value.status = MOLE_STATES.DEATH;
    },
    win: (state) => {
      state.value.status = MOLE_STATES.WIN;
    },
  },
});

export const { setCoords, resetCoords, stand, move, moveEnd, death, win } = moleSlice.actions;

export default moleSlice.reducer;
