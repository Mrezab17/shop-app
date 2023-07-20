import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as ReactDOM from "react-dom/client";

import { Suspense, lazy } from "react";

const App = lazy(() => import("./App"));
const Home = lazy(() => import("./pages/Home"));
const AddToTable = lazy(() => import("./pages/AddToTable"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />, // this error should be rendered inside the <App />
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <AddToTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
