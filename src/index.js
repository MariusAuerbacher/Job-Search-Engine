import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import store from './redux/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'))

const persistedStore = persistStore(store)



root.render(

  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
    <App />
    </PersistGate>
  </Provider>
)
