// BookCard.js
import React from 'react';
import { SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card, InputNumber } from 'antd';
const { Meta } = Card;

const BookCard = ({ order }) => {
  const { name, image, title, description, price } = order;
  return (
    <div className="m-9 h-full">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img className="max-h-52	object-contain	" alt="example" src={image} />
        }
        actions={[
          <InputNumber min={0} defaultValue={0} style={{ width: 100 }} />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title={title}
          name={name}
          description={description}
        />
        <div className="flex justify-center items-center mt-4">
          <span className="text-lg font-semibold">{price}</span>
        </div>
      </Card>
    </div>
  );
};

export default BookCard;
