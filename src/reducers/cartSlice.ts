import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { CartProduct } from "@/types/product";

// Define a type for the slice state
interface CartState {
  list: CartProduct[];
}

// Define the initial state using that type
const initialState: CartState = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartProduct>) => {
      state.list.push(payload);
    },
    clearCart: (state) => {
      state.list = [];
    },
    removeItem: (state, { payload }: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== payload);
    },
  },
});

export const { addToCart, clearCart, removeItem } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCartList = (state: RootState) => state.cart.list;

export default cartSlice.reducer;
