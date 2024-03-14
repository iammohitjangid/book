import { Button, Card, Form, Input, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
import API from "../../services/apiAxios";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await API.post("/api/v1/auth/login", values);
      console.log(response);
      Cookies.set("authToken", response?.data?.data?.userToken);
      Cookies.set("role", response?.data?.data?.isAdmin ? "admin" : "user");
      message.destroy();
      message.success(response?.data?.message);
      navigate("/user", { replace: true });
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };
  // email
  // :
  // "jaxinohy@mailinator.com"
  // name
  // :
  // "Leroy Berger"
  // password
  // :
  // "Pa$$w0rd!"
  return (
    <Card className=" border-0 w-[30rem] md:shadow-md ">
      {/* <h1 className="my-10 text-center text-4xl font-extrabold leading-10 tracking-tight text-indigo-600">
        Welcome to Book Emporium
      </h1> */}
      <Card.Meta
        title={<Typography.Title level={3}>Sign In</Typography.Title>}
        className=" mb-3"
      />

      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Username"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          extra={
            <Link to="/auth/sign-up" className="p-2">
              Create a new account.
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
