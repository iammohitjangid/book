import React from 'react';
import NavigationItem from './navigationItem/NavigationItem';
const Items = ({ hideOnMobile }) => {
  return (
    <div className={hideOnMobile ? 'hidden md:block' : 'flex'}>
      <div className="ml-10 flex items-baseline space-x-4">
        <NavigationItem exact link="/">
          Home
        </NavigationItem>
        <NavigationItem exact link="/book">
          Books
        </NavigationItem>
        <NavigationItem link="/category">Category</NavigationItem>
        <NavigationItem link="/author">Authors</NavigationItem>
        <NavigationItem link="/cart">Cart</NavigationItem>
      </div>
    </div>
  );
};

export default Items;
