// BookCard.js
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, message } from "antd";
import Cookies from "js-cookie";
import React from "react";
import API from "../../services/apiAxios";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../store/Global/action";
import { useDispatch } from "react-redux";

const { Meta } = Card;

const BookCard = ({ order, onAddToCart, cart, setQuantity }) => {
  const { name, image, title, description, price, _id } = order;
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const response = await API.delete(`/api/v1/book/${_id}`);
      dispatch(getCart());
      message.destroy();
      message.success("Order has been placed successfully");
      navigate("/admin/book", { replace: true });
    } catch (error) {
      console.log(error, "error");
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

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
      actions={
        Cookies.get("role") === "admin"
          ? null
          : [
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
                onClick={() =>
                  setQuantity({
                    book_id: _id,
                    quantity: cart?.quantity ? cart?.quantity + 1 : 1,
                  })
                }
                type="primary"
                icon={<PlusCircleOutlined />}
                size={"large"}
              />,
            ]
      }
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
        {Cookies.get("role") === "user" ? null : (
          <Button
            onClick={handleDelete}
            type="default"
            icon={<DeleteOutlined />}
            size={"large"}
          />
        )}
      </div>
    </Card>
  );
};

export default BookCard;
