import { configureStore } from '@reduxjs/toolkit';

import flowReducer from './reducers/flowSlice';
import rowReducer from './reducers/rowSlice';

export const store = configureStore({
  reducer: {
    flow: flowReducer,
    row: rowReducer,
  },
});
