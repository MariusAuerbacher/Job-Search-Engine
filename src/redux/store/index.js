import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'
import jobReducer from '../reducers/jobReducer'

const store = configureStore({
  reducer: combineReducers({
    favouriteReducer: favouriteReducer,
    jobReducer: jobReducer,
  }),
})

export default store
