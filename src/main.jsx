import React from "react";
import ReactDOM from "react-dom/client";
import Core from "./pages/Core.jsx";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Core />
    </BrowserRouter>
  </React.StrictMode>
);
