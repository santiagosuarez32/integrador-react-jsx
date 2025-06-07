// src/index.js o src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // para React 18
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
