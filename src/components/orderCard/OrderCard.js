import React from 'react';
import { Card } from 'antd';

const OrderCard = ({ order }) => {
  const { user_info, items, amount } = order;

  return (
    <div className="p-4">
      <Card
        title="Order Details"
        style={{ width: 300 }}
        cover={
          <img
            alt="book cover"
            src={items[0].book.image}
            style={{ maxHeight: 200, objectFit: 'cover' }}
          />
        }
      >
        <div className="font-semibold mb-4">
          <p className="text-lg">User:</p>
          <p className="text-base">{user_info?.name}</p>
          <p className="text-sm text-gray-600">{user_info?.email}</p>
        </div>
        <div className="font-semibold mb-4">
          <p className="text-lg">Total Amount:</p>
          <p className="text-base">Rs {amount}</p>
        </div>
        {/* Render items */}
        {items.map((item, index) => (
          <div key={index} className="mb-4">
            <img
              src={item.book.image}
              alt="book cover"
              style={{ maxHeight: 80, objectFit: 'cover' }}
            />
            <div className="flex justify-between mt-2">
              <div>
                <p className="text-lg font-semibold">{item.book.name}</p>
                <p className="text-sm text-gray-600">
                  Category:{' '}
                  {item.book.catergories
                    .map((category) => category.name)
                    .join(', ')}
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default OrderCard;
