import { useState } from "react";

import { Card, Form, Input, Button, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    console.log(values);
    // async (data) => {
    //   console.log(data);
    //   Cookies.set("authToken", data?.data?.data?.accessToken);
    //   Cookies.set("role", data?.data?.data?.role);
    //   const userData = await api.get("/user/getUser");
    //   const userName =
    //     userData?.data?.data?.firstName + " " + userData?.data?.data?.lastName;
    //   const avatar = userData?.data?.data?.profilePicture;
    //   Cookies.set("userName", userName);
    //   Cookies.set("userProfile", avatar);
    //   // handle successful login, e.g. save token, navigate to another page
    //   navigate("/", { replace: true });
    // };
  };

  return (
    <Card className=" border-0 w-[30rem] md:shadow-md ">
      <h1 className="my-10 text-center text-4xl font-extrabold leading-10 tracking-tight text-indigo-600">
        Welcome to Book Emporium
      </h1>
      <Card.Meta
        title={<Typography.Title level={3}>Sign In</Typography.Title>}
        className=" mb-3"
      />

      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Username"
          name="identifier"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          extra={
            <Link to="/auth/forgot-password" className="p-2">
              Forgot Password
            </Link>
          }
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            block
            type="primary"
            htmlType="submit"
            loading={false}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
