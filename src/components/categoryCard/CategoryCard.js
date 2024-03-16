import React from 'react';
import { SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const CategoryCard = ({ category }) => {
  const { name, image } = category;
  console.log('7>>>>>>>', name);

  return (
    <div className="m-9 flex h-full">
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
        />
        <p>Name: {name}</p>
      </Card>
    </div>
  );
};

export default CategoryCard;
