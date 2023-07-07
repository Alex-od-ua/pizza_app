import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart';
import dataReducer from './data/slice';
import filterReducer from './filter/filter-slice';

const persistConfig = {
  key: 'root',
  storage,
  //   whitelist: [''],
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  auth: persistedCartReducer,
  contacts: dataReducer,
  filter: filterReducer,
});

export default rootReducer;

export const persistedReducer = persistReducer(persistConfig, rootReducer);
