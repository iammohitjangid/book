import { useEffect, useState } from "react";
import { ForEach } from "../../../components/ForEach";
import BookCard from "../../../components/bookCard/BookCard";
import Hero from "../../../components/hero/Hero";
import API from "../../../services/apiAxios";
import { Col, Row, message } from "antd";
import { useDispatch } from "react-redux";
import { getCart } from "../../../store/Global/action";

const UserHome = () => {
  const [bookData, setBookData] = useState([]);
  const dispatch = useDispatch();
  const [cart, setCart] = useState({
    book_id: "",
    quantity: 0,
  });
  const fetchOrders = async () => {
    try {
      const response = await API.get("api/v1/book");
      setBookData(response?.data?.data?.books);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const addToCart = async (values) => {
    try {
      const response = await API.post("api/v1/cart/add-to-cart", values);
      console.log(response);
      dispatch(getCart());
      message.destroy();
      message.success("Added to cart successfully!");
      setCart({ book_id: "", quantity: 0 });
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <Hero
        heading="Welcome to Book Emporium"
        description="Explore and buy from our vast collection of books"
        button="Get Started"
      />
      <div className="p-[2rem]">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <ForEach
            of={bookData}
            render={(book) => (
              <Col
                className="gutter-row"
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <BookCard
                  onAddToCart={() => {
                    addToCart(cart);
                  }}
                  setQuantity={(data) => {
                    console.log(data);
                    if (book?._id === data?.book_id) {
                      setCart(data);
                    }
                  }}
                  cart={cart}
                  key={book?._id}
                  order={book}
                />
              </Col>
            )}
          />
        </Row>
      </div>
    </div>
  );
};

export default UserHome;
