import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';
import darkLightReducer from './reducers/darkLightReducer';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer', 'userReducer'],
};
const rootReducer = combineReducers({ 
  productReducer,
  categoryReducer,
  darkLightReducer,
  userReducer,
  cartReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const createStore = () => {
  return configureStore({
    reducer: persistedReducer
  })
}
const store = createStore()
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;

export { combineReducers, rootReducer, store };
