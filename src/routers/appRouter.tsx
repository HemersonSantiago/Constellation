import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { List } from "../pages/List/list";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
]);
