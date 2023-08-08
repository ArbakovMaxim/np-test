import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ttnReducer, { ttnLocalStorageMiddleware } from '../features/ttn/ttnSlice'


export const store = configureStore({
  reducer: {
    ttn: ttnReducer,
  },
  middleware: [...getDefaultMiddleware(), ttnLocalStorageMiddleware],
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
