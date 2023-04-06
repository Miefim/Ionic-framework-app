import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import beersSlice from "./slices/BeersSlice";

export const store = configureStore({
   reducer: {
      beersSlice,
   }
})

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()