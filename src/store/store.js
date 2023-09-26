import { configureStore } from '@reduxjs/toolkit';

import flowReducer from './reducers/flowSlice';

export const store = configureStore({
  reducer: {
    flow: flowReducer,
  },
});
