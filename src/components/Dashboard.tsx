"use client";

import React from "react";
import { Product } from "@/types/product";
import AppBar from "./AppBar";

const Dashboard = (props: { products: Product[] }) => {
  const { products } = props;


  return (
    <>
      <AppBar />
      Dashboard page {products.length}
    </>
  );
};

export default Dashboard;
