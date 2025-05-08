import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "../src/App";
import { Provider } from "react-redux";
import { store } from "./store";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import { Home } from "./routes/Home";
import { About } from "./component/about/About";
import { ShowDetail } from "./component/showDetail/ShowDetail";
import { PurchaseProduct } from "./component/purchase/PurchaseProduct";
import { ErrorPage } from "./routes/ErrorPage";
import { Login } from "./routes/login/Login";
import { Register } from "./routes/register/Register.jsx";
import { Profile } from "./routes/profile/Profile.jsx";
import { RequireAuth } from "./component/RequireAuth";

const routes = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product/:id",
        element: <ShowDetail />,
      },
      {
        path: "purchase",
        element: <PurchaseProduct />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: (
          <RequireAuth>
            {" "}
            <Profile />{" "}
          </RequireAuth>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
//{/* <RouterProvider router={routes} /> */}
