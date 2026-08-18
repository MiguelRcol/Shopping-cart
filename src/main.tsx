import "@fontsource/geist-sans/latin-400.css";
import "@fontsource/geist-sans/latin-500.css";
import "@fontsource/geist-sans/latin-600.css";
import "@fontsource/geist-sans/latin-700.css";
import "@fontsource/geist-sans/latin-800.css";
import "@fontsource/geist-sans/latin-900.css";
import "@fontsource/geist-mono/latin-400.css";
import "@fontsource/geist-mono/latin-500.css";
import "@fontsource/geist-mono/latin-600.css";
import "@fontsource/geist-mono/latin-700.css";
import "@fontsource/geist-mono/latin-800.css";
import "@fontsource/geist-mono/latin-900.css";
import "@fontsource/geist-mono/latin-ext-400.css";
import "@fontsource/geist-mono/latin-ext-500.css";
import "@fontsource/geist-mono/latin-ext-600.css";
import "@fontsource/geist-mono/latin-ext-700.css";
import "@fontsource/geist-mono/latin-ext-800.css";
import "@fontsource/geist-mono/latin-ext-900.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/globals.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element #root was not found");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
