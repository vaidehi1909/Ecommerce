import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { Product } from "@/types/product";

// Define a type for the slice state
export interface ProductState {
  list: Product[];
  categories: string[];
  selectedCategory: string;
}

// Define the initial state using that type
const initialState: ProductState = {
  list: [],
  categories: [],
  selectedCategory: "all",
};

export const ProductSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProductList: (state, { payload }: PayloadAction<Product[]>) => {
      state.list = payload;
      state.categories = ['all', ...payload.map((product) => product.category).filter((value, index, self) => self.indexOf(value) === index)];
    },
    setSelectedCategory: (state, { payload }: PayloadAction<string>) => {
      state.selectedCategory = payload;
    }
  },
});

export const { setProductList, setSelectedCategory } = ProductSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getProductList = (state: RootState) => state.product.list;
export const getProductCategories = (state: RootState) => state.product.categories;
export const getsSelectedCategory = (state: RootState) => state.product.selectedCategory;

export default ProductSlice.reducer;
