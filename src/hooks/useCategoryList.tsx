import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getProductCategories } from "../reducers/productSlice";

export const useCategoryList = () => {
  const categories: string[] = useSelector(getProductCategories);

  return useMemo(() => ({ categories }), [categories]);
};
