import React, { useEffect } from "react";
import NavigationItem from "./navigationItem/NavigationItem";
import { Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../store/Global/action";
export const Items = ({ hideOnMobile }) => {
  return (
    <div className="flex sm:flex-row flex-col items-baseline space-x-4">
      <NavigationItem exact link="/">
        Home
      </NavigationItem>
      <NavigationItem link="/admin/book">Books</NavigationItem>
      <NavigationItem link="/admin/category">Category</NavigationItem>
      <NavigationItem link="/admin/author">Authors</NavigationItem>
      {/* <NavigationItem link="/admin/cart">Cart</NavigationItem> */}
    </div>
  );
};

export const UserItems = ({ hideOnMobile }) => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div className="flex sm:flex-row flex-col items-baseline space-x-4">
      <NavigationItem exact link="/user">
        Home
      </NavigationItem>
      {/* <NavigationItem exact link="/user/book">
        Books
      </NavigationItem> */}
      <Badge count={count}>
        <NavigationItem exact link="/user/cart">
          Cart
        </NavigationItem>
      </Badge>
    </div>
  );
};
