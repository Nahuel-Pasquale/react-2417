import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk'
import { reducers } from "../reducers";

export const store = configureStore({
  reducer: reducers,
  applyMiddleware: applyMiddleware(reduxThunk),
})

store.subscribe(() => console.log('cambie el estado'));