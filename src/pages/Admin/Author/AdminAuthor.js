import { message } from 'antd';
import Hero from '../../../components/hero/Hero';
import API from '../../../services/apiAxios';
import React, { useEffect, useState } from 'react';
import { ForEach } from '../../../components/ForEach';
import BookCard from '../../../components/bookCard/BookCard';

const AdminBook = () => {
  const [authorData, setAuthorData] = useState([]);
  const fetchOrders = async () => {
    try {
      const response = await API.get('api/v1/author');
      setAuthorData(response?.data?.data?.createdAuthor);
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
          of={authorData}
          render={(author, index) => <BookCard key={index} order={author} />}
        />
      </div>
    </div>
  );
};

export default AdminBook;
