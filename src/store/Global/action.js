import { message } from "antd";
import API from "../../services/apiAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk(
  "getCart",
  async (_, { rejectWithValue }) => {
    try {
      const result = await API.get(`/api/v1/cart/user`);
      return result.data?.data;
    } catch (e) {
      const error = e;
      message.destroy();
      message.error(error?.response?.data?.message);
      if (!error.response) throw error;
      return rejectWithValue(error.response.data);
    }
  }
);
