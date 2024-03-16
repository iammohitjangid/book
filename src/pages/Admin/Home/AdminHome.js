import { message } from 'antd';
import Hero from '../../../components/hero/Hero';
import React, { useEffect, useState } from 'react';
import OrderCard from '../../../components/orderCard/OrderCard';
import { ForEach } from '../../../components/ForEach';

const AdminCart = () => {
  return (
    <div>
      <Hero
        heading="Welcome Back Admin"
        description="Check out new Orders from Users"
      />
      <div className="flex flex-row flex-wrap p-8">
        {/* <ForEach
          of={orderData}
          render={(order, index) => <OrderCard key={index} order={order} />}
        /> */}
        <OrderCard />
      </div>
    </div>
  );
};

export default AdminCart;
