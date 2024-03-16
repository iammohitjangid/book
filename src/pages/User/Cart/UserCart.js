import { message } from 'antd';
import Hero from '../../../components/hero/Hero';
import API from '../../../services/apiAxios';
import React, { useEffect, useState } from 'react';
import { ForEach } from '../../../components/ForEach';
import CartCard from '../../../components/cartCard/CartCard';

const UserCart = () => {
  const [userCartData, setUserCartData] = useState([]);
  const fetchOrders = async () => {
    try {
      const response = await API.get('api/v1/cart/user');
      setUserCartData([response?.data?.data]);
      console.log(userCartData);
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
          of={userCartData}
          render={(cart, index) => <CartCard key={index} order={cart} />}
        />
      </div>
    </div>
  );
};

export default UserCart;
