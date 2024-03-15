import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from 'react-router-dom';
import Layout from '../layout/Layout';
import UserLayout from '../layout/UserLayout';
import { admin } from './admin';
import { user } from './user';
import { publicRoutes } from './public';
import AuthLayout from '../layout/AuthLayout';
import Cookies from 'js-cookie';

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>Error Occured</div>}>
      <Route
        path="/admin"
        loader={() => {
          if (!Cookies.get('authToken')) {
            return redirect('/auth/login');
          } else if (Cookies.get('role') === 'user') {
            return redirect('/');
          } else {
            return null;
          }
        }}
        element={<Layout />}
      >
        {admin}
      </Route>
      <Route
        path="/"
        loader={() => {
          if (!Cookies.get('authToken')) {
            return redirect('/auth/login');
          } else if (Cookies.get('role') === 'admin') {
            return redirect('/admin');
          } else {
            return null;
          }
        }}
        element={<UserLayout />}
      >
        {user}
      </Route>
      <Route
        path={'/auth'}
        loader={() => {
          if (Cookies.get('authToken')) {
            if (Cookies.get('role') === 'admin') {
              return redirect('/admin');
            } else {
              return redirect('/');
            }
          } else {
            return null;
          }
        }}
        element={<AuthLayout />}
      >
        {publicRoutes}
      </Route>
    </Route>
  )
);
