import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/farm-precise">
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  </StrictMode>
);
