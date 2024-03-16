import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./Global";

export const reducers = combineReducers({ cart: cartReducer });
