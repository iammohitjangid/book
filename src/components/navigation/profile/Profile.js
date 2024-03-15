import { Button, message } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import API from '../../../services/apiAxios';
const Profile = () => {
  const [username, setUserName] = useState('');

  const onFinish = async (values) => {
    console.log(values);
    try {
      const profileUrl =
        Cookies.get('role') == 'admin' ? '/api/v1/auth/admin' : '/api/v1/auth';
      const response = await API.get(profileUrl);
      setUserName(response?.data?.data?.name);
    } catch (error) {
      /*  message.destroy();
      message.error(error?.response?.data?.message); */
    }
  };

  useEffect(() => {
    onFinish();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <span className="mt-10 text-center text-xl font-bold leading-2 tracking-tight text-white mr-3">
        Hi {username || 'User'},
      </span>
      <Button
        onClick={() => {
          Cookies.remove('authToken');
          Cookies.remove('role');
          navigate('/auth/login', { replace: true });
        }}
        type="default"
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
