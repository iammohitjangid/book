import { message } from 'antd';
import Hero from '../../../components/hero/Hero';
import API from '../../../services/apiAxios';
import React, { useEffect, useState } from 'react';
import OrderCard from '../../../components/orderCard/OrderCard';
import { ForEach } from '../../../components/ForEach';

const AdminCart = () => {
  const [orderData, setOrderData] = useState([]);
  const fetchOrders = async () => {
    try {
      const response = await API.get('api/v1/order');
      setOrderData(response?.data?.data?.orders);
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
      <Hero
        heading="Welcome Back Admin"
        description="Check out new Orders from Users"
      />
      <div className="flex flex-row flex-wrap p-8">
        <ForEach
          of={orderData}
          render={(order, index) => <OrderCard key={index} order={order} />}
        />
      </div>
    </div>
  );
};

export default AdminCart;
