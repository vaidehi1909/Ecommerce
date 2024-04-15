"use client";

import React, { useEffect } from "react";
import { Product } from "@/types/product";
import { useAppDispatch } from "@/hooks/redux";
import { setProductList } from "@/reducers/productSlice";
import ProductCardList from "./ProductCardList";

const Dashboard = (props: { products: Product[] }) => {
  const { products } = props;
  const dispatch = useAppDispatch()

  useEffect(() => {
    const dispatchActions = async () => {
      await dispatch(setProductList(products))
    }
    dispatchActions()
  }, [])


  return (
    <ProductCardList />
  );
};

export default Dashboard;
