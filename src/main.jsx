import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
