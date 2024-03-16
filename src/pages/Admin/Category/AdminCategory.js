import { Button, Card, Flex, Form, Input, Modal, Popconfirm, Table, Tooltip, Typography, message } from 'antd';
import Hero from '../../../components/hero/Hero';
import API from '../../../services/apiAxios';
import React, { useEffect, useState } from 'react';
import { CustomAvatar } from '../../../components/CustomAvatar';
import dayjs from 'dayjs';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { async } from 'q';

const AdminBook = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [count, setCount] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const [form] = useForm();

  const handleFormSubmit = async (values) => {
    try {
      await API.post('api/v1/category', values);
      message.destroy();
      message.success('Category Successfully created !');
      fetchOrders();
      setShowModal(!showModal);
      form.resetFields();
    } catch (error) {
      console.log(error, 'error')
    }
  }

  const fetchOrders = async () => {
    try {
      const response = await API.get(`api/v1/category?limit=${pageSize}&page=${currentPage}`);
      setCategoryData(response?.data?.data?.getCategory);
      setCount(response?.data?.data?.count);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  const deleteCategory = async (id) => {
    await API.delete(`api/v1/category/${id}`).then(() => fetchOrders());
  }

  useEffect(() => {
    fetchOrders();
  }, [pageSize, currentPage]);

  const data = categoryData?.map((row, index) => {
    return {
      id: row._id,
      s_no: index + 1,
      name: row.name,
      image_url: row.image,
      created_at: dayjs(row.created_at).format('DD/MM/YYYY (HH:MM)'),
    }
  });

  const columns = [
    {
      title: 'S.no.',
      dataIndex: 's_no',
    },
    {
      title: 'Book',
      dataIndex: 'book',
      render: (_, render) => (
        <CustomAvatar
          size="default"
          style={{ cursor: "pointer" }}
          name={render.name}
        />
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Flex gap="small" horizontal>
          <Popconfirm
            title="Delete Category"
            description="Are you sure ?"
            onConfirm={() => deleteCategory(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete" placement='bottom'>
              <Button danger icon={<DeleteOutlined />} size={'small'} />
            </Tooltip>
          </Popconfirm>
        </Flex>
      ),
    }
  ];

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
    <div>
      <Hero heading="Category" description="Check out new Categories" />
      <Flex justify='flex-end' className='mt-4 mr-4'>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={() => setShowModal(!showModal)}
        >
          Add Category
        </Button>
      </Flex>
      <div className='p-5'>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{
            total: count,
            showSizeChanger: true,
            pageSize: pageSize,
            pageSizeOptions: [2, 5, 10, 20, 100],
            onChange: (page, newPageSize) => {
              setCurrentPage(page)
              setPageSize(newPageSize)
            },
            showTotal: (total) => (
              <Typography.Title level={5}>Total : {total}</Typography.Title>),
          }}
        />
      </div>

      <Modal
        title="Add Category"
        open={showModal}
        onCancel={() => setShowModal(!showModal)}
        width={400}
        footer=""
      >
        <Form
          {...formItemLayout}
          form={form}
          style={{ marginTop: '2rem' }}
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter name",
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
    </div>
  );
};

export default AdminBook;
