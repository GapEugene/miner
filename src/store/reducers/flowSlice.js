import { createSlice } from '@reduxjs/toolkit';

import { FLOW } from '../../utilities/constants';

const initialState = {
  value: FLOW.READY_TO_PLAY,
};

export const flowSlice = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    tileChoose: (state) => {
      state.value = FLOW.TILE_CHOOSE;
    },
    defeat: (state) => {
      state.value = FLOW.DEFEAT;
    },
    win: (state) => {
      state.value = FLOW.READY_TO_PLAY;
    },
  },
});

export const { tileChoose, defeat, win } = flowSlice.actions;

export default flowSlice.reducer;
