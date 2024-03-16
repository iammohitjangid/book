// BookCard.js
import {
  ExportOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import React from "react";
const { Meta } = Card;

const BookCard = ({ order, onAddToCart, cart, setQuantity }) => {
  const { name, image, title, description, price, _id } = order;

  return (
    <Card
      style={{
        // width: 300,
        padding: "2rem",
        marginTop: "1rem",
      }}
      cover={
        <img className="max-h-52	object-contain	" alt="example" src={image} />
      }
      actions={[
        <Button
          onClick={() => {
            setQuantity({
              book_id: _id,
              quantity: cart?.quantity ? cart?.quantity - 1 : 0,
            });
          }}
          type="primary"
          icon={<MinusCircleOutlined />}
          size={"large"}
        />,
        <p>{cart?.book_id === _id ? cart?.quantity || 0 : 0}</p>,
        <Button
          onClick={() => {
            setQuantity({
              book_id: _id,
              quantity: cart?.quantity ? cart?.quantity + 1 : 1,
            });
          }}
          type="primary"
          icon={<PlusCircleOutlined />}
          size={"large"}
        />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={title}
        name={name}
        description={
          <p className="max-h-[10rem] overflow-y-auto">{description}</p>
        }
      />
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">Rs: {price}</span>
        <Button
          onClick={() => onAddToCart()}
          type="default"
          icon={<ExportOutlined />}
          size={"large"}
        />
      </div>
    </Card>
  );
};

export default BookCard;
