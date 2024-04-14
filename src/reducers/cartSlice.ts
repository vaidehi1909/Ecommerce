import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { Product } from "@/types/product";

// Define a type for the slice state
export interface CartState {
  cart: Product[];
}

// Define the initial state using that type
const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      state.cart.push(payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
  },
});

export const { addToCart, clearCart, removeItem } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
