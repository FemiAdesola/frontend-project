import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';
import darkLightReducer from './reducers/darkLightReducer';
import userReducer from './reducers/userReducer';
// import cartReducer from './methods/cartMethod';
import cartReducer from './reducers/cartReducer';

const persistConfig = {
  key: 'root',
  storage,
};



export const createStore = () => {
  return configureStore({
    reducer: {
      productReducer,
      categoryReducer,
      darkLightReducer,
      userReducer,
      cartReducer
    },
  });
}


const persistedReducer = persistReducer(persistConfig, createStore);

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
