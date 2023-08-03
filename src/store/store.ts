import { configureStore } from "@reduxjs/toolkit";
import ttnReducer from '../features/ttn/ttnSlice'


export const store = configureStore({
  reducer: {
    ttn: ttnReducer,
  },

});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
