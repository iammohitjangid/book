import React from 'react';
import { Route } from 'react-router-dom';
import Author from '../pages/Admin/Author/AdminAuthor';
import Book from '../pages/Admin/Books/AdminBook';
import Cart from '../pages/Admin/Cart/AdminCart';
import Category from '../pages/Admin/Category/AdminCategory';
import Order from '../pages/Admin/Order/AdminOrder';
import Home from '../pages/Admin/Home/AdminHome';
export const admin = (
  <>
    <Route path="/admin" element={<Home />} />
    <Route path="/admin/author" element={<Author />} />
    <Route path="/admin/book" element={<Book />} />
    <Route path="/admin/cart" element={<Cart />} />
    <Route path="/admin/category" element={<Category />} />
    <Route path="/admin/order" element={<Order />} />
  </>
);
