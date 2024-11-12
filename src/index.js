import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";

const router = createBrowserRouter([
  { element: <Home />, path: "/" },
  { element: <Home />, path: "/tarifs" },
  { element: <Home />, path: "/sales" },
  { element: <Home />, path: "/promo" },
  { element: <Home />, path: "/esim" },
  { element: <Home />, path: "/contact" },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
