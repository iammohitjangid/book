// BookCard.js
import React from 'react';
import { SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const BookCard = ({ coverImage, title, description, price }) => {
  return (
    <div className="m-9">
      <Card
        style={{
          width: 300,
        }}
        cover={<img alt="example" src={coverImage} />}
        actions={[<SettingOutlined key="setting" />, <ShoppingCartOutlined />]}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title={title}
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
