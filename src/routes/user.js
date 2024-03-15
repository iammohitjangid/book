import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/User/Home/UserHome';
import Book from '../pages/User/Books/UserBooks';
import Cart from '../pages/User/Cart/UserCart';

export const user = (
  <>
    <Route path="/user" element={<Home />} />
    <Route path="/user/book" element={<Book />} />
    <Route path="/user/cart" element={<Cart />} />
  </>
);
