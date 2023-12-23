import React from "react";
import { createRoot } from "react-dom/client"; // Corrected import
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container); // Use createRoot to create a root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
