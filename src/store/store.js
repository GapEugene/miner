import { configureStore } from '@reduxjs/toolkit';

import flowReducer from './reducers/flowSlice';
import rowReducer from './reducers/rowSlice';
import moleReducer from './reducers/moleSlice';
import sceneReducer from './reducers/sceneSlice';

export const store = configureStore({
  reducer: {
    flow: flowReducer,
    row: rowReducer,
    mole: moleReducer,
    scene: sceneReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
