import React from 'react';
import NavigationItem from './navigationItem/NavigationItem';
export const Items = ({ hideOnMobile }) => {
  return (
    <div className="flex sm:flex-row flex-col items-baseline space-x-4">
      <NavigationItem exact link="/">
        Home
      </NavigationItem>
      <NavigationItem link="/admin/book">Books</NavigationItem>
      <NavigationItem link="/admin/category">Category</NavigationItem>
      <NavigationItem link="/admin/author">Authors</NavigationItem>
      <NavigationItem link="/admin/cart">Cart</NavigationItem>
    </div>
  );
};

export const UserItems = ({ hideOnMobile }) => {
  return (
    <div className="flex sm:flex-row flex-col items-baseline space-x-4">
      <NavigationItem exact link="/user">
        Home
      </NavigationItem>
      <NavigationItem exact link="/user/book">
        Books
      </NavigationItem>
      <NavigationItem exact link="/user/cart">
        Cart
      </NavigationItem>
    </div>
  );
};
