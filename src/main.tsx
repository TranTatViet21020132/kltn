import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import '@/assets/fonts/Archivo-Regular.ttf'

import AppLoader from './app/AppLoader';
import React from "react";
import { ThemeProvider } from "@/hooks/useDarkMode";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppLoader />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
