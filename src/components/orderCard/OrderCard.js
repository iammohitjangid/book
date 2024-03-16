import { Button, Modal, Space, Table, message } from 'antd';
import React, { useEffect, useState } from 'react';
// import AddEditCoupon from './AddEditCoupon';
// import { useDeleteCoupon, useGetCoupons } from './api';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import API from '../../services/apiAxios';

const OrderCard = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const [order, setOrder] = useState([]);
  const fetchOrders = async () => {
    try {
      const response = await API.get('api/v1/order');
      setOrder(response?.data?.data?.orders);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based
    const year = date.getFullYear();

    // Add leading zeros if necessary
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      // render: (text) => <p className="text-sm">{text}</p>,
    },
    {
      title: 'User Name',
      dataIndex: 'userName',
      // render: (text) => <p className="text-sm">{text}</p>,
    },

    {
      title: 'Email',
      dataIndex: 'email',
      render: (text) => <p className="text-sm">{text}</p>,
    },
    {
      title: 'Order Amount',
      dataIndex: 'orderAmount',
      render: (text) => <p className="text-sm">{text}</p>,
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      render: (text) => {
        return <div>{formatDateToDDMMYYYY(text)}</div>;
      },
    },

    {
      title: 'View Book Details',
      dataIndex: 'bookDetails',
      render: (text, raw) => {
        console.log('text', raw?.bookdetails);
        return (
          <div>
            <Button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                setModalData(raw?.bookdetails);
              }}
            >
              View Detalis
            </Button>
          </div>
        );
      },
    },
  ];

  const dataSource = order?.map((item) => {
    return {
      orderId: item?.order_id,
      userName: item?.user_info?.name,
      email: item?.user_info?.email,
      orderAmount: item?.amount,
      orderDate: item?.created_at,
      bookdetails: item?.items,
    };
  });

  return (
    <>
      <Table
        className="w-full"
        size="middle"
        loading={false}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          size: 'small',
          defaultPageSize: limit,
          pageSizeOptions: ['20', '40', '80', '140'],
          onShowSizeChange: (_, limit) => {
            setLimit(limit);
          },
          current: page,
          total: order?.count,
          onChange: (page) => setPage(page),
          showTotal: (total, range) => (
            <span>
              {range[0]}-{range[1]} of {total} items
            </span>
          ),
        }}
      />
      <DetailModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalData={modalData}
      />
    </>
  );
};
export default OrderCard;

const DetailModal = ({ isModalOpen, setIsModalOpen, modalData }) => {
  console.log('bsdk', modalData);
  return (
    <Modal
      title="Books Detals"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={''}
    >
      {modalData?.map((data, index) => (
        <div className="mt-8 flex" key={index}>
          <img src={data?.book?.image} alt="nhi mili" width={50} height={50} />
          <div className="ml-6">
            <p>
              <span className="font-medium">Book Name : </span>{' '}
              {data?.book?.name}
            </p>
            <p>
              {' '}
              <span className="font-medium">Book Price :</span>{' '}
              {data?.book?.price}
            </p>
            <div>
              <span className="font-medium">Book Category :</span>
              {data?.book?.catergories?.map((cat) => (
                <div className="inline mx-2 text-normal">{cat?.name}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Modal>
  );
};

// import React from 'react';
// import { Card } from 'antd';

// const OrderCard = ({ order }) => {
//   const { user_info, items, amount } = order;

//   return (
//     <div className="p-4">
//       <Card
//         title="Order Details"
//         style={{ width: 300 }}
//         // cover={
//         //   <img
//         //     alt="book cover"
//         //     src={items[0].book.image}
//         //     style={{ maxHeight: 200, objectFit: 'cover' }}
//         //   />
//         // }
//       >
//         <div className="font-semibold mb-4">
//           <div className="flex justify-between">
//             <p className="text-lg">User:</p>
//             <p className="text-base">{user_info?.name}</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="text-lg">User:</p>
//             <p className="text-sm text-gray-600">{user_info?.email}</p>
//           </div>
//         </div>
//         <div className="font-semibold mb-4 flex justify-between">
//           <p className="text-lg">Total Amount:</p>
//           <p className="text-base">Rs {amount}</p>
//         </div>
//         {/* Render items */}
//         {items.map((item, index) => (
//           <div key={index} className="mb-4">
//             <img
//               src={item.book.image}
//               alt="book cover"
//               style={{ maxHeight: 80, objectFit: 'cover' }}
//             />
//             <div className="flex justify-between mt-2">
//               <div>
//                 <p className="text-lg font-semibold">{item.book.name}</p>
//                 <p className="text-sm text-gray-600">
//                   Category:{' '}
//                   {item.book.catergories
//                     .map((category) => category.name)
//                     .join(', ')}
//                 </p>
//               </div>
//             </div>
//             <div className="mt-2">
//               <p className="text-lg font-semibold">Quantity: {item.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </Card>
//     </div>
//   );
// };

// export default OrderCard;
