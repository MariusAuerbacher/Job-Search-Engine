import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'
import jobReducer from '../reducers/jobReducer'
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' 
import { encryptTransform } from 'redux-persist-transform-encrypt'

const persistConfig = {
  storage: localStorage,
  key: 'root', // this brings the whole redux store into persistency
  
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
}

const reducer = combineReducers({
  favouriteReducer: favouriteReducer,
  jobReducer: jobReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export default store
