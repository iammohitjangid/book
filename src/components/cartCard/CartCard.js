// BookCard.js
import React from "react";

import { Avatar, Button, Card, Col, Row, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ForEach } from "../ForEach/index";
import API from "../../services/apiAxios";
import { getCart } from "../../store/Global/action";
import { useNavigate } from "react-router";
const { Meta } = Card;

const CartCard = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onFinish = async () => {
    try {
      const response = await API.post("/api/v1/order/check-out");
      console.log(response);
      dispatch(getCart());
      message.destroy();
      message.success("Order has been placed successfully");
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error, "error");
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <div className="p-[2rem]">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <ForEach
            of={cart?.items || []}
            render={(book) => (
              <Col
                className="gutter-row"
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <BookCard key={book?._id} order={book} />
              </Col>
            )}
          />
        </Row>
      </div>
      <div className="flex gap-[4rem] items-center justify-end">
        <p>Total Amount: {cart?.amount}</p>
        <Button
          type="primary"
          onClick={() => {
            onFinish();
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartCard;

const BookCard = ({ order }) => {
  const { book, quantity } = order;

  return (
    <Card
      style={{
        // width: 300,
        padding: "2rem",
        marginTop: "1rem",
      }}
      cover={
        <img
          className="max-h-52	object-contain	"
          alt="example"
          src={book?.image}
        />
      }
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={book?.title}
        name={book?.name}
        description={
          <p className="max-h-[10rem] overflow-y-auto">{book?.description}</p>
        }
      />
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">Rs: {book?.price}</span>
        <span className="text-lg font-semibold">Quantity: {quantity}</span>
      </div>
    </Card>
  );
};
