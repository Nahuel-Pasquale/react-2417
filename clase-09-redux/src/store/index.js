import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../slices/counterSlice'
import menuReducer from "../slices/menuReducer";

const store = configureStore({
  reducer: {
    contador: counterSlice,
    menu: menuReducer,
  },
});

export default store;