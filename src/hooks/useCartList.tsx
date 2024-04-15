import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getCartList } from "../reducers/cartSlice";
import { CartProduct } from "@/types/product";

export const useCartList = () => {
  const cartList: CartProduct[] = useSelector(getCartList);

  return useMemo(() => ({ cartList }), [cartList]);
};
