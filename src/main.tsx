import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/provider/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="togaragim-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
