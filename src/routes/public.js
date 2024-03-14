import React from "react";
import { Route } from "react-router-dom";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
export const publicRoutes = (
  <>
    <Route path="sign-up" element={<SignUp />} />
    <Route path="login" element={<Login />} />
  </>
);
