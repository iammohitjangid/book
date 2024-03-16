import { message } from 'antd';
import Hero from '../../../components/hero/Hero';
import API from '../../../services/apiAxios';
import React, { useEffect, useState } from 'react';
import { ForEach } from '../../../components/ForEach';
import CategoryCard from '../../../components/categoryCard/CategoryCard';

const AdminBook = () => {
  const [categoryData, setCategoryData] = useState([]);
  const fetchOrders = async () => {
    try {
      const response = await API.get('api/v1/category');
      setCategoryData(response?.data?.data?.getCategory);
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
      <Hero heading="Category" description="Check out new Categories" />
      <div className="flex flex-row flex-wrap justify-center 	p-8">
        <ForEach
          of={categoryData}
          render={(category, index) => (
            <CategoryCard key={index} category={category} />
          )}
        />
      </div>
    </div>
  );
};

export default AdminBook;
