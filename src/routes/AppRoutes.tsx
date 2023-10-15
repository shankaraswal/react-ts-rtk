import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Login } from "../app/login/Login";
import Home from "../app/home/Home";
import { ProductList } from "../app/product-list/ProductList";
import { PageNotFound } from "../app/404/PageNotFound";
import { Layout } from "../global/components/layout/Layout";
import { RootLayout } from "../global/components/layout/RootLayout";

export const routConfig = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Products",
    path: "/products",
    element: <ProductList />,
  },
  {
    name: null,
    path: "*",
    element: <PageNotFound />,
  },
];

export const appRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {routConfig.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Route>
  )
);
