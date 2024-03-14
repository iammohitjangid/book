import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: reducers,
});


