import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home.jsx";
import Nested from "./pages/Nested.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/nested',
        element: <Nested></Nested>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </React.StrictMode>
  </Provider>
);
