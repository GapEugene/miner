import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'READY_TO_PLAY',
};

const flows = {
  READY_TO_PLAY: 'READY_TO_PLAY',
  TILE_CHOOSE: 'TILE_CHOOSE',
  SUCCESS: 'SUCCESS',
  DEFEAT: 'DEFAT',
  WIN: 'WIN',
};

export const flowSlice = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    play: (state) => {
      state.value = flows.TILE_CHOOSE
    },
  },
});

export const { play } = flowSlice.actions;

export default flowSlice.reducer;
