import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.scss";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MobileProvider } from "./Context/MobileProvider";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import End from "./pages/End/End";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/game", element: <Game /> },
  { path: "/end", element: <End /> },
]);

root.render(
  <React.StrictMode>
    <MobileProvider >
      <RouterProvider router={router} />
      {/* <App /> */}
    </MobileProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
