// src/Component/Reduxstore.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userDataReducer from './Reduxtoolkit'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserDataReducer = persistReducer(persistConfig, userDataReducer);

const store = configureStore({
  reducer: {
    user: persistedUserDataReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
