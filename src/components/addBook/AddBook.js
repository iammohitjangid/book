import { Button, Form, Input, message, Modal, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import API from "../../services/apiAxios";
import { useForm } from "antd/es/form/Form";

const AddBook = ({ open, setOpen, categoryData, authorData }) => {
  const [form] = useForm();
  const { Option } = Select;

  const handleFormSubmit = async (values) => {
    try {
      await API.post("api/v1/book", values);
      message.destroy();
      message.success("Author Successfully created !");
      form.resetFields();
      setOpen(false);
    } catch (error) {
      message.destroy();
      message.success(error);
    }
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 7,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  return (
    <Modal
      title="Basic Modal"
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <Form
        {...formItemLayout}
        form={form}
        style={{ marginTop: "2rem" }}
        onFinish={handleFormSubmit}
      >
        <Form.Item
          name="name"
          label="Book Name"
          rules={[
            {
              required: true,
              message: "Please enter book name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image URL"
          rules={[
            {
              required: true,
              message: "Please enter image url",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Book Price"
          rules={[
            {
              required: true,
              message: "Please enter image url",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Categories"
          name="catergories"
          rules={[
            { required: true, message: "Please select at least one category!" },
          ]}
        >
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select or type categories"
          >
            {categoryData?.map((cat) => {
              return <Option value={cat?._id}>{cat?.name}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="Author"
          name="author_id"
          rules={[{ required: true, message: "Please select an author!" }]}
        >
          <Select placeholder="Select an author">
            {authorData?.map((cat) => {
              return <Option value={cat?._id}>{cat?.name}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please enter description",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 18,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddBook;
