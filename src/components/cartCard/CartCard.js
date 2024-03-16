// BookCard.js
import React from 'react';
import { SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const CartCard = ({ order }) => {
  const { amount, items, user_id } = order;
  const { name, email } = user_id;
  return (
    <div className="m-9 h-full">
      <Card
        style={{
          width: 300,
        }}
        actions={[<SettingOutlined key="setting" />, <ShoppingCartOutlined />]}
      >
        <p>Name :- {name}</p>
        <p>Email :- {email}</p>
        <p>Amount :- {amount}</p>
        {items.map((item) => (
          <>
            <p>Book Name :- {item.book.name}</p>
            <p>Total Items :- {item.quantity}</p>
          </>
        ))}
      </Card>
    </div>
  );
};

export default CartCard;
