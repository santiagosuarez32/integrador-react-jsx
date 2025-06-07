// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    // Agrega aquí otros reducers si los tienes
  },
});

export default store;
