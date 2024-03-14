import React from "react";
import { Route } from "react-router-dom";
import Author from "../pages/author/Author";
import Book from "../pages/books/Book";
import Cart from "../pages/cart/Cart";
import Category from "../pages/category/Category";
import Order from "../pages/order/Order";
export const admin = (
  <>
    <Route path="author" element={<Author />} />
    <Route path="book" element={<Book />} />
    <Route path="cart" element={<Cart />} />
    <Route path="category" element={<Category />} />
    <Route path="order" element={<Order />} />
  </>
);
