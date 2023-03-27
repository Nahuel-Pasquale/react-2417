import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMenu: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => {
      return { ...state, openMenu: !state.openMenu };
    },
  },
})

export const {
  toggleMenu
} = menuSlice.actions;

export default menuSlice.reducer;