import { Outlet } from "react-router-dom";

import Logo from "../assets/logo.png";
import { Col, Row, Space } from "antd";

const AuthLayout = () => {
  return (
    <Row className="items-center h-screen justify-center">
      <Space direction="vertical" size="large">
        <Outlet />
      </Space>
    </Row>
  );
};

export default AuthLayout;
