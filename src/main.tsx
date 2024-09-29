import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";

import "./style.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("root element undefined");
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
