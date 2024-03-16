import { Outlet } from "react-router-dom";

import { Row, Space } from "antd";
import Hero from "../components/hero/Hero";

const AuthLayout = () => {
  return (
    <>
      <Hero
        heading="Welcome to Book Emporium"
        description="Explore and buy from our vast collection of books"
        // button="Get Started"
      />
      <Row className="items-center h-screen justify-center mt-[-7rem]">
        <Space direction="vertical" size="large">
          <Outlet />
        </Space>
      </Row>
    </>
  );
};

export default AuthLayout;
