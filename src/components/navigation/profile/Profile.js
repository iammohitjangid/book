import { Button } from "antd";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import API from "../../../services/apiAxios";
const Profile = () => {
  const [username, setUserName] = useState("");

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await API.get("/api/v1/auth");
      console.log(response);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    onFinish();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <span className="mt-10 text-center text-xl font-bold leading-2 tracking-tight text-white mr-3">
        Hi {username},
      </span>
      <Button
        onClick={() => {
          Cookies.remove("authToken");
          Cookies.remove("role");
          navigate("/auth/login", { replace: true });
        }}
        type="default"
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
