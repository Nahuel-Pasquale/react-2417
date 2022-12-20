import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counterReducer";


const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;

// tengo mis reducers en archivos aparte, y los centralizo en un unico reducer
// a travez del combineReducers
