import { Button, Card, Form, Input, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
import API from '../../services/apiAxios';

const SignUp = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await API.post('/api/v1/auth/create-user', {
        ...values,
        role_id: '65f0909b9c21d10bc0b2089d',
      });
      Cookies.set('authToken', response?.data?.data);
      Cookies.set('role', 'user');
      message.destroy();
      message.success(response?.data?.message);
      navigate('/', { replace: true });
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  return (
    <Card className="border-0 w-full md:w-[20rem] md:shadow-md mx-auto">
      <Card.Meta
        title={<Typography.Title level={3}>Sign Up</Typography.Title>}
        className=" mb-3"
      />
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          extra={
            <Link to="/auth/login" className="p-2">
              Already have an account? Login.
            </Link>
          }
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

export default SignUp;
