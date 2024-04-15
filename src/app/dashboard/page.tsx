import React, { Suspense } from "react";
import Dashboard from "@/components/Dashboard";
import axios from "axios";

const fetchProducts = async () => {
  try {
    const res = await axios("https://fakestoreapi.com/products?limit=50");
    return res.data;
  } catch (error) {
    console.error(error);
    throw error
  }

};

const DashboardPage = async () => {
  const products = await fetchProducts();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard products={products} />
    </Suspense>
  );
};

export default DashboardPage;
