// BookCard.js
import React from 'react';
import { SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const AuthorCard = ({ author }) => {
  const { name, image, title, description, price } = author;
  return (
    <div className="m-9 h-full">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img className="max-h-52	object-contain	" alt="example" src={image} />
        }
        actions={[<SettingOutlined key="setting" />, <ShoppingCartOutlined />]}
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

export default AuthorCard;
