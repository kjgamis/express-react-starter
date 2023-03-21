import { configureStore } from '@reduxjs/toolkit'
import surveyReducer from './survey'

export const store = configureStore({
  reducer: {
    survey: surveyReducer
  },
})
