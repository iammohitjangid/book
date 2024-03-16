import { message } from 'antd';
import Hero from '../../../components/hero/Hero';
import API from '../../../services/apiAxios';
import React, { useEffect, useState } from 'react';
import { ForEach } from '../../../components/ForEach';
import BookCard from '../../../components/bookCard/BookCard';
import CartCard from '../../../components/cartCard/CartCard';

const AdminCart = () => {
  const [cartData, setCartData] = useState([]);
  const fetchOrders = async () => {
    try {
      const response = await API.get('api/v1/cart/admin');
      setCartData(response?.data?.data);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <Hero heading="Books" description="Check out new Books" />
      <div className="flex flex-row flex-wrap justify-center 	p-8">
        <ForEach
          of={cartData}
          render={(cart, index) => <CartCard key={index} order={cart} />}
        />
      </div>
    </div>
  );
};

export default AdminCart;
