import { createSlice } from "@reduxjs/toolkit";
import { pending, rejected } from "./cases";
import { getCart } from "./action";

const initialState = {
  loading: false,
  cart: {},
  count: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (_) => {
    const addCase = _.addCase;

    addCase(getCart.pending, pending);
    addCase(getCart.fulfilled, (state, actions) => {
      state.cart = actions?.payload;
      state.count = actions?.payload?.items?.length || 0;
    });
    addCase(getCart.rejected, rejected);
  },
});

export const actions = cart.actions;
export default cart.reducer;
