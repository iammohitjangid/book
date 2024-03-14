import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout/Layout";
import { admin } from "./admin";
import { publicRoutes } from "./public";
import AuthLayout from "../layout/AuthLayout";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>Error Occured</div>}>
      <Route
        path="/"
        loader={() => {
          return null;
        }}
        element={<Layout />}
      >
        {admin}
      </Route>
      <Route
        path="/user"
        loader={() => {
          return null;
        }}
        element={<Layout />}
      >
        {admin}
      </Route>
      <Route
        path={"/auth"}
        loader={() => {
          return null;
        }}
        element={<AuthLayout />}
      >
        {publicRoutes}
      </Route>
    </Route>
  )
);
