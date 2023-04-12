import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import recommendedReducer from "./recommended/recommendedSlice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recommendedReducer,
})

const persistConfig = {
 key: 'root',
 storage,
 whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
 reducer: persistedReducer,
})

export const persistor = persistStore(store);