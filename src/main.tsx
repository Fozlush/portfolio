import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="wrapper">
      <div className="container">
        <App />
      </div>
    </div>
  </StrictMode>
);
