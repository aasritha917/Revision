import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { FormProvider } from "./context/FormContext";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <FormProvider>
    <App />
  </FormProvider>
);
