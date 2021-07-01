import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import {combineReducers} from "redux"; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage' 
import thunk from 'redux-thunk'
import counterReducer from '../components/counter/counterSlice';
import  authSliceReducer from '../components/Auth/authSlice';

const rootReducer = combineReducers({     
  auth: authSliceReducer,
  counter: counterReducer,
 });

 const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    'user'
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;

// let store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//     }
//   })
// });

// let persistor = persistStore(store);

// export {
//   store,
//   persistor,
// };

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
