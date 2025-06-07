// src/store/navbarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: { menuOpen: false },
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = navbarSlice.actions;
export default navbarSlice.reducer;
