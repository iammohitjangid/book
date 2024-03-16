import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
  Modal,
} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import API from "../../services/apiAxios";

const AddBook = ({ open, setOpen }) => {
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  console.log("777777777", authors);
  const fetchAuthors = async () => {
    try {
      const response = await API.get("api/v1/author");
      setAuthors(response?.data?.data?.books);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await API.get("api/v1/category");
      setCategories(response?.data?.data?.books);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchAuthors();
    fetchCategories();
  }, []);

  const onFinish = (values) => {
    console.log("Received values:", values);
    // Here you can handle form submission, e.g., submit to server
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Basic Modal"
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <Form
        name="admin_book_form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          categories: [], // Initial value for categories as an empty array
        }}
      >
        <Form.Item
          label="Book Name"
          name="bookName"
          rules={[{ required: true, message: "Please enter book name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter description" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter price" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Categories"
          name="categories"
          rules={[{ required: true, message: "Please select categories" }]}
        >
          <Select mode="multiple" placeholder="Select categories">
            <Option value="fiction">Fiction</Option>
            <Option value="non-fiction">Non-Fiction</Option>
            <Option value="fantasy">Fantasy</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>

        <Form.Item
          label="Author ID"
          name="authorId"
          rules={[{ required: true, message: "Please enter author ID" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) return e;
            return e && e.fileList;
          }}
          extra="Upload book image"
        >
          <Upload name="logo" listType="picture">
            <Button icon={<PlusCircleOutlined />} />
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddBook;
