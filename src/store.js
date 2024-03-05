import { configureStore } from '@reduxjs/toolkit'
import itemsResucer from "./fearures/itemsSlice"

export const store = configureStore({
  reducer: {
    items: itemsResucer
  },
})