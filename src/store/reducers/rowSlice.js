import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const rowSlice = createSlice({
  name: 'row',
  initialState,
  reducers: {
    nextRow: (state) => {
      state.value++;
    },
    restart: (state) => {
      state.value = 1;
    },
  },
});

export const { nextRow, restart } = rowSlice.actions;

export default rowSlice.reducer;
