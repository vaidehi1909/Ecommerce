import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getsSelectedCategory, getProductList } from "../reducers/productSlice";
import { Product } from "@/types/product";

export const useProductList = () => {
  const products: Product[] = useSelector(getProductList);
  const category: string = useSelector(getsSelectedCategory);

  return useMemo(() => ({ products: products.filter((product) => product.category === category || category === 'all') }), [category, products]);
};
